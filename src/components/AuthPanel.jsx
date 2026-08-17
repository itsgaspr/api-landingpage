import { useState } from "react";
import {
  createUser,
  generateKey,
  forgotPassword,
} from "../lib/api.js";
import { Link } from "../lib/router.jsx";
import { useTranslation } from "../lib/i18n/index.js";
import { useFormStatus } from "../hooks/useFormStatus.js";
import Button from "./Button.jsx";

function Field({ label, id, type = "text", value, onChange, placeholder, autoComplete }) {
  return (
    <label className="flex flex-col gap-2 text-sm text-neutral-400" htmlFor={id}>
      <span>{label}</span>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="rounded-xl border border-white/10 bg-black px-4 py-3 text-white outline-none transition placeholder:text-neutral-600 focus:border-accent"
      />
    </label>
  );
}

function StatusMessage({ message, type = "info", action }) {
  const isSuccess = type === "success";

  return (
    <div
      className={`rounded-xl border px-4 py-3 text-sm leading-6 ${
        isSuccess
          ? "border-accent bg-accent-muted text-neutral-200"
          : "border-white/10 bg-white/[0.03] text-neutral-300"
      }`}
    >
      <p>{isSuccess ? `✓ ${message}` : message}</p>
      {action && <div className="mt-3">{action}</div>}
    </div>
  );
}

function SignUpForm() {
  const { t } = useTranslation();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { status, showStatus, showSuccess, clearStatus } = useFormStatus();

  async function handleSubmit(event) {
    event.preventDefault();
    clearStatus();

    if (!username.trim() || !email.trim() || !password) {
      showStatus({ type: "error", message: t.auth.errors.fillAll });
      return;
    }

    if (password.length < 8) {
      showStatus({ type: "error", message: t.auth.errors.passwordLength });
      return;
    }

    if (password !== confirmPassword) {
      showStatus({ type: "error", message: t.auth.errors.passwordMatch });
      return;
    }

    setLoading(true);

    try {
      const { ok, data } = await createUser({
        username: username.trim(),
        email: email.trim(),
        password,
      });

      if (!ok || !data.success) {
        showStatus({
          type: "error",
          message: data.message || t.auth.errors.signupFailed,
        });
        return;
      }

      showSuccess(t.auth.success.signup, () => {
        setUsername("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
      });
    } catch {
      showStatus({ type: "error", message: t.auth.errors.network });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <Field
        label={t.auth.fields.username}
        id="signup-username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        placeholder={t.auth.placeholders.username}
        autoComplete="username"
      />
      <Field
        label={t.auth.fields.email}
        id="signup-email"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder={t.auth.placeholders.email}
        autoComplete="email"
      />
      <Field
        label={t.auth.fields.password}
        id="signup-password"
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        placeholder={t.auth.placeholders.password}
        autoComplete="new-password"
      />
      <Field
        label={t.auth.fields.confirmPassword}
        id="signup-confirm"
        type="password"
        value={confirmPassword}
        onChange={(event) => setConfirmPassword(event.target.value)}
        placeholder={t.auth.placeholders.confirmPassword}
        autoComplete="new-password"
      />

      {status && (
        <StatusMessage
          message={status.message}
          type={status.type}
          action={
            status.type === "success" ? (
              <Link
                to="/docs"
                className="inline-flex rounded-full bg-white px-4 py-2 text-xs font-medium text-black transition hover:bg-neutral-200"
              >
                {t.auth.goToDocs}
              </Link>
            ) : null
          }
        />
      )}

      <Button type="submit" disabled={loading} className="mt-2 w-full">
        {loading ? t.auth.submit.signupLoading : t.auth.submit.signup}
      </Button>
    </form>
  );
}

function GenerateKeyForm({ onForgotPassword }) {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [keyName, setKeyName] = useState("default");
  const [loading, setLoading] = useState(false);
  const { status, showStatus, showSuccess, clearStatus } = useFormStatus();

  async function handleSubmit(event) {
    event.preventDefault();
    clearStatus();

    if (!email.trim() || !password) {
      showStatus({ type: "error", message: t.auth.errors.fillAll });
      return;
    }

    setLoading(true);

    try {
      const { ok, data } = await generateKey({
        email: email.trim(),
        password,
        key_name: keyName.trim() || "default",
      });

      if (!ok || !data.success) {
        showStatus({
          type: "error",
          message: data.message || t.auth.errors.generateFailed,
        });
        return;
      }

      showSuccess(t.auth.success.generate, () => {
        setEmail("");
        setPassword("");
        setKeyName("default");
      });
    } catch {
      showStatus({ type: "error", message: t.auth.errors.network });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <p className="text-sm leading-6 text-neutral-500">{t.auth.generateHint}</p>
      <Field
        label={t.auth.fields.accountEmail}
        id="generate-email"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder={t.auth.placeholders.email}
        autoComplete="email"
      />
      <Field
        label={t.auth.fields.password}
        id="generate-password"
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        placeholder={t.auth.placeholders.password}
        autoComplete="current-password"
      />
      <Field
        label={t.auth.fields.keyName}
        id="generate-key-name"
        value={keyName}
        onChange={(event) => setKeyName(event.target.value)}
        placeholder={t.auth.placeholders.keyName}
      />

      {status && <StatusMessage message={status.message} type={status.type} />}

      <Button type="submit" disabled={loading} className="mt-2 w-full">
        {loading ? t.auth.submit.generateLoading : t.auth.submit.generate}
      </Button>

      <button
        type="button"
        className="text-sm text-accent underline-offset-4 hover:underline"
        onClick={onForgotPassword}
      >
        {t.auth.forgotPasswordLink}
      </button>
    </form>
  );
}

function ForgotPasswordForm({ onBack }) {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { status, showStatus, showSuccess, clearStatus } = useFormStatus();

  async function handleSubmit(event) {
    event.preventDefault();
    clearStatus();

    if (!email.trim()) {
      showStatus({ type: "error", message: t.auth.errors.emailRequired });
      return;
    }

    setLoading(true);

    try {
      const { ok, data } = await forgotPassword({ email: email.trim() });

      if (!ok || !data.success) {
        showStatus({
          type: "error",
          message: data.message || t.auth.errors.network,
        });
        return;
      }

      showSuccess(t.auth.success.forgot, () => {
        setEmail("");
      });
    } catch {
      showStatus({ type: "error", message: t.auth.errors.network });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <p className="text-sm leading-6 text-neutral-500">{t.auth.forgotHint}</p>
      <Field
        label={t.auth.fields.accountEmail}
        id="forgot-email"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder={t.auth.placeholders.email}
        autoComplete="email"
      />

      {status && <StatusMessage message={status.message} type={status.type} />}

      <Button type="submit" disabled={loading} className="mt-2 w-full">
        {loading ? t.auth.submit.forgotLoading : t.auth.submit.forgot}
      </Button>

      <button
        type="button"
        className="text-sm text-neutral-500 underline-offset-4 hover:text-neutral-300 hover:underline"
        onClick={onBack}
      >
        {t.auth.backToGenerate}
      </button>
    </form>
  );
}

export default function AuthPanel({ initialView = "signup" }) {
  const { t } = useTranslation();
  const startForgot = initialView === "forgot";
  const [activeTab, setActiveTab] = useState(startForgot ? "generate" : initialView);
  const [authView, setAuthView] = useState(startForgot ? "forgot" : initialView);

  const tabs = [
    { id: "signup", label: t.auth.tabs.signup },
    { id: "generate", label: t.auth.tabs.generate },
  ];

  function selectTab(tabId) {
    setActiveTab(tabId);
    setAuthView(tabId);
  }

  function showForgot() {
    setActiveTab("generate");
    setAuthView("forgot");
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
      <div className="grid lg:grid-cols-2">
        <div className="border-b border-white/8 p-8 lg:border-b-0 lg:border-r">
          <h3 className="text-sm font-medium text-white">{t.auth.howItWorks}</h3>
          <ol className="mt-4 space-y-3 text-sm leading-6 text-neutral-400">
            {t.auth.steps.map((step, index) => (
              <li key={step} className="flex gap-3">
                <span className="font-mono text-xs text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>

          <pre className="mt-8 overflow-x-auto rounded-xl border border-white/8 bg-black p-4 font-mono text-xs leading-6 text-neutral-400">
            {t.docs.authExample}
          </pre>
        </div>

        <div className="p-8">
          {authView === "signup" || authView === "generate" ? (
            <div className="mb-6 flex gap-1 rounded-full border border-white/8 bg-black p-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => selectTab(tab.id)}
                  className={`flex-1 rounded-full px-4 py-2 text-sm transition ${
                    activeTab === tab.id
                      ? "bg-white text-black"
                      : "text-neutral-500 hover:text-neutral-300"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          ) : (
            <h3 className="mb-6 text-sm font-medium text-white">{t.auth.tabs.forgot}</h3>
          )}

          {authView === "signup" && <SignUpForm />}
          {authView === "generate" && <GenerateKeyForm onForgotPassword={showForgot} />}
          {authView === "forgot" && (
            <ForgotPasswordForm onBack={() => setAuthView("generate")} />
          )}

          <p className="mt-5 text-xs leading-5 text-neutral-600">{t.auth.footnote}</p>
        </div>
      </div>
    </div>
  );
}

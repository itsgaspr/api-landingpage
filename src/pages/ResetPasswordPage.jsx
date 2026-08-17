import { useEffect, useMemo, useState } from "react";
import { Link } from "../lib/router.jsx";
import { resetPassword } from "../lib/api.js";
import { useTranslation } from "../lib/i18n/index.js";
import { useFormStatus } from "../hooks/useFormStatus.js";
import Button from "../components/Button.jsx";

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

export default function ResetPasswordPage() {
  const { t } = useTranslation();
  const token = useMemo(
    () => new URLSearchParams(window.location.search).get("token")?.trim() || "",
    []
  );
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { status, showStatus, showSuccess, clearStatus } = useFormStatus();

  useEffect(() => {
    if (!token) {
      showStatus({ type: "error", message: t.auth.errors.invalidResetLink });
    }
  }, [token, t.auth.errors.invalidResetLink, showStatus]);

  async function handleSubmit(event) {
    event.preventDefault();
    clearStatus();

    if (!token) {
      showStatus({ type: "error", message: t.auth.errors.invalidResetLink });
      return;
    }

    if (!newPassword) {
      showStatus({ type: "error", message: t.auth.errors.fillAll });
      return;
    }

    if (newPassword.length < 8) {
      showStatus({ type: "error", message: t.auth.errors.passwordLength });
      return;
    }

    if (newPassword !== confirmPassword) {
      showStatus({ type: "error", message: t.auth.errors.passwordMatch });
      return;
    }

    setLoading(true);

    try {
      const { ok, data } = await resetPassword({
        token,
        new_password: newPassword,
      });

      if (!ok || !data.success) {
        showStatus({
          type: "error",
          message: data.message || t.auth.errors.invalidResetLink,
        });
        return;
      }

      showSuccess(t.auth.success.reset, () => {
        setNewPassword("");
        setConfirmPassword("");
      });
    } catch {
      showStatus({ type: "error", message: t.auth.errors.network });
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-[70vh] items-center pt-24">
      <div className="mx-auto w-full max-w-md px-6 py-16">
        <h1 className="text-2xl font-medium tracking-tight text-white">
          {t.auth.resetPage.title}
        </h1>
        <p className="mt-3 text-sm leading-7 text-neutral-400">
          {token ? t.auth.resetPage.description : t.auth.resetPage.invalidDescription}
        </p>

        {token ? (
          <form className="mt-8 flex flex-col gap-4" onSubmit={handleSubmit}>
            <Field
              label={t.auth.fields.newPassword}
              id="reset-password"
              type="password"
              value={newPassword}
              onChange={(event) => setNewPassword(event.target.value)}
              placeholder={t.auth.placeholders.password}
              autoComplete="new-password"
            />
            <Field
              label={t.auth.fields.confirmNewPassword}
              id="reset-confirm"
              type="password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              placeholder={t.auth.placeholders.confirmPassword}
              autoComplete="new-password"
            />

            {status && (
              <div
                className={`rounded-xl border px-4 py-3 text-sm leading-6 ${
                  status.type === "success"
                    ? "border-accent bg-accent-muted text-neutral-200"
                    : "border-white/10 bg-white/[0.03] text-neutral-300"
                }`}
              >
                {status.type === "success" ? `✓ ${status.message}` : status.message}
                {status.type === "success" && (
                  <Link
                    to="/docs"
                    className="mt-3 inline-flex rounded-full bg-white px-4 py-2 text-xs font-medium text-black transition hover:bg-neutral-200"
                  >
                    {t.auth.goToDocs}
                  </Link>
                )}
              </div>
            )}

            <Button type="submit" disabled={loading} className="mt-2 w-full">
              {loading ? t.auth.submit.resetLoading : t.auth.submit.reset}
            </Button>
          </form>
        ) : (
          <div className="mt-8">
            {status && (
              <p className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-neutral-300">
                {status.message}
              </p>
            )}
            <Link
              to="/?forgot=1#get-started"
              className="mt-6 inline-flex rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:bg-neutral-200"
            >
              {t.auth.resetPage.requestNewLink}
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}

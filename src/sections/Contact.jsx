import { useState } from "react";
import { submitContact } from "../lib/api.js";
import { useTranslation } from "../lib/i18n/index.js";
import { useFormStatus } from "../hooks/useFormStatus.js";
import PageShell from "../components/PageShell.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import Button from "../components/Button.jsx";

const inputClass =
  "rounded-xl border border-white/10 bg-black px-4 py-3 text-white outline-none transition placeholder:text-neutral-600 focus:border-accent";

export default function Contact() {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState(t.contact.topics[0]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { status, showStatus, showSuccess, clearStatus } = useFormStatus();

  async function handleSubmit(event) {
    event.preventDefault();
    clearStatus();

    if (!email.trim() || !message.trim()) {
      showStatus({ type: "error", message: t.contact.errors.required });
      return;
    }

    setLoading(true);

    try {
      const { ok, data } = await submitContact({
        name: name.trim(),
        email: email.trim(),
        topic,
        message: message.trim(),
      });

      if (!ok || !data.success) {
        showStatus({
          type: "error",
          message: data.message || t.contact.errors.sendFailed,
        });
        return;
      }

      showSuccess(t.contact.success, () => {
        setName("");
        setEmail("");
        setMessage("");
        setTopic(t.contact.topics[0]);
      });
    } catch {
      showStatus({ type: "error", message: t.contact.errors.network });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="section-padding border-t border-white/[0.06]">
      <PageShell>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <SectionHeader title={t.contact.title} description={t.contact.description} />

          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-white/8 bg-white/[0.02] p-8"
          >
            <label className="flex flex-col gap-2 text-sm text-neutral-400" htmlFor="contact-name">
              <span>{t.contact.fields.name}</span>
              <input
                id="contact-name"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder={t.contact.placeholders.name}
                className={inputClass}
              />
            </label>

            <label
              className="mt-4 flex flex-col gap-2 text-sm text-neutral-400"
              htmlFor="contact-email"
            >
              <span>{t.contact.fields.email}</span>
              <input
                id="contact-email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder={t.contact.placeholders.email}
                required
                className={inputClass}
              />
            </label>

            <label
              className="mt-4 flex flex-col gap-2 text-sm text-neutral-400"
              htmlFor="contact-topic"
            >
              <span>{t.contact.fields.topic}</span>
              <select
                id="contact-topic"
                value={topic}
                onChange={(event) => setTopic(event.target.value)}
                className={inputClass}
              >
                {t.contact.topics.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>

            <label
              className="mt-4 flex flex-col gap-2 text-sm text-neutral-400"
              htmlFor="contact-message"
            >
              <span>{t.contact.fields.message}</span>
              <textarea
                id="contact-message"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder={t.contact.placeholders.message}
                required
                rows={5}
                className={inputClass}
              />
            </label>

            {status && (
              <div
                className={`mt-4 rounded-xl border px-4 py-3 text-sm leading-6 ${
                  status.type === "success"
                    ? "border-accent bg-accent-muted text-neutral-200"
                    : "border-white/10 bg-white/[0.03] text-neutral-300"
                }`}
              >
                {status.type === "success" ? `✓ ${status.message}` : status.message}
              </div>
            )}

            <Button type="submit" disabled={loading} className="mt-6 w-full">
              {loading ? t.contact.submitting : t.contact.submit}
            </Button>

            <p className="mt-4 text-xs leading-5 text-neutral-600">{t.contact.privacyNote}</p>
          </form>
        </div>
      </PageShell>
    </section>
  );
}

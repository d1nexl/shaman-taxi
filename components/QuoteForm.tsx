"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { Reveal } from "./ui/Reveal";
import { ContactChannels } from "./ContactChannels";
import { site } from "@/lib/site";
import type { Dictionary } from "@/lib/i18n/dictionaries";

type Status = "idle" | "submitting" | "success" | "error";

type FieldKey = "name" | "phone" | "email" | "service" | "from" | "to" | "date" | "message";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[+()\d][\d\s()-]{7,}$/;

export function QuoteForm({
  dict,
  contact,
  serviceOptions,
}: {
  dict: Dictionary["quote"];
  contact: Dictionary["contact"];
  serviceOptions: string[];
}) {
  const f = dict.form;
  const [status, setStatus] = useState<Status>("idle");
  const [values, setValues] = useState<Record<FieldKey, string>>({
    name: "",
    phone: "",
    email: "",
    service: "",
    from: "",
    to: "",
    date: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<FieldKey, string>>>({});

  function setField(key: FieldKey, value: string) {
    setValues((v) => ({ ...v, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function validate() {
    const next: Partial<Record<FieldKey, string>> = {};
    if (!values.name.trim()) next.name = f.required;
    if (!values.phone.trim()) next.phone = f.required;
    else if (!PHONE_RE.test(values.phone.trim())) next.phone = f.invalidPhone;
    if (values.email.trim() && !EMAIL_RE.test(values.email.trim()))
      next.email = f.invalidEmail;
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;
    if (!validate()) return;

    setStatus("submitting");
    const form = e.currentTarget;
    const honeypot = (form.elements.namedItem("company") as HTMLInputElement)?.value ?? "";

    // Web3Forms is submitted directly from the browser (its intended use).
    const payload = {
      access_key: site.web3formsKey,
      subject: `Nová poptávka — Shaman: ${values.name}`,
      from_name: "Shaman — web",
      replyto: values.email || undefined,
      botcheck: honeypot ? true : undefined,
      Jméno: values.name,
      Telefon: values.phone,
      Email: values.email || "—",
      Služba: values.service || "—",
      Odkud: values.from || "—",
      Kam: values.to || "—",
      Termín: values.date || "—",
      Zpráva: values.message || "—",
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await res.json().catch(() => ({}))) as { success?: boolean };
      if (!res.ok || !result.success) throw new Error("submission failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  function reset() {
    setValues({
      name: "",
      phone: "",
      email: "",
      service: "",
      from: "",
      to: "",
      date: "",
      message: "",
    });
    setErrors({});
    setStatus("idle");
  }

  const inputBase =
    "w-full rounded-lg border bg-paper px-4 py-3 text-ink placeholder:text-muted/70 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brass/40";

  return (
    <section id="quote" className="scroll-mt-24 bg-ink py-20 text-paper sm:py-28 lg:py-32">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left — intro + direct contact */}
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow text-brass-soft">{dict.eyebrow}</p>
              <h2 className="mt-5 font-display text-4xl font-semibold tracking-tightest text-paper sm:text-5xl">
                {dict.title}
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-paper/60 text-pretty">
                {dict.lead}
              </p>
            </Reveal>

            <Reveal delay={0.1} className="mt-10 rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <h3 className="font-display text-lg font-medium text-paper">{dict.asideTitle}</h3>
              <p className="mt-1.5 text-sm text-paper/60">{dict.asideText}</p>
              <ContactChannels dict={contact} variant="outline" className="mt-5" />
            </Reveal>
          </div>

          {/* Right — form / success card */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-paper p-6 text-ink shadow-2xl sm:p-8">
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex min-h-[24rem] flex-col items-center justify-center text-center"
                  >
                    <CheckCircle2 className="h-14 w-14 text-brass" strokeWidth={1.5} />
                    <h3 className="mt-5 font-display text-2xl font-semibold">
                      {f.successTitle}
                    </h3>
                    <p className="mt-3 max-w-sm text-ink/60">{f.successText}</p>
                    <button
                      type="button"
                      onClick={reset}
                      className="mt-7 inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm font-medium transition-colors hover:border-ink"
                    >
                      {f.another}
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    noValidate
                    className="space-y-5"
                  >
                    {/* Honeypot */}
                    <div className="absolute left-[-9999px]" aria-hidden>
                      <label>
                        Company
                        <input type="text" name="company" tabIndex={-1} autoComplete="off" />
                      </label>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field
                        id="name"
                        label={f.name}
                        error={errors.name}
                        required
                      >
                        <input
                          id="name"
                          name="name"
                          type="text"
                          autoComplete="name"
                          placeholder={f.namePlaceholder}
                          value={values.name}
                          onChange={(e) => setField("name", e.target.value)}
                          className={`${inputBase} ${errors.name ? "border-red-400" : "border-line"}`}
                          aria-invalid={!!errors.name}
                        />
                      </Field>
                      <Field id="phone" label={f.phone} error={errors.phone} required>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          inputMode="tel"
                          autoComplete="tel"
                          placeholder={f.phonePlaceholder}
                          value={values.phone}
                          onChange={(e) => setField("phone", e.target.value)}
                          className={`${inputBase} ${errors.phone ? "border-red-400" : "border-line"}`}
                          aria-invalid={!!errors.phone}
                        />
                      </Field>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field id="email" label={f.email} error={errors.email}>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          inputMode="email"
                          autoComplete="email"
                          placeholder={f.emailPlaceholder}
                          value={values.email}
                          onChange={(e) => setField("email", e.target.value)}
                          className={`${inputBase} ${errors.email ? "border-red-400" : "border-line"}`}
                          aria-invalid={!!errors.email}
                        />
                      </Field>
                      <Field id="service" label={f.service}>
                        <select
                          id="service"
                          name="service"
                          value={values.service}
                          onChange={(e) => setField("service", e.target.value)}
                          className={`${inputBase} border-line ${values.service ? "text-ink" : "text-muted/70"}`}
                        >
                          <option value="">{f.servicePlaceholder}</option>
                          {serviceOptions.map((opt) => (
                            <option key={opt} value={opt} className="text-ink">
                              {opt}
                            </option>
                          ))}
                        </select>
                      </Field>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field id="from" label={f.from}>
                        <input
                          id="from"
                          name="from"
                          type="text"
                          placeholder={f.fromPlaceholder}
                          value={values.from}
                          onChange={(e) => setField("from", e.target.value)}
                          className={`${inputBase} border-line`}
                        />
                      </Field>
                      <Field id="to" label={f.to}>
                        <input
                          id="to"
                          name="to"
                          type="text"
                          placeholder={f.toPlaceholder}
                          value={values.to}
                          onChange={(e) => setField("to", e.target.value)}
                          className={`${inputBase} border-line`}
                        />
                      </Field>
                    </div>

                    <Field id="date" label={f.date}>
                      <input
                        id="date"
                        name="date"
                        type="date"
                        value={values.date}
                        onChange={(e) => setField("date", e.target.value)}
                        className={`${inputBase} border-line sm:max-w-[16rem]`}
                      />
                    </Field>

                    <Field id="message" label={f.message}>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        placeholder={f.messagePlaceholder}
                        value={values.message}
                        onChange={(e) => setField("message", e.target.value)}
                        className={`${inputBase} resize-none border-line`}
                      />
                    </Field>

                    {status === "error" && (
                      <div
                        role="alert"
                        className="flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800"
                      >
                        <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" strokeWidth={1.75} />
                        <span>
                          <strong className="font-medium">{f.errorTitle}.</strong> {f.errorText}
                        </span>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-ink px-7 py-4 text-sm font-medium text-paper transition-colors duration-300 hover:bg-brass-dark disabled:opacity-70 sm:w-auto"
                    >
                      {status === "submitting" ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" strokeWidth={2} />
                          {f.submitting}
                        </>
                      ) : (
                        <>
                          {f.submit}
                          <ArrowRight
                            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                            strokeWidth={2}
                          />
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  error,
  required,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 flex items-center gap-1.5 text-sm font-medium text-ink/80">
        {label}
        {required && <span className="text-brass">*</span>}
      </label>
      {children}
      {error && <p className="mt-1.5 text-xs text-red-600">{error}</p>}
    </div>
  );
}

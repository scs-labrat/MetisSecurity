import React, { useState } from "react";
import { siteConfig } from "@/lib/siteConfig";

// Enquiry form: name/company, work email, "What would you like assessed?".
// Validates input and shows an honest demo/unconfigured state until a
// delivery handler is connected (siteConfig.contact.deliveryConfigured).
export default function ContactForm() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | demo | error

  const configured = siteConfig.contact.deliveryConfigured;

  const validate = (v) => {
    const e = {};
    if (!v.name.trim()) e.name = "Please tell us who you are.";
    if (!v.email.trim()) e.email = "A work email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = "That email doesn't look right.";
    if (!v.message.trim()) e.message = "Tell us what you'd like assessed.";
    return e;
  };

  const onChange = (field) => (e) => {
    setValues((p) => ({ ...p, [field]: e.target.value }));
    if (status !== "idle") setStatus("idle");
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const e2 = validate(values);
    setErrors(e2);
    if (Object.keys(e2).length) return;
    setStatus("submitting");
    // Simulated handler. Replace with a real submission endpoint when configured.
    await new Promise((r) => setTimeout(r, 900));
    if (!configured) {
      setStatus("demo");
      return;
    }
    // Future: POST to configured handler. Until then we never claim success.
    setStatus("error");
  };

  if (status === "demo") {
    return (
      <div className="border border-border bg-secondary/40 p-6 md:p-8">
        <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-muted-foreground">
          Demo mode — not yet delivered
        </p>
        <p className="mt-3 text-[16px] leading-relaxed text-foreground">
          Thanks, {values.name.split(" ")[0] || "there"}. Enquiry delivery isn't connected yet, so this
          submission wasn't sent. Once a recipient is configured in the site settings, this form will
          forward your message automatically.
        </p>
        <dl className="mt-6 space-y-3 border-t border-border pt-6 text-[15px]">
          <div><dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">Name</dt><dd className="mt-1">{values.name}</dd></div>
          <div><dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">Email</dt><dd className="mt-1">{values.email}</dd></div>
          <div><dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">What would you like assessed?</dt><dd className="mt-1 whitespace-pre-wrap">{values.message}</dd></div>
        </dl>
        <button
          type="button"
          onClick={() => { setStatus("idle"); setValues({ name: "", email: "", message: "" }); }}
          className="mt-6 font-mono text-[12px] uppercase tracking-[0.14em] text-foreground underline underline-offset-4 hover:opacity-60"
        >
          Start a new enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-4">
      <Field
        label="Name / Company"
        error={errors.name}
        children={
          <input
            type="text"
            value={values.name}
            onChange={onChange("name")}
            placeholder="Your name and company"
            className="contact-input"
          />
        }
      />
      <Field
        label="Work email"
        error={errors.email}
        children={
          <input
            type="email"
            value={values.email}
            onChange={onChange("email")}
            placeholder="you@company.com"
            className="contact-input"
          />
        }
      />
      <Field
        label="What would you like assessed?"
        error={errors.message}
        children={
          <textarea
            value={values.message}
            onChange={onChange("message")}
            placeholder="A short note on the system, environment, or risk you're thinking about. Technical detail can follow later."
            rows={6}
            className="contact-input resize-none"
          />
        }
      />
      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-2 h-[56px] w-full bg-foreground text-[15px] font-medium uppercase tracking-[0.08em] text-background transition-opacity hover:opacity-90 disabled:opacity-50"
      >
        {status === "submitting" ? "Sending…" : "Send enquiry"}
      </button>
      {status === "error" && (
        <p className="text-[14px] text-destructive">
          Something went wrong on our end. Please try again, or email us directly.
        </p>
      )}
      {!configured && status === "idle" && (
        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
          Demo mode — enquiry delivery is not yet configured.
        </p>
      )}
    </form>
  );
}

function Field({ label, error, children }) {
  return (
    <label className="block">
      <span className="mb-2 block font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
        {label}
      </span>
      {children}
      {error && <span className="mt-2 block text-[13px] text-destructive">{error}</span>}
    </label>
  );
}
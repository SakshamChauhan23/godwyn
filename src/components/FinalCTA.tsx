"use client";

import { useState } from "react";

export default function FinalCTA() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="intake" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Start your build
            </p>
            <h2 className="mb-6 text-4xl font-extrabold uppercase leading-[0.95] tracking-tightest sm:text-5xl">
              Show us the
              <br />
              <span className="text-accent">workflow</span>
            </h2>
            <p className="max-w-md text-base leading-relaxed text-ink/60">
              Tell us about a workflow that happens repeatedly, has an
              internal owner, and can be measured. That is what we build. If
              it is a simple chatbot or a one time connection, we are
              probably not the right fit, and we will tell you so.
            </p>
          </div>

          <div className="rounded-2xl border border-black/10 bg-white p-8 sm:p-10">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center py-16 text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent-light text-accent">
                  ✓
                </div>
                <h3 className="mb-2 text-lg font-extrabold uppercase tracking-wide">
                  Got it
                </h3>
                <p className="max-w-xs text-sm leading-relaxed text-ink/55">
                  We will review the workflow and follow up within two
                  business days.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-5"
              >
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <Field label="Name" name="name" required />
                  <Field
                    label="Work email"
                    name="email"
                    type="email"
                    required
                  />
                </div>
                <Field label="Company" name="company" required />
                <TextArea
                  label="Describe the workflow"
                  name="workflow"
                  placeholder="What happens, how often, and who does it today?"
                  required
                />
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <Field
                    label="Who owns this process internally?"
                    name="owner"
                  />
                  <Field
                    label="How is success measured today?"
                    name="metric"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent/90"
                >
                  Submit workflow
                  <span aria-hidden>↗</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="block text-sm">
      <span className="mb-1.5 block font-medium text-ink/70">{label}</span>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-lg border border-black/15 bg-background px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-accent"
      />
    </label>
  );
}

function TextArea({
  label,
  name,
  required = false,
  placeholder,
}: {
  label: string;
  name: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="block text-sm">
      <span className="mb-1.5 block font-medium text-ink/70">{label}</span>
      <textarea
        name={name}
        required={required}
        placeholder={placeholder}
        rows={4}
        className="w-full resize-none rounded-lg border border-black/15 bg-background px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-accent"
      />
    </label>
  );
}

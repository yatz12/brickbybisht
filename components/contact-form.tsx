"use client";

import { useEffect, useRef, useState, type ChangeEvent, type FormEvent } from "react";

export function ContactForm() {
  const [status, setStatus] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const snackbarTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (snackbarTimer.current) clearTimeout(snackbarTimer.current);
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const email = form.elements.namedItem("email") as HTMLInputElement;
    const phone = form.elements.namedItem("phone") as HTMLInputElement;

    if (!email.value.trim() && !phone.value.trim()) {
      email.setCustomValidity("Enter an email address or phone number.");
      phone.setCustomValidity("Enter an email address or phone number.");
      form.reportValidity();
      return;
    }

    email.setCustomValidity("");
    phone.setCustomValidity("");
    setStatus("");
    setSuccessMessage("");
    if (snackbarTimer.current) clearTimeout(snackbarTimer.current);
    setIsSubmitting(true);

    const formData = new FormData(form);

    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          message: formData.get("message"),
        }),
      });
      const result: unknown = await response.json().catch(() => null);
      const errorMessage = result && typeof result === "object" && "error" in result && typeof result.error === "string"
        ? result.error
        : "We couldn't save your inquiry. Please try again.";

      if (!response.ok) {
        setStatus(errorMessage);
        return;
      }

      form.reset();
      setSuccessMessage("Your inquiry has been saved. Thank you.");
      snackbarTimer.current = setTimeout(() => {
        setSuccessMessage("");
        snackbarTimer.current = null;
      }, 3000);
    } catch {
      setStatus("We couldn't save your inquiry. Check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  function clearContactError(event: ChangeEvent<HTMLInputElement>) {
    const form = event.currentTarget.form;
    const email = form?.elements.namedItem("email") as HTMLInputElement | null;
    const phone = form?.elements.namedItem("phone") as HTMLInputElement | null;
    email?.setCustomValidity("");
    phone?.setCustomValidity("");
  }

  return (
    <>
      <form className="contact-form" id="inquiry-form" onSubmit={handleSubmit}>
        <label>
          Name
          <input autoComplete="name" name="name" required />
        </label>
        <div className="contact-fields">
          <label>
            Email
            <input autoComplete="email" name="email" onChange={clearContactError} type="email" />
          </label>
          <label>
            Phone
            <input autoComplete="tel" name="phone" onChange={clearContactError} type="tel" />
          </label>
        </div>
        <label>
          How can we help?
          <textarea name="message" required rows={4} />
        </label>
        <button className="button button-dark" disabled={isSubmitting} type="submit">{isSubmitting ? "Saving..." : "Inquiry Now"}</button>
        <p aria-live="polite" className="form-status" role="status">{status}</p>
      </form>
      {successMessage && <div aria-live="polite" className="success-snackbar" role="status">{successMessage}</div>}
    </>
  );
}
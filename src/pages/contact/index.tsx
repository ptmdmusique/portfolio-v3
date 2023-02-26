import "./index.scss";

import { Button, Input, TextArea } from "ducduchy-react-components";
import { Route } from "nextjs-routes";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { PageLayout } from "../../views/PageLayout";
import { ContactForm, ContactPossibleError } from "../api/form";
import { useState } from "react";

export default function ContactPage() {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactForm>();

  const [error, setError] = useState<null | string>(null);
  const [sent, setSent] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const onSubmit = handleSubmit(async (data) => {
    setError(null);
    setIsSending(true);

    const endpoint: Route["pathname"] = "/api/form";

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

    try {
      const response = await fetch(endpoint, options);
      const result = await response.json();

      if (result.error) {
        handleError(result.error);
      }

      setSent(true);
    } catch (error: any) {
      handleError(error);
    } finally {
      setIsSending(false);
    }
  });

  const handleError = (error: ContactPossibleError) => {
    switch (error) {
      case "contact/sent-failed":
      default:
        return t("pages.contact.error.sent-failed");
    }
  };

  return (
    <PageLayout
      pageTitle={t("pages.contact.seo-title")}
      pageDescription={t("pages.contact.seo-description")}
      pageClassName="contact-page"
    >
      <h1 className="page-title">{t("pages.contact.title")}</h1>

      <form className="form-container" onSubmit={onSubmit}>
        <Input
          label={t("pages.contact.name")}
          placeholder={t("pages.contact.name-placeholder")}
          autoComplete="name"
          {...register("name", {
            required: t("pages.contact.error.required"),
          })}
          caption={errors.name?.message}
          state={errors.name ? "error" : undefined}
        />

        <Input
          label={t("pages.contact.email")}
          placeholder="teo@email.com"
          type="email"
          autoComplete="email"
          {...register("email", {
            required: t("pages.contact.error.required"),
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: t("pages.contact.error.invalid-email"),
            },
          })}
          caption={errors.email?.message}
          state={errors.email ? "error" : undefined}
        />

        <TextArea
          label={t("pages.contact.message")}
          placeholder={t("pages.contact.message-placeholder")}
          minRows={10}
          {...register("message", {
            required: t("pages.contact.error.required"),
          })}
          caption={errors.message?.message}
          state={errors.message ? "error" : undefined}
        />

        <div className="cta-container">
          <Button
            type="submit"
            borderType="fill"
            colorType="primary"
            isLoading={isSending}
            disabled={sent}
          >
            {t("pages.contact.submit")}
          </Button>

          <Button
            type="reset"
            borderType="outline"
            colorType="primary"
            isLoading={isSending}
            disabled={sent}
          >
            {t("pages.contact.reset")}
          </Button>
        </div>
      </form>
    </PageLayout>
  );
}

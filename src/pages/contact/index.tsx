import "./index.scss";

import { Transition } from "@headlessui/react";
import cx from "classnames";
import { Button, Input, TextArea } from "ducduchy-react-components";
import { ColorType } from "ducduchy-react-components/dist/components/resources/common.data";
import { Route } from "nextjs-routes";
import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { PageLayout } from "../../views/PageLayout";
import {
  ContactForm,
  ContactPossibleError,
  ResponseDto,
  isResponseDto,
} from "../api/form";

interface ToastHandle {
  show: () => void;
}

interface ToastProps {
  message: string;
  colorType: ColorType;
  onToastEnd: () => void;
}

const SHOW_DURATION = 5000;
const ANIMATION_DURATION = 300;
const Toast = forwardRef<ToastHandle, ToastProps>(
  ({ colorType, message, onToastEnd }, ref) => {
    const [show, setShow] = useState(false);
    useImperativeHandle(ref, () => ({
      show: () => setShow(true),
    }));

    const timeoutRef = useRef<number | null>(null);
    const clearTimeout = () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };

    useEffect(() => {
      if (show) {
        clearTimeout();

        timeoutRef.current = window.setTimeout(() => {
          setShow(false);

          setTimeout(onToastEnd, ANIMATION_DURATION);
        }, SHOW_DURATION);
      }

      return clearTimeout;

      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [show]);

    return (
      <Transition
        className={cx("toast", `toast--${colorType}`)}
        show={show}
        enterFrom="opacity-0 -right-full"
        enterTo="opacity-100 right-4"
        leaveFrom="opacity-100 right-4"
        leaveTo="opacity-0 -right-full"
        style={{ animationDuration: `${ANIMATION_DURATION}ms` }}
      >
        {message}

        <div
          className="indicator"
          style={{ animationDuration: `${SHOW_DURATION}ms` }}
        />
      </Transition>
    );
  },
);
Toast.displayName = "Toast";

export default function ContactPage() {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactForm>();

  const [message, setMessage] = useState<null | {
    colorType: ColorType;
    message: string;
  }>(null);
  const [sent, setSent] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const toastRef = useRef<ToastHandle>(null);

  const onSubmit = handleSubmit(async (data) => {
    setMessage(null);
    setIsSending(true);

    const endpoint: Route["pathname"] = "/api/form";
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

    try {
      const response = await fetch(endpoint, options);
      const result = (await response.json()) as ResponseDto;

      if (result.error) {
        handleError(result.error);
      } else {
        setMessage({
          message: t("pages.contact.submitted"),
          colorType: "success",
        });
      }
    } catch (errObject: any) {
      console.error(errObject);
      handleError(isResponseDto(errObject) ? errObject.error : undefined);
    } finally {
      setIsSending(false);
      setSent(true);
    }
  });

  const handleError = (error: ContactPossibleError | undefined) => {
    let message = "";
    let colorType: ColorType = "danger";
    switch (error) {
      case "contact/sent-with-fake-api-key":
        message = t("pages.contact.submitted-with-fake-api-key");
        colorType = "warning";
        break;
      default:
        message = t("pages.contact.error.sent-failed");
        break;
    }

    setMessage({ message, colorType });
  };

  useEffect(() => {
    if (message) {
      toastRef.current?.show();
    }
  }, [message]);

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
            onClick={() => toastRef.current?.show()}
          >
            {t("pages.contact.reset")}
          </Button>
        </div>
      </form>

      <Toast
        colorType={message?.colorType ?? "danger"}
        message={message?.message ?? ""}
        onToastEnd={() => setMessage(null)}
        ref={toastRef}
      />
    </PageLayout>
  );
}

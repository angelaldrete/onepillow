"use client";
import React, { useRef, useState } from "react";
import CancelButton from "@/app/components/Button/CancelButton";
import SubmitButton from "@/app/components/Button/SubmitButton";
import Field from "@/app/common/types/Field";
import FieldType from "@/app/common/FieldType";
import Modal from "@/app/components/Modal";
import FormType from "@/app/common/FormType";
import { useRouter } from "next/navigation";

interface AppFormProps {
  action?: string;
  fields: Field[];
  type: FormType;
  modalTitle?: string;
  modalMessage?: string;
  redirectPath?: string;
  values?: Object;
}

const AppForm: React.FC<AppFormProps> = ({
  action,
  fields,
  type,
  modalTitle,
  modalMessage,
  redirectPath,
  values,
}) => {
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);

  const [errors, setErrors] = useState<Record<string, string>>({});

  const [isOpen, setIsOpen] = React.useState(false);

  const handleSubmit = () => {
    const buttons = formRef.current!.querySelectorAll(".actions button");
    buttons.forEach((button) => {
      button.setAttribute("disabled", "disabled");
    });

    const formData = new FormData(formRef.current!);

    const formDataArray: [string, FormDataEntryValue][] = Array.from(
      formData.entries()
    );

    const data: Record<string, string | number> = {};
    formDataArray.forEach(([key, value]) => {
      if (key.includes("Date")) {
        const date = new Date(value.toString());
        data[key] = date.toISOString();
      } else {
        data[key] = value.toString();
      }
    });

    const newErrors: Record<string, string> = {};
    formDataArray.forEach(([fieldName, fieldValue]) => {
      const input = formRef.current?.querySelector(`[name="${fieldName}"]`);
      const patternError = input?.getAttribute("data-pattern-error");
      const pattern = input?.getAttribute("pattern");

      if (
        pattern &&
        patternError &&
        !new RegExp(pattern).test(fieldValue.toString())
      ) {
        newErrors[fieldName] = patternError;
      }
    });

    setErrors(newErrors);

    setTimeout(() => {
      setErrors({});
      buttons.forEach((button) => {
        button.removeAttribute("disabled");
      });
    }, 5000);

    if (Object.keys(newErrors).length === 0) {
      if (type === FormType.UPDATE) {
        setIsOpen(true);
      } else if (type === FormType.CREATE) {
        fetch(action!, {
          method: "POST",
          body: JSON.stringify(data),
        })
          .then((response) => {
            if (response.ok) {
              return response.json();
            }
            throw new Error("Something went wrong");
          })
          .then((data) => {
            router.push(redirectPath!);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
  };

  React.useEffect(() => {
    if (values) {
      Object.entries(values).forEach(([key, value]) => {
        const input = formRef.current?.querySelector(`[name="${key}"]`);
        console.log(key);
        if (input) {
          if (value?.toString().includes("T")) {
            const date = new Date(value.toString());
            input.setAttribute("value", date.toISOString().split("T")[0]);
          } else {
            input.setAttribute("value", value?.toString());
          }
        }
      });
    }
  }, [values]);

  const handleModalSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsOpen(false);
    const buttons = formRef.current!.querySelectorAll(".actions button");
    buttons.forEach((button) => {
      button.removeAttribute("disabled");
    });

    const formData = new FormData(formRef.current!);

    const formDataArray: [string, FormDataEntryValue][] = Array.from(
      formData.entries()
    );

    const data: Record<string, string> = {};
    formDataArray.forEach(([key, value]) => {
      data[key] = value.toString();
    });

    fetch(action!, {
      method: "PUT",
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Something went wrong");
      })
      .then((data) => {
        router.push(redirectPath!);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <form className="form" ref={formRef}>
        {fields.map((field, idx) => {
          if (field.type === "select") {
            return (
              <div key={field.name} className="form__group">
                <label htmlFor={field.name}>{field.label}</label>
                <select name={field.name} id={field.name}>
                  {field.options?.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                {errors[field.name] && (
                  <div className="form__error">{errors[field.name]}</div>
                )}
              </div>
            );
          } else if (field.type === "textarea") {
            return (
              <div
                key={field.name}
                className="form__group"
                style={{
                  gridColumn: 2,
                }}
              >
                <label htmlFor={field.name}>{field.label}</label>
                <textarea
                  cols={30}
                  rows={10}
                  placeholder={field.placeholder}
                  disabled={field.disabled}
                  value={field.value}
                ></textarea>
                {errors[field.name] && (
                  <div className="form__error">{errors[field.name]}</div>
                )}
              </div>
            );
          } else {
            return (
              <div
                key={field.name}
                className="form__group"
                style={{
                  gridColumn: `${
                    field.type === FieldType.Checkbox ? "2" : "initial"
                  }`,
                }}
              >
                <label htmlFor={field.name}>{field.label}</label>
                <input
                  type={field.type}
                  name={field.name}
                  id={field.name}
                  placeholder={field.placeholder}
                  pattern={field.pattern}
                  data-pattern-error={field.patternError}
                  min={new Date().toISOString().split("T")[0]}
                />
                {errors[field.name] && (
                  <div className="form__error">{errors[field.name]}</div>
                )}
              </div>
            );
          }
        })}
        <div
          className="actions"
          style={{
            order: fields.length + 1,
          }}
        >
          <CancelButton
            onClick={(e) => {
              e.preventDefault();
              router.push(redirectPath!);
            }}
          >
            Cancel
          </CancelButton>
          <SubmitButton
            onClick={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            Submit
          </SubmitButton>
        </div>
      </form>
      {modalTitle && modalMessage && (
        <Modal
          title={modalTitle}
          open={isOpen}
          onClose={() => {
            setIsOpen(false);
            const buttons =
              formRef.current!.querySelectorAll(".actions button");
            buttons.forEach((button) => {
              button.removeAttribute("disabled");
            });
          }}
          actions={
            <button
              className="btn btn--submit"
              onClick={(e) => {
                handleModalSubmit(e);
              }}
            >
              Accept
            </button>
          }
        >
          {modalMessage}
        </Modal>
      )}
    </>
  );
};

export default AppForm;

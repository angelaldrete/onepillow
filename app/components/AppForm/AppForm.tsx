"use client";

import React, { useRef, useState } from "react";
import CancelButton from "@/app/components/Button/CancelButton";
import SubmitButton from "@/app/components/Button/SubmitButton";
import Field from "@/app/types/Field";

interface AppFormProps {
  action: string;
  fields: Field[];
}

const AppForm: React.FC<AppFormProps> = ({ action, fields }) => {
  const formRef = useRef<HTMLFormElement>(null);

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = () => {
    const formData = new FormData(formRef.current!);

    const formDataArray: [string, FormDataEntryValue][] = Array.from(
      formData.entries()
    );

    const data: Record<string, string> = {};
    formDataArray.forEach(([key, value]) => {
      data[key] = value.toString();
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
    }, 5000);

    // if there are no errors, submit the form
    if (Object.keys(newErrors).length === 0) {
      // submit the form
      console.log("submitting the form");
    }
  };

  return (
    <form className="form" ref={formRef}>
      {fields.map((field) => {
        if (field.type === "select") {
          return (
            <div className="form__group">
              <label htmlFor={field.name}>{field.label}</label>
              <select name={field.name} id={field.name}>
                {field.options?.map((option) => (
                  <option value={option.value}>{option.label}</option>
                ))}
              </select>
              {errors[field.name] && (
                <div className="form__error">{errors[field.name]}</div>
              )}
            </div>
          );
        } else if (field.type === "textarea") {
          return (
            <div className="form__group" style={{ gridColumn: "2" }}>
              <label htmlFor={field.name}>{field.label}</label>
              <textarea
                cols={30}
                rows={10}
                placeholder={field.placeholder}
              ></textarea>
              {errors[field.name] && (
                <div className="form__error">{errors[field.name]}</div>
              )}
            </div>
          );
        } else {
          return (
            <div className="form__group">
              <label htmlFor={field.name}>{field.label}</label>
              <input
                type="text"
                name={field.name}
                id={field.name}
                placeholder={field.placeholder}
                pattern={field.pattern}
                data-pattern-error={field.patternError}
              />
              {errors[field.name] && (
                <div className="form__error">{errors[field.name]}</div>
              )}
            </div>
          );
        }
      })}
      <div className="actions">
        <CancelButton>Cancel</CancelButton>
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
  );
};

export default AppForm;

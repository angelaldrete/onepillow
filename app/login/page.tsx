"use client";
import React from "react";
import Logo from "../components/Logo";
import SubmitButton from "../components/Button/SubmitButton";

const Login = () => {
  const formRef = React.useRef<HTMLFormElement>(null);
  const [errors, setErrors] = React.useState<Record<string, string>>({});

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

    if (Object.keys(newErrors).length > 0) {
      setTimeout(() => {
        setErrors({});
      }, 3000);
      setErrors(newErrors);
      return;
    }

    fetch("/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(async (res) => {
        const data = await res.json();
        if (res.status === 200) {
          localStorage.setItem("token", data.token);
          window.location.href = "/";
        } else {
          alert(data.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="login">
      <Logo />
      <form className="login__form" ref={formRef}>
        <div className="form__group">
          <input
            className="login__input"
            type="text"
            name="email"
            placeholder="Email"
            pattern="[a-zA-Z0-9]{3,}"
            data-pattern-error="Email must be at least 3 characters long"
          />
          {errors.email && <div className="form__error">{errors.email}</div>}

          <input
            className="login__input"
            type="password"
            name="password"
            placeholder="Password"
            pattern="[a-zA-Z0-9]{3,}"
            data-pattern-error="Password must be at least 3 characters long"
          />

          {errors.password && (
            <div className="form__error">{errors.password}</div>
          )}
        </div>

        <SubmitButton
          onClick={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          Login
        </SubmitButton>
      </form>
    </div>
  );
};

export default Login;

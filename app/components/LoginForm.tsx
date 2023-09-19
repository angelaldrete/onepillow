"use client";
import React from "react";
import Logo from "@/app/components/Logo";
import SubmitButton from "@/app/components/Button/SubmitButton";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (response?.error) {
        setError(response.error);
        return;
      }

      router.replace("/admin");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login">
      <Logo />
      <form className="login__form" onSubmit={handleSubmit}>
        <div className="form__group">
          <input
            className="login__input"
            type="text"
            name="email"
            placeholder="Email"
            data-pattern-error="Email must be at least 3 characters long"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="login__input"
            type="password"
            name="password"
            placeholder="Password"
            data-pattern-error="Password must be at least 3 characters long"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <SubmitButton onClick={(e) => handleSubmit}>Login</SubmitButton>
      </form>
    </div>
  );
};

export default LoginForm;

"use client";
import UserHeader from "./components/UserHeader";
import UserDetails from "./components/UserDetails";
import { useSession } from "next-auth/react";

const Account = () => {
  const { data: session } = useSession();

  return (
    <div className="account">
      <header className="account__header">
        <h1 className="account__title">Account</h1>
        {session?.user?.name}
        <UserHeader
          name={session?.user?.name || ""}
          image={session?.user?.image || ""}
        />
      </header>
      <UserDetails
        details={{
          email: session?.user?.email || "",
        }}
      />
    </div>
  );
};

export default Account;

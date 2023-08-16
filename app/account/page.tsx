import React from "react";
import UserHeader from "./components/UserHeader";
import UserDetails from "./components/UserDetails";
import Card from "@/app/components/Card";

const Account = () => {
  const user: User = {
    id: 1,
    name: "John Doe",
    image: "https://via.placeholder.com/150",
    email: "email@email.com",
    location: "London",
    gender: "M",
    password: "password",
  };

  return (
    <div className="account">
      <header className="account__header">
        <h1 className="account__title">Account</h1>
        <UserHeader name={user.name} image={user.image} />
      </header>
      <UserDetails
        details={{
          email: user.email,
          location: user.location,
          gender: user.gender,
        }}
      />
    </div>
  );
};

export default Account;

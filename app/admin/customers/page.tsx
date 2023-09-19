import React from "react";
import CustomersSearchBar from "./components/CustomersSearchBar";
import CustomersList from "./components/CustomersList";
import Customer from "./types/Customer";
import AddButton from "@/app/components/Button/AddButton";

const Customers = () => {
  const customers: Customer[] = [
    {
      id: 1,
      name: "John Doe",
      email: "example@example.com",
      phone: "123456789",
      address: "123 Main Street",
      city: "New York",
      state: "NY",
      zip: "12345",
      country: "USA",
    },
    {
      id: 2,
      name: "John Doe",
      email: "example@example.com",
      phone: "123456789",
      address: "123 Main Street",
      city: "New York",
      state: "NY",
      zip: "12345",
      country: "USA",
    },
    {
      id: 3,
      name: "John Doe",
      email: "example@example.com",
      phone: "123456789",
      address: "123 Main Street",
      city: "New York",
      state: "NY",
      zip: "12345",
      country: "USA",
    },
    {
      id: 4,
      name: "John Doe",
      email: "example@example.com",
      phone: "123456789",
      address: "123 Main Street",
      city: "New York",
      state: "NY",
      zip: "12345",
      country: "USA",
    },
  ];

  return (
    <div className="customers">
      <header className="customers__header">
        <h1 className="customers__title">Customers</h1>
        <CustomersSearchBar />
      </header>
      <CustomersList customers={customers} />
      <AddButton to="/admin/customers/new" />
    </div>
  );
};

export default Customers;

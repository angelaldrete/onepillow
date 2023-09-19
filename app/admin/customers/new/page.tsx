import React from "react";
import AddCustomerForm from "./components/AddCustomerForm";

const AddCustomer = () => {
  return (
    <div className="add-customer">
      <header className="add-customer__header">
        <h1 className="add-customer__title">Add Customer</h1>
      </header>
      <AddCustomerForm />
    </div>
  );
};

export default AddCustomer;

import React from "react";
import EditCustomerForm from "./components/EditCustomerForm";

const EditCustomer = () => {
  return (
    <div className="edit-customer">
      <header className="edit-customer__header">
        <h1 className="edit-customer__title">Edit Customer</h1>
      </header>
      <EditCustomerForm />
    </div>
  );
};

export default EditCustomer;

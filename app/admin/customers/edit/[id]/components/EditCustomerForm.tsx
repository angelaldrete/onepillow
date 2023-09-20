"use client";
import React from "react";
import AppForm from "@/app/components/AppForm/AppForm";
import { CustomerFields } from "@/app/admin/customers/common/CustomerFields";
import FormType from "@/app/common/FormType";

const EditCustomerForm = () => {
  return (
    <AppForm
      action="/api/customer"
      fields={CustomerFields}
      type={FormType.UPDATE}
      redirectPath="/admin/customers"
      modalTitle="Edit Customer"
      modalMessage="Are you sure you want to edit this customer?"
      modalActions={
        <>
          <button className="button button--secondary" type="button">
            Cancel
          </button>
          <button className="button button--primary" type="submit">
            Accept
          </button>
        </>
      }
    />
  );
};

export default EditCustomerForm;

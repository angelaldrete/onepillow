"use client";
import React from "react";
import AppForm from "@/app/components/AppForm/AppForm";
import { CustomerFields } from "@/app/customers/common/CustomerFields";
import FormType from "@/app/common/FormType";

const EditCustomerForm = () => {
  return (
    <AppForm
      action="/api/customers"
      fields={CustomerFields}
      type={FormType.UPDATE}
      modalTitle="Edit Customer"
      modalMessage="Are you sure you want to edit this customer?"
      modalActions={
        <>
          <div></div>
        </>
      }
    />
  );
};

export default EditCustomerForm;

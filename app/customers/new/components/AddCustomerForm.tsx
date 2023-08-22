"use client";
import React from "react";
import AppForm from "@/app/components/AppForm/AppForm";
import { CustomerFields } from "@/app/customers/common/CustomerFields";
import FormType from "@/app/common/FormType";

const AddCustomerForm = () => {
  return (
    <AppForm
      action="/api/customers"
      fields={CustomerFields}
      type={FormType.CREATE}
    />
  );
};

export default AddCustomerForm;

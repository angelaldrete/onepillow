"use client";
import React from "react";
import AppForm from "@/app/components/AppForm/AppForm";
import { CustomerFields } from "@/app/admin/customers/common/CustomerFields";
import FormType from "@/app/common/FormType";

const AddCustomerForm = () => {
  return (
    <AppForm
      action="/api/customer"
      fields={CustomerFields}
      type={FormType.CREATE}
      redirectPath="/admin/customers"
    />
  );
};

export default AddCustomerForm;

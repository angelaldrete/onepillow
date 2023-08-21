"use client";
import React from "react";
import AppForm from "@/app/components/AppForm/AppForm";
import { CustomerFields } from "@/app/customers/common/CustomerFields";

const EditCustomerForm = () => {
  return <AppForm action="/api/customers" fields={CustomerFields} />;
};

export default EditCustomerForm;

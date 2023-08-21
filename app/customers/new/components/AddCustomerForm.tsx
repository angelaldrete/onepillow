"use client";
import React from "react";
import AppForm from "@/app/components/AppForm/AppForm";
import { CustomerFields } from "@/app/customers/common/CustomerFields";

const AddCustomerForm = () => {
  return <AppForm action="/api/customers" fields={CustomerFields} />;
};

export default AddCustomerForm;

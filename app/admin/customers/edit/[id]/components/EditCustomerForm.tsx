"use client";
import React from "react";
import AppForm from "@/app/components/AppForm/AppForm";
import { CustomerFields } from "@/app/admin/customers/common/CustomerFields";
import FormType from "@/app/common/FormType";
import { Customer } from "@prisma/client";

interface EditCustomerFormProps {
  id: string | string[];
}

const EditCustomerForm: React.FC<EditCustomerFormProps> = ({ id }) => {
  const [customer, setCustomer] = React.useState<Customer>(Object);

  React.useEffect(() => {
    const getCustomer = async () => {
      const response = await fetch(`http://localhost:3000/api/customer/${id}`);
      const data = await response.json();
      setCustomer(data.customer);
    };
    getCustomer();
  }, []);

  return (
    <AppForm
      action={`/api/customer/${id}`}
      fields={CustomerFields}
      values={customer}
      type={FormType.UPDATE}
      redirectPath="/admin/customers"
      modalTitle="Edit Customer"
      modalMessage="Are you sure you want to edit this customer?"
    />
  );
};

export default EditCustomerForm;

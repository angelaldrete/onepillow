"use client";
import EditCustomerForm from "./components/EditCustomerForm";
import { useParams } from "next/navigation";

const EditCustomer = () => {
  const { id } = useParams();

  return (
    <div className="edit-customer">
      <header className="edit-customer__header">
        <h1 className="edit-customer__title">Edit Customer</h1>
      </header>
      <EditCustomerForm id={id} />
    </div>
  );
};

export default EditCustomer;

"use client";
import React from "react";
import Customer from "../types/Customer";
import Card from "@/app/components/Card";
import { MdDelete, MdEdit } from "react-icons/md";
import { useRouter } from "next/navigation";

interface SingleCustomerProps {
  params: {
    id: string;
  };
}

const SingleCustomer: React.FC<SingleCustomerProps> = ({ params: { id } }) => {
  const customer: Customer = {
    id: 1,
    name: "John Doe",
    address: "123 Main St",
    city: "New York",
    state: "NY",
    zip: "12345",
    phone: "123-456-7890",
    country: "USA",
    email: "example@example.com",
    notes:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  };

  const router = useRouter();

  const navigateTo = (path: string) => {
    router.push(path);
  };

  return (
    <div className="customer-single">
      <div className="customer-single__header">
        <h1 className="customer-single__title">Customer</h1>
        <MdEdit
          onClick={() => {
            navigateTo(`/admin/customers/edit/${id}`);
          }}
        />
        <MdDelete />
      </div>

      <Card>
        <div className="customer-single__content">
          {Object.entries(customer).map(([key, value]) => {
            if (key === "id") return null;
            return (
              <div className="customer-single__item" key={key}>
                <div className="customer-single__label">
                  {key
                    .split(/(?=[A-Z])/)
                    .map((word) => word[0].toUpperCase() + word.slice(1))
                    .join(" ")}
                </div>
                <div className="customer-single__value">{value}</div>
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
};

export default SingleCustomer;

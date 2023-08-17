import React from "react";
import Customer from "../types/Customer";
import Card from "@/app/components/Card";
import { MdDelete, MdEdit } from "react-icons/md";

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

  return (
    <div className="customer-single">
      <div className="customer-single__header">
        <h1 className="customer-single__title">Customer</h1>
        <MdEdit />
        <MdDelete />
      </div>

      <Card>
        <div className="customer-single__content">
          {Object.entries(customer).map(([key, value]) => {
            if (key === "id") return null;
            return (
              <div className="customer-single__item" key={key}>
                <div className="customer-single__label">
                  {key[0].toUpperCase() + key.slice(1)}
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

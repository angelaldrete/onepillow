import React from "react";
import Customer from "../types/Customer";

interface CustomerItemProps {
  customer: Customer;
}

const CustomerItem: React.FC<CustomerItemProps> = ({ customer }) => {
  return (
    <div className="customer">
      <div className="customer__title">{customer.name}</div>
      <div className="customer__email">
        <strong>Email: </strong>
        {customer.email}
      </div>
      <div className="customer__phone">
        <strong>Phone: </strong>
        {customer.phone}
      </div>
      <div className="customer__location">
        <strong>Location: </strong>
        {customer.city}, {customer.state}, {customer.country}
      </div>
    </div>
  );
};

export default CustomerItem;

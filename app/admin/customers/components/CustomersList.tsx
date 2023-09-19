import Card from "@/app/components/Card";
import React from "react";
import Link from "next/link";
import CustomerItem from "./CustomerItem";
import Customer from "../types/Customer";

interface CustomersListProps {
  customers: Customer[];
}

const CustomersList: React.FC<CustomersListProps> = ({ customers }) => {
  return (
    <ul className="customers__list">
      {customers.map((customer, idx) => (
        <li key={customer.id} className="customer">
          <Link href={`/admin/customers/${customer.id}`}>
            <Card
              style={{
                animationDelay: `${idx * 0.1}s`,
              }}
            >
              <CustomerItem customer={customer} />
            </Card>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default CustomersList;

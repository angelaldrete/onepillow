"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import CustomersList from "../components/CustomersList";
import Customer from "../types/Customer";
import AddButton from "@/app/components/Button/AddButton";
import { MdSearch } from "react-icons/md";

const CustomerSearch = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");

  const [customers, setCustomers] = React.useState<Customer[]>([]);

  React.useEffect(() => {
    async function getCustomers() {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/customer?query=${query}`
      );
      const data = await response.json();
      return data.customers;
    }

    if (query) {
      getCustomers().then((customers) => setCustomers(customers));
    }
  }, [query]);

  return (
    <div className="customers">
      <header className="customers__header">
        <h1 className="customers__title">Customers</h1>
        <form className="search-bar" action="/admin/customers/search">
          <MdSearch />
          <input
            className="input"
            type="text"
            placeholder="Search for a customer"
            name="query"
          />
        </form>
      </header>
      {customers?.length > 0 ? (
        <CustomersList customers={customers} />
      ) : (
        <div className="customers__empty">No customers found for "{query}"</div>
      )}
      <AddButton to="/admin/customers/new" />
    </div>
  );
};

export default CustomerSearch;

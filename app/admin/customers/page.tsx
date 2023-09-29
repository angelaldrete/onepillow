import CustomersList from "./components/CustomersList";
import Customer from "./types/Customer";
import AddButton from "@/app/components/Button/AddButton";
import { MdSearch } from "react-icons/md";

async function getCustomers() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/customer`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  const data = await response.json();
  return data.customers;
  return [];
}

const Customers = async () => {
  const customers: Customer[] = await getCustomers();

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
      {customers.length > 0 ? (
        <CustomersList customers={customers} />
      ) : (
        <div className="customers__empty">No customers found</div>
      )}
      <AddButton to="/admin/customers/new" />
    </div>
  );
};

export default Customers;

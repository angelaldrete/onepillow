"use client";
import React from "react";
import Customer from "../types/Customer";
import Card from "@/app/components/Card";
import { MdDelete, MdEdit } from "react-icons/md";
import { useRouter } from "next/navigation";
import Modal from "@/app/components/Modal";

interface SingleCustomerProps {
  params: {
    id: string;
  };
}

const SingleCustomer: React.FC<SingleCustomerProps> = ({ params: { id } }) => {
  const [customer, setCustomer] = React.useState<Customer>({
    id: parseInt(""),
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  });

  const [isOpen, setIsOpen] = React.useState(false);

  const router = useRouter();

  React.useEffect(() => {
    const getCustomer = async () => {
      const response = await fetch(`http://localhost:3000/api/customer/${id}`);
      const data = await response.json();
      setCustomer(data.customer);
    };
    getCustomer();
  }, []);

  const navigateTo = (path: string) => {
    router.push(path);
  };

  const handleCustomerDelete = () => {
    setIsOpen(false);
    fetch(`http://localhost:3000/api/customer/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          new Error(data.error);
        }
        navigateTo("/admin/customers");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <div className="customer-single">
        <div className="customer-single__header">
          <h1 className="customer-single__title">Customer</h1>
          <MdEdit
            onClick={() => {
              navigateTo(`/admin/customers/edit/${id}`);
            }}
          />
          <MdDelete
            onClick={() => {
              setIsOpen(true);
            }}
          />
        </div>

        <Card>
          <div className="customer-single__content">
            {Object.entries(customer).map(([key, value]) => {
              if (!value) return null;
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
      <Modal
        title="Delete Customer"
        open={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
        actions={
          <>
            <button className="btn btn--danger" onClick={handleCustomerDelete}>
              Delete
            </button>
          </>
        }
      >
        Are you sure you want to delete this customer?
      </Modal>
    </>
  );
};

export default SingleCustomer;

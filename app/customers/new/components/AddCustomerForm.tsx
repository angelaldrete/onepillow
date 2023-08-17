"use client";
import CancelButton from "@/app/components/Button/CancelButton";
import SubmitButton from "@/app/components/Button/SubmitButton";
import React from "react";

const AddReservationForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  };

  return (
    <form
      className="form"
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <div className="form__group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          pattern="[A-Za-z]{3,}"
          data-pattern-error="Name must be at least 3 characters long"
        />
      </div>

      <div className="form__group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="example@example.com"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          data-pattern-error="Please enter a valid email address"
        />
      </div>

      <div className="form__group">
        <label htmlFor="phone">Phone</label>
        <input
          type="tel"
          name="phone"
          id="phone"
          placeholder="(X)-000-00-00"
          pattern="(\+?\d[- .]*){7,13}"
          data-pattern-error="Please enter a valid phone number"
        />
      </div>

      <div className="form__group">
        <label htmlFor="address">Address</label>
        <input
          type="text"
          name="address"
          id="address"
          placeholder="Av. XXX"
          pattern="[A-Za-z]{3,}"
          data-pattern-error="Address must be at least 3 characters long"
        />
      </div>

      <div className="form__group">
        <label htmlFor="city">City</label>
        <input
          type="text"
          name="city"
          id="city"
          placeholder="City"
          pattern="[A-Za-z]{3,}"
          data-pattern-error="City must be at least 3 characters long"
        />
      </div>

      <div className="form__group">
        <label htmlFor="state">State</label>
        <input
          type="text"
          name="state"
          id="state"
          placeholder="State"
          pattern="[A-Za-z]{3,}"
          data-pattern-error="State must be at least 3 characters long"
        />
      </div>

      <div className="form__group">
        <label htmlFor="zip-code">Zip Code</label>
        <input
          type="text"
          name="zip-code"
          id="zip-code"
          placeholder="Zip Code"
          pattern="[0-9]{5}"
          data-pattern-error="Zip Code must be 5 digits long"
        />
      </div>

      <div className="form__group">
        <label htmlFor="country">Country</label>
        <input
          type="text"
          name="country"
          id="country"
          placeholder="Country"
          pattern="[A-Za-z]{3,}"
          data-pattern-error="Country must be at least 3 characters long"
        />
      </div>

      <div className="form__group" style={{ gridColumn: "2" }}>
        <label htmlFor="notes">Notes</label>
        <textarea cols={30} rows={10} placeholder="Notes"></textarea>
      </div>

      <div className="actions" style={{ gridColumn: "2" }}>
        <CancelButton>Cancel</CancelButton>
        <SubmitButton>Submit</SubmitButton>
      </div>
    </form>
  );
};

export default AddReservationForm;

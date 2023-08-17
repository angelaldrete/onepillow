"use client";
import CancelButton from "@/app/components/Button/CancelButton";
import SubmitButton from "@/app/components/Button/SubmitButton";
import React, { useRef, useState } from "react";

const AddCustomerForm = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = () => {
    const formData = new FormData(formRef.current!);

    console.log(formData);
    const formDataArray: [string, FormDataEntryValue][] = Array.from(
      formData.entries()
    );

    console.log(formDataArray);

    const data: Record<string, string> = {};
    formDataArray.forEach(([key, value]) => {
      data[key] = value.toString();
    });

    const newErrors: Record<string, string> = {};
    formDataArray.forEach(([fieldName, fieldValue]) => {
      const input = formRef.current?.querySelector(`[name="${fieldName}"]`);
      const patternError = input?.getAttribute("data-pattern-error");
      const pattern = input?.getAttribute("pattern");

      if (
        pattern &&
        patternError &&
        !new RegExp(pattern).test(fieldValue.toString())
      ) {
        newErrors[fieldName] = patternError;
      }
    });
    console.log(newErrors);

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log(data);
    }
  };

  return (
    <form className="form" ref={formRef}>
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
        {errors.name && <p className="error">{errors.name}</p>}
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
        {errors.email && <p className="error">{errors.email}</p>}
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
        {errors.phone && <p className="error">{errors.phone}</p>}
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
        {errors.address && <p className="error">{errors.address}</p>}
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
        {errors.city && <p className="error">{errors.city}</p>}
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
        {errors.state && <p className="error">{errors.state}</p>}
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
        {errors["zip-code"] && <p className="error">{errors["zip-code"]}</p>}
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
        {errors.country && <p className="error">{errors.country}</p>}
      </div>

      <div className="form__group" style={{ gridColumn: "2" }}>
        <label htmlFor="notes">Notes</label>
        <textarea cols={30} rows={10} placeholder="Notes"></textarea>
        {errors.notes && <p className="error">{errors.notes}</p>}
      </div>

      <div className="actions" style={{ gridColumn: "2" }}>
        <CancelButton>Cancel</CancelButton>
        <SubmitButton
          onClick={(e) => {
            // e.preventDefault();
            handleSubmit();
          }}
        >
          Submit
        </SubmitButton>
      </div>
    </form>
  );
};

export default AddCustomerForm;

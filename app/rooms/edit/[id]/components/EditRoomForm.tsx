"use client";
import CancelButton from "@/app/components/Button/CancelButton";
import SubmitButton from "@/app/components/Button/SubmitButton";
import React from "react";

const EditRoomForm = () => {
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
        <label htmlFor="capacity">Capacity</label>
        <input
          type="number"
          name="capacity"
          id="capacity"
          min="1"
          max="4"
          pattern="[1-4]"
          data-pattern-error="Capacity must be between 1 and 4"
          placeholder="Capacity"
        />
      </div>

      <div className="form__group">
        <label htmlFor="price">Price</label>
        <input
          type="number"
          name="price"
          id="price"
          min="1"
          max="1000"
          pattern="[1-1000]"
          data-pattern-error="Price must be between 1 and 1000"
          placeholder="Price"
        />
      </div>

      <div className="form__group">
        <label htmlFor="image">Image</label>
        <input
          type="file"
          name="image"
          id="image"
          accept="image/png, image/jpeg"
          size={1000000}
        />
      </div>

      <div className="form__group" style={{ gridColumn: 2 }}>
        <label htmlFor="description">Description</label>
        <textarea cols={30} rows={10}></textarea>
      </div>

      <div className="actions">
        <CancelButton>Cancel</CancelButton>
        <SubmitButton>Submit</SubmitButton>
      </div>
    </form>
  );
};

export default EditRoomForm;

"use client";
import CancelButton from "@/app/components/Button/CancelButton";
import SubmitButton from "@/app/components/Button/SubmitButton";
import React from "react";

const EditReservationForm = () => {
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
        <label htmlFor="check-in-date">Check In Date</label>
        <input type="date" name="check-in-date" id="check-in-date" />
      </div>

      <div className="form__group">
        <label htmlFor="check-out-date">Check Out Date</label>
        <input type="date" name="check-out-date" id="check-out-date" />
      </div>

      <div className="form__group">
        <label htmlFor="room-type">Room Type</label>
        <select name="room-type" id="room-type">
          <option value="single">Single</option>
          <option value="double">Double</option>
          <option value="family">Family</option>
        </select>
      </div>

      <div className="form__group">
        <label htmlFor="number-of-guests">Number of Guests</label>
        <input
          type="number"
          name="number-of-guests"
          id="number-of-guests"
          min="1"
          max="4"
          pattern="[1-4]"
          data-pattern-error="Number of guests must be between 1 and 4"
        />
      </div>

      <div className="form__group">
        <label htmlFor="bed-preferences">Bed Preferences</label>
        <select name="bed-preferences" id="bed-preferences">
          <option value="one-king">One King</option>
          <option value="two-queens">Two Queens</option>
          <option value="one-king-and-one-queen">One King and One Queen</option>
        </select>
      </div>

      <div className="form__group">
        <label htmlFor="terms-and-conditions">Terms and Conditions</label>
        <textarea cols={30} rows={10} disabled>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
          quibusdam repudiandae commodi consequatur id iure soluta, voluptates a
          ab sit non rerum ratione impedit tempora porro quam maxime fuga dicta
          ipsum est dolorem laudantium. Qui possimus quod eaque fugiat vero
          alias nam id. Voluptas temporibus repellat sequi consequuntur tempore
          architecto, fugit neque ipsam facere nobis at mollitia doloremque
          deleniti accusantium voluptatibus. Aliquam hic animi aut vel
          aspernatur harum laudantium quod error, corporis quasi quibusdam alias
          porro voluptate fugiat consectetur! Nesciunt velit magnam distinctio
          consectetur exercitationem. Deserunt magni laudantium odio a officiis.
          Labore deleniti incidunt veritatis facere saepe excepturi rerum. Quos!
        </textarea>
        <input
          type="checkbox"
          name="terms-and-conditions"
          id="terms-and-conditions"
        />
        Accept
      </div>
      <div className="actions">
        <CancelButton>Cancel</CancelButton>
        <SubmitButton>Submit</SubmitButton>
      </div>
    </form>
  );
};

export default EditReservationForm;

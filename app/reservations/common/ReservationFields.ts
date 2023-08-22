import FieldType from "@/app/common/FieldType";
import Field from "@/app/common/types/Field";

export const ReservationFields: Field[] = [
  {
    name: "name",
    type: FieldType.Text,
    label: "Name",
    placeholder: "Name",
    pattern: "[A-Za-z]{3,}",
    patternError: "Name must be at least 3 characters long",
  },
  {
    name: "email",
    type: FieldType.Email,
    label: "Email",
    placeholder: "example@example.com",
    pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$",
    patternError: "Please enter a valid email address",
  },
  {
    name: "phone",
    type: FieldType.Tel,
    label: "Phone",
    placeholder: "(X)-000-00-00",
    pattern: "(\\+?\\d[- .]*){7,13}",
    patternError: "Please enter a valid phone number",
  },
  {
    name: "address",
    type: FieldType.Text,
    label: "Address",
    placeholder: "Av. XXX",
    pattern: "[A-Za-z]{3,}",
    patternError: "Address must be at least 3 characters long",
  },
  {
    name: "check-in-date",
    type: FieldType.Date,
    label: "Check In Date",
    placeholder: "Check In Date",
  },
  {
    name: "check-out-date",
    type: FieldType.Date,
    label: "Check Out Date",
    placeholder: "Check Out Date",
  },
  {
    name: "room-type",
    type: FieldType.Select,
    label: "Room Type",
    placeholder: "Room Type",
    options: [
      { value: "single", label: "Single" },
      { value: "double", label: "Double" },
      { value: "family", label: "Family" },
    ],
  },
  {
    name: "number-of-guests",
    type: FieldType.Number,
    label: "Number of Guests",
    placeholder: "Number of Guests",
    pattern: "[1-4]",
    patternError: "Number of guests must be between 1 and 4",
  },
  {
    name: "bed-preferences",
    type: FieldType.Select,
    label: "Bed Preferences",
    placeholder: "Bed Preferences",
    options: [
      { value: "one-king", label: "One King" },
      { value: "two-queens", label: "Two Queens" },
      { value: "one-king-and-one-queen", label: "One King and One Queen" },
    ],
  },
  {
    name: "terms-and-conditions",
    type: FieldType.TextArea,
    label: "Terms and Conditions",
    placeholder: "Terms and Conditions",
    disabled: true,
    value: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
  },
  {
    name: 'accept-terms-and-conditions',
    type: FieldType.Checkbox,
    label: 'Accept Terms and Conditions',
    placeholder: 'Accept Terms and Conditions',
    pattern: 'true',
    patternError: 'Please accept terms and conditions'
  }
];
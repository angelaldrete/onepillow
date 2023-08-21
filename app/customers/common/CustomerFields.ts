import Field from "@/app/types/Field";

export const CustomerFields: Field[] = [
  {
    name: "name",
    label: "Name",
    placeholder: "Name",
    pattern: "[A-Za-z]{3,}",
    patternError: "Name must be at least 3 characters long",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "example@example.com",
    pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$",
    patternError: "Please enter a valid email address",
  },
  {
    name: "phone",
    label: "Phone",
    placeholder: "(X)-000-00-00",
    pattern: "(\\+?\\d[- .]*){7,13}",
    patternError: "Please enter a valid phone number",
  },
  {
    name: "address",
    label: "Address",
    placeholder: "Av. XXX",
    pattern: "[A-Za-z]{3,}",
    patternError: "Address must be at least 3 characters long",
  },
  {
    name: "city",
    label: "City",
    placeholder: "City",
    pattern: "[A-Za-z]{3,}",
    patternError: "City must be at least 3 characters long",
  },
  {
    name: "state",
    label: "State",
    placeholder: "State",
    pattern: "[A-Za-z]{3,}",
    patternError: "State must be at least 3 characters long",
  },
  {
    name: "zip-code",
    label: "Zip Code",
    placeholder: "Zip Code",
    pattern: "[0-9]{5}",
    patternError: "Zip Code must be 5 digits long",
  },
  {
    name: "country",
    label: "Country",
    placeholder: "Country",
    pattern: "[A-Za-z]{3,}",
    patternError: "Country must be at least 3 characters long",
  },
  {
    name: "notes",
    label: "Notes",
    placeholder: "Notes",
  },
];
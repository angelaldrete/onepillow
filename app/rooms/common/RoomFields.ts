import Field from "@/app/types/Field";

export const RoomFields: Field[] = [
  {
    name: "name",
    label: "Name",
    placeholder: "Name",
    pattern: "[A-Za-z]{3,}",
    patternError: "Name must be at least 3 characters long",
  },
  {
    name: "capacity",
    label: "Capacity",
    placeholder: "Capacity",
    pattern: "[1-4]",
    patternError: "Capacity must be between 1 and 4",
  },
  {
    name: "price",
    label: "Price",
    placeholder: "Price",
    pattern: "[1-1000]",
    patternError: "Price must be between 1 and 1000",
  },
  {
    name: "image",
    label: "Image",
    placeholder: "Image",
    pattern: "[A-Za-z]{3,}",
    patternError: "Image must be at least 3 characters long",
  },
  {
    name: "description",
    label: "Description",
    placeholder: "Description",
    pattern: "[A-Za-z]{3,}",
    patternError: "Description must be at least 3 characters long",
  },
];
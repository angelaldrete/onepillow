import FieldType from "@/app/common/FieldType";
import Field from "@/app/common/types/Field";

export const ReservationFields: Field[] = [
  {
    name: "customerId",
    type: FieldType.Select,
    label: "Customer",
    placeholder: "Customer",
    options: []
  },
  {
    name: "arrivalDate",
    type: FieldType.Date,
    label: "Arrival Date",
    placeholder: "Arrival Date",
  },
  {
    name: "departureDate",
    type: FieldType.Date,
    label: "Departure Date",
    placeholder: "Departure Date",
  },
  {
    name: "roomId",
    type: FieldType.Select,
    label: "Room Type",
    placeholder: "Room Type",
    options: [],
  },
];
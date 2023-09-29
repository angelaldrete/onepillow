import React from "react";
import Reservation from "@/app/admin/reservations/types/Reservation";
interface DayProps {
  day: number;
  fullDate: Date;
  reservations: Reservation[];
}

const Day: React.FC<DayProps> = ({ day, fullDate, reservations }) => {
  const [filteredReservations, setFilteredReservations] = React.useState<
    Reservation[]
  >([]);

  React.useEffect(() => {
    const filteredReservationsArray: Reservation[] = reservations?.filter(
      (reservation) => {
        const arrivalDate = new Date(reservation.arrivalDate);
        const departureDate = new Date(reservation.departureDate);

        if (arrivalDate.getDate() + 1 === departureDate.getDate()) {
          return arrivalDate.getDate() + 1 === fullDate.getDate();
        }

        if (
          arrivalDate.getDate() + 1 <= fullDate.getDate() &&
          departureDate.getDate() + 1 >= fullDate.getDate()
        ) {
          return true;
        }
      }
    );
    setFilteredReservations(filteredReservationsArray);
  }, [reservations, fullDate]);

  if (
    fullDate.getDate() < new Date().getDate() &&
    fullDate.getMonth() === new Date().getMonth()
  ) {
    return (
      <div className="calendar-month__day">
        <span className="calendar-month__day-number calendar-month__day--past">
          {day}
        </span>
      </div>
    );
  }

  // LOW Reservations
  if (filteredReservations?.length > 0 && filteredReservations!.length < 5) {
    return (
      <div className="calendar-month__day">
        <span className="calendar-month__day-number calendar-month__day--low">
          {day}
        </span>
      </div>
    );
  }

  // MEDIUM Reservations
  if (filteredReservations?.length >= 5 && filteredReservations!.length < 10) {
    return (
      <div className="calendar-month__day">
        <span className="calendar-month__day-number calendar-month__day--medium">
          {day}
        </span>
      </div>
    );
  }

  // FULL Reservations
  if (filteredReservations?.length === 10) {
    return (
      <div className="calendar-month__day">
        <span className="calendar-month__day-number calendar-month__day--full">
          {day}
        </span>
      </div>
    );
  }

  if (
    fullDate.getDate() === new Date().getDate() &&
    fullDate.getMonth() === new Date().getMonth()
  ) {
    return (
      <div className="calendar-month__day">
        <span className="calendar-month__day-number calendar-month__day--today">
          {day}
        </span>
      </div>
    );
  }

  return (
    <div className="calendar-month__day">
      <span className="calendar-month__day-number">{day}</span>
    </div>
  );
};

export default Day;

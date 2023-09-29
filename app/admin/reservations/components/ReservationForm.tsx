"use client";
import FormType from "@/app/common/FormType";
import CancelButton from "@/app/components/Button/CancelButton";
import SubmitButton from "@/app/components/Button/SubmitButton";
import Modal from "@/app/components/Modal";
import { useRouter } from "next/navigation";
import React, { useState, useRef, useEffect } from "react";

interface ReservationFormProps {
  type: FormType;
  id?: string | string[];
}

const ReservationForm: React.FC<ReservationFormProps> = ({ id, type }) => {
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isOpen, setIsOpen] = useState(false);
  const [customers, setCustomers] = useState<any[]>([]);
  const [rooms, setRooms] = useState<any[]>([]);

  const disableButtons = () => {
    const buttons = formRef.current?.querySelectorAll(".actions button");
    buttons?.forEach((button) => button.setAttribute("disabled", "disabled"));
  };

  const enableButtons = () => {
    const buttons = formRef.current?.querySelectorAll(".actions button");
    buttons?.forEach((button) => button.removeAttribute("disabled"));
  };

  const handleErrors = (errorMessages: Record<string, string>) => {
    setErrors(errorMessages);
    setTimeout(() => {
      setErrors({});
      enableButtons();
    }, 5000);
  };

  const formatDate = (date: Date) => date.toISOString();

  const fetchJson = async (url: string, options?: RequestInit) => {
    const response = await fetch(url, options);
    return response.json();
  };

  const getOptions = async (
    url: string,
    setState: React.Dispatch<React.SetStateAction<any[]>>
  ) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setState(data.customers || data.rooms || []);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async () => {
    disableButtons();

    const formData = new FormData(formRef.current!);

    if (formData.get("arrivalDate") && formData.get("departureDate")) {
      const arrivalDate = new Date(formData.get("arrivalDate")!.toString());
      const departureDate = new Date(formData.get("departureDate")!.toString());

      try {
        const data = await fetchJson(
          `${
            process.env.NEXT_PUBLIC_BASE_URL
          }/api/reservation/date/${formatDate(arrivalDate)}/${formatDate(
            departureDate
          )}`
        );

        if (data.error) {
          throw new Error(data.error);
        }

        if (data.hasConflict) {
          handleErrors({
            arrivalDate: "There are no rooms available for this date range",
          });
          return;
        }
      } catch (error) {
        console.error(error);
      }
    }

    if (formData.get("arrivalDate")! > formData.get("departureDate")!) {
      handleErrors({
        departureDate: "Departure date must be after arrival date",
      });
      return;
    }

    const formDataArray = Array.from(formData.entries());
    const data: Record<string, string | number> = {};

    formDataArray.forEach(([key, value]) => {
      data[key] = key.includes("Date")
        ? formatDate(new Date(value.toString()))
        : value.toString();
    });

    const newErrors: Record<string, string> = {};

    formDataArray.forEach(([fieldName, fieldValue]) => {
      const input = formRef.current?.querySelector(`[name="${fieldName}"]`);
      const patternError = input?.getAttribute("data-pattern-error");
      const pattern = input?.getAttribute("pattern");

      if (
        pattern &&
        patternError &&
        !new RegExp(pattern!).test(fieldValue.toString())
      ) {
        newErrors[fieldName] = patternError!;
      }
    });

    setErrors(newErrors);

    setTimeout(() => {
      setErrors({});
      enableButtons();
    }, 5000);

    if (Object.keys(newErrors).length === 0) {
      if (type === FormType.UPDATE) {
        setIsOpen(true);
      } else {
        try {
          const responseData = await fetchJson(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/reservation`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
            }
          );

          if (responseData.error) {
            throw new Error(responseData.error);
          }

          router.push("/admin/reservations");
        } catch (error) {
          console.error(error);
        }
      }
    }
  };

  React.useEffect(() => {
    if (type === FormType.UPDATE) {
      const getReservation = async () => {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/reservation/${id}`
        );
        const data = await response.json();
        const reservation = data.reservation;

        console.log(reservation.arrivalDate);

        const arrivalDate = reservation.arrivalDate.split("T")[0];
        const departureDate = reservation.departureDate.split("T")[0];

        const arrivalDateInput = formRef.current?.querySelector(
          "#arrivalDate"
        ) as HTMLInputElement;
        const departureDateInput = formRef.current?.querySelector(
          "#departureDate"
        ) as HTMLInputElement;

        arrivalDateInput.value = arrivalDate;
        departureDateInput.value = departureDate;

        const customerIdInput = formRef.current?.querySelector(
          "#customerId"
        ) as HTMLSelectElement;
        const roomIdInput = formRef.current?.querySelector(
          "#roomId"
        ) as HTMLSelectElement;

        customerIdInput.value = reservation.customerId.toString();
        roomIdInput.value = reservation.roomId.toString();
      };
      getReservation();
    }
  }, []);

  const handleModalSubmit = async () => {
    const buttons = formRef.current?.querySelectorAll(".actions button");
    disableButtons();

    const formData = new FormData(formRef.current!);
    const formDataArray = Array.from(formData.entries());
    const data: Record<string, string | number> = {};

    formDataArray.forEach(([key, value]) => {
      data[key] = key.includes("Date")
        ? formatDate(new Date(value.toString()))
        : value.toString();
    });

    const newErrors: Record<string, string> = {};

    formDataArray.forEach(([fieldName, fieldValue]) => {
      const input = formRef.current?.querySelector(`[name="${fieldName}"]`);
      const patternError = input?.getAttribute("data-pattern-error");
      const pattern = input?.getAttribute("pattern");

      if (
        pattern &&
        patternError &&
        !new RegExp(pattern!).test(fieldValue.toString())
      ) {
        newErrors[fieldName] = patternError!;
      }
    });

    setErrors(newErrors);

    setTimeout(() => {
      setErrors({});
      buttons?.forEach((button) => button.removeAttribute("disabled"));
    }, 5000);

    if (Object.keys(newErrors).length === 0) {
      try {
        const responseData = await fetchJson(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/reservation/${id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );

        if (responseData.error) {
          throw new Error(responseData.error);
        }

        router.push("/admin/reservations");
      } catch (error) {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    getOptions(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/customer`,
      setCustomers
    );
    getOptions(`${process.env.NEXT_PUBLIC_BASE_URL}/api/room`, setRooms);
  }, [id, type]);

  return (
    <>
      <form className="form" ref={formRef} onSubmit={handleSubmit}>
        <div className="form__group">
          <label htmlFor="customer">Customer</label>
          <select name="customerId" id="customerId">
            {customers.map((customer) => (
              <option key={customer.id} value={customer.id}>
                {customer.name}
              </option>
            ))}
          </select>
          {errors && errors.customerId && (
            <div className="form__error">{errors.customerId}</div>
          )}
        </div>

        <div className="form__group">
          <label htmlFor="arrivalDate">Arrival Date</label>
          <input
            type="date"
            name="arrivalDate"
            id="arrivalDate"
            min={new Date().toISOString().split("T")[0]}
          />
          {errors && errors.arrivalDate && (
            <div className="form__error">{errors.arrivalDate}</div>
          )}
        </div>

        <div className="form__group">
          <label htmlFor="departureDate">Departure Date</label>
          <input
            type="date"
            name="departureDate"
            id="departureDate"
            min={new Date().toISOString().split("T")[0]}
          />
          {errors && errors.departureDate && (
            <div className="form__error">{errors.departureDate}</div>
          )}
        </div>

        <div className="form__group">
          <label htmlFor="room">Room</label>
          <select name="roomId" id="roomId">
            {rooms.map((room) => (
              <option key={room.id} value={room.id}>
                {room.name}
              </option>
            ))}
          </select>
          {errors && errors.roomId && (
            <div className="form__error">{errors.roomId}</div>
          )}
        </div>
        <div
          className="actions"
          style={{
            order: 2,
          }}
        >
          <CancelButton
            onClick={(e) => {
              e.preventDefault();
              router.push("/admin/reservations");
            }}
          >
            Cancel
          </CancelButton>
          <SubmitButton
            onClick={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            Submit
          </SubmitButton>
        </div>
      </form>
      <Modal
        title="Edit Reservation"
        open={isOpen}
        onClose={() => {
          setIsOpen(false);
          const buttons = formRef.current!.querySelectorAll(".actions button");
          buttons.forEach((button) => {
            button.removeAttribute("disabled");
          });
        }}
        actions={
          <button
            className="btn btn--submit"
            onClick={(e) => {
              handleModalSubmit();
            }}
          >
            Accept
          </button>
        }
      >
        Are you sure you want to edit this reservation?
      </Modal>
    </>
  );
};

export default ReservationForm;

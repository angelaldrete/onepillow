import React from "react";
import Button from "./";
import { MdAdd } from "react-icons/md";
import Link from "next/link";

interface AddButtonProps {
  onClick?: () => void;
  to: string;
}

const AddButton: React.FC<AddButtonProps> = ({ onClick, to }) => {
  return (
    <Button onClick={onClick} className="btn--add">
      <Link href={to}>
        <MdAdd />
      </Link>
    </Button>
  );
};

export default AddButton;

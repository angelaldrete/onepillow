import React from "react";
import Button from "./";
import { MdAdd } from "react-icons/md";

interface AddButtonProps {
  onClick: () => void;
}

const AddButton: React.FC<AddButtonProps> = ({ onClick }) => {
  return (
    <Button onClick={onClick} className="btn--add">
      <MdAdd />
    </Button>
  );
};

export default AddButton;

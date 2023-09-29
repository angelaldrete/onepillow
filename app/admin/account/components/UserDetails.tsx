import Card from "@/app/components/Card";
import React from "react";

interface UserDetailsProps {
  details: {
    email?: string;
  };
}

const UserDetails: React.FC<UserDetailsProps> = ({ details }) => {
  return (
    <ul className="user-details">
      <Card
        style={{
          animationDelay: "0.2s",
        }}
      >
        <li>
          <strong>Email:</strong> {details.email}
        </li>
      </Card>
    </ul>
  );
};

export default UserDetails;

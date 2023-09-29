import React from "react";
import Card from "@/app/components/Card";
import Image from "next/image";

interface UserHeaderProps {
  name: string;
  image?: string;
}

const UserHeader: React.FC<UserHeaderProps> = ({ name, image }) => {
  return (
    <Card
      style={{
        animationDelay: "0.1s",
      }}
      className="user__header"
    >
      {image && <Image src={image} alt="User avatar" className="user__image" />}
      <div className="user__name">{name}</div>
    </Card>
  );
};

export default UserHeader;

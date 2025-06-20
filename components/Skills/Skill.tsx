import Image from "next/image";
import React from "react";

type Props = { icon: string; name: string };

const Skill = ({ icon, name }: Props) => {
  return (
    <div className="realtive flex gap-2 p-2 border-primary border rounded-lg h-[46px]">
      <Image src={icon} alt={`${name} icon`} width={25} height={25} />
      <p className="text-lg">{name}</p>
    </div>
  );
};

export default Skill;

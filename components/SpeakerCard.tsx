'use client';
import { Card } from "@heroui/react";
import Image from "next/image";

export default function SpeakerCard({
  name,
  image,
}: {
  name: string;
  image: string;
}) {
  return (
    <div className="flex flex-col justify-center items-center space-y-2">
      <Card className="rounded-full overflow-hidden w-[12rem] h-[12rem] shadow-lg border-none">
        <Image
          alt={name}
          src={image}
          width={150}
          height={150}
          className="object-cover w-full h-full"
        />
      </Card>
      <p className="text-center text-lg font-semibold">{name}</p>
    </div>
  );
}

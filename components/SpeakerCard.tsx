'use client';
import { Button } from "@heroui/button";
import { Card, CardFooter } from "@heroui/react";
import Image from "next/image";
export default function SpeakerCard({
  name,
  image,
}: {
  name: string;
  image: string;
}) {
  return (    
  <Card isFooterBlurred className="border-none max-w-[440px] w-[300px]" radius="lg">
    <Image
      alt={name}
      className="object-cover"
      height={200}
      src={image}
      width={300}
    />
    <CardFooter className="justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
      <p className="text-large">{name}</p>
      {/* <Button
        className="text-tiny text-white bg-black/20"
        color="default"
        radius="lg"
        size="sm"
        variant="flat"
      >
        Notify me
      </Button> */}
    </CardFooter>
  </Card>
  );
}
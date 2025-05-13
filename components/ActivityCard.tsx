import { Card, CardBody, CardFooter, CardHeader } from "@heroui/react";
import Link from "next/link";

export default function ActivityCard({ title, description, date, image, link }: {title: string, description: string, date: string, image: string, link: string}) {
  return (
    <Card className="shadow-md border-1 dark:border-none rounded-xl">
      <CardHeader className="p-0">
        <img src={image} alt={title} className="w-full h-48 object-cover rounded-t-xl" />
      </CardHeader>
      <CardBody>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-700 dark:text-gray-200 line-clamp-4">{description}</p>
      </CardBody>
      <CardFooter>
        <p>{date}</p>
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="right-3 bottom-3 absolute text-blue-800 text-sm"
        >
          View Post
        </Link>
      </CardFooter>
    </Card>
  );
}

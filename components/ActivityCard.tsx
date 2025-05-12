import { Card, CardBody, CardFooter, CardHeader } from "@heroui/react";

export default function ActivityCard({ title, description, image, link }: {title: string, description: string, image: string, link: string}) {
  return (
    <Card className="max-w-[340px] shadow-md border-1 rounded-xl">
      <CardHeader className="p-0">
        <img src={image} alt={title} className="w-full h-48 object-cover rounded-t-xl" />
      </CardHeader>
      <CardBody>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-700 dark:text-gray-200">{description}</p>
      </CardBody>
      <CardFooter>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="right-3 bottom-3 absolute text-blue-800 text-sm"
        >
          View Post
        </a>
      </CardFooter>
    </Card>
  );
}

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/react";

export default function BlogCard({ title, description, image, link }: {title: string, description: string, image: string, link: string}) {
  return (
    <Card className="shadow-md border-1 dark:border-none rounded-xl min-h-[40vh] lg:max-h-[40vh]">
      <CardHeader className="p-0">
        <img src={image} alt={title} className="w-full h-48 object-cover rounded-t-xl" />
      </CardHeader>
      <CardBody>
        <h3 className="text-lg font-semibold mb-2 line-clamp-2">{title}</h3>
        <p className="text-sm text-gray-700 dark:text-gray-200 line-clamp-4">{description}</p>
      </CardBody>
      <CardFooter>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="right-3 bottom-3 absolute text-blue-800 text-md transition-all group duration-200 ease-in-out"
        >
         <div className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:-translate-x-1 transition-all duration-200 inline">
             <FontAwesomeIcon icon={faArrowRight} />
         </div> View Blog
        </a>
      </CardFooter>
    </Card>
  );
}

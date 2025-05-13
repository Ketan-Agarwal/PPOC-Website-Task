import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function EventCard({ title, date, description, image, link, tags }: { title: string; date: string; description: string; image: string; link?: string; tags?: string[] }) {
  return (
    <div className="flex flex-col place-space-between bg-white shadow-md p-4 w-full max-w-sm hover:shadow-xl transition border-5 rounded-2xl">
      <div className="w-full h-48 overflow-hidden rounded-lg">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-bold text-black">{title}</h3>
        <p className="text-sm text-gray-500">{date}</p>
        <p className="text-sm text-gray-700 mt-2 line-clamp-[8]">{description}</p>
        <div className="flex gap-2 mt-3 flex-wrap">
          {tags?.map((tag, idx) => (
            <span key={idx} className="text-xs bg-gray-200 px-2 py-0.5 rounded-full text-gray-600">
              #{tag}
            </span>
          ))}
        </div>
      </div>
      <div className=" 
  mt-4 flex justify-center ">
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" className="group text-blue-600 text-sm mt-3 inline-flex">
            
            <span className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:-translate-x-1 transition-all duration-200"> <FontAwesomeIcon icon={faArrowRight}/> </span> Full Recap
          </a>
        )}
        </div>
    </div>
  );
}

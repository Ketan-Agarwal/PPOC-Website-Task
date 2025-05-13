import EventCard from "../../components/EventCard";
import content from "../../config/content"


export default function Events() {
  
  return (
    <div className="px-6 py-12 dark:bg-black w-full">
      {/* <h1 className="text-4xl font-extrabold text-white text-center mb-10">Our Events</h1> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center w-full">
        {content.events.map((event, idx) => (
          <EventCard key={idx} {...event} />
        ))}
      </div>
    </div>
  );
}
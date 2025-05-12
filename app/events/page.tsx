import { title } from "@/components/primitives";
import Events from "./Events";

export default function EventsPage() {
  return (
    <div className="mt-20">
      <h1 className={title()}>Events.</h1>
      <Events/>
    </div>
  );
}

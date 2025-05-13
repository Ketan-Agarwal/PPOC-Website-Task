import Blogs from "@/components/Blogs";
import { title, subtitle } from "@/components/primitives";
import clsx from "clsx";

export default function BlogPage() {
  return (
    <div className="mt-20">
      <h1 className={title()}>Blog.</h1>
      <h2 className={clsx(subtitle(), 'mt-10')}>Coming soon...</h2>
    </div>
  );
}

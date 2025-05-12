import { title } from "@/components/primitives";
import Initiatives from "./initiatives";

export default function PricingPage() {
  return (
<div className="mt-20">
        <h1 className={title()}>Initiatives.</h1>
    <Initiatives/>
    </div>
  );
}

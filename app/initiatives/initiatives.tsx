'use client';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { initiatives } from "./initiativesdata"
export default function Initiatives(){
    return (
        <section className="w-full mt-10">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {initiatives.map((initiative, index) => (
              <div key={index} className="mb-8 max-w-[600px] m-10">
                <h2 className="text-2xl font-bold text-left">{initiative.title}</h2>
                <p className="mt-2 text-lg text-left min-h-[100px]">{initiative.description}</p>
                <div className="right-0 w-full text-left mt-1">            <a href={initiative.link} className="group text-blue-500 underline inline-flex items-center gap-1">
  Learn More
  <span className="opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-1 transition-all duration-200">
    <FontAwesomeIcon icon={faArrowRight} />
  </span>
</a></div>
              </div>
            ))}
          </div>
        </section>
    )
}
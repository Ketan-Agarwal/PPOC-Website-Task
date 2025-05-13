'use client';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ContactUs() {
  const contactMethods = [
    {
      title: "Follow Us on Instagram",
      tool: "Instagram",
      link: "https://www.instagram.com/ppoc_iitk/"
    },
    {
      title: "Email Us",
      description: "Reach out to us via email for any queries or collaborations.",
      tool: "Mail Us",
      link: "mailto:ppoc@iitk.ac.in",
    },
    {
      title: "Visit Us",
      description: "Find us at the Public Policy and Opinion Cell, IIT Kanpur.",
      tool: "See on Maps",
      link: "https://maps.app.goo.gl/CuxqW5VG3itbNpvYA",
    },
  ];

  return (
    <section className="w-full mt-10">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {contactMethods.map((method, index) => (
          <div key={index} className="mb-8 max-w-[600px] m-10">
            <h2 className="text-2xl font-bold text-left">{method.title}</h2>
            <p className="mt-2 text-lg text-left">{method.description}</p>
            <div className="right-0 w-full text-left mt-4">
              <a
                href={method.link}
                className="group text-blue-500 underline inline-flex items-center gap-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                {method.tool}
                <span className="opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-1 transition-all duration-200">
                  <FontAwesomeIcon icon={faArrowRight} />
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
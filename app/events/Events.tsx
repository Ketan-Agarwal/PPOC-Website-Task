import EventCard from "../../components/EventCard";

const events = [
  {
    title: "Policy Conclave 2023",
    date: "October 2023",
    description:
      "Policy Conclave is the annual flagship event of PPOC, IITK, usually hosted in the months of March and April. An exhaustive three-day long chain of events organised in Webinars, Competitions and Workshops designed to enrich the audience with knowledge on Public Issues and Policy Research. If you are a college student seeking to know and understand Public Opinion and its implementation in real life, Policy Conclave is the one-stop destination for you.",
    image: "https://ppociitk.in/policy_conclave.png",
    link: "#",
    tags: ["policy", "student-voice", "conclave"],
  },
  {
    title: "Indian Governance Summit",
    date: "January 2025",
    description:
      "Does Governance fascinate you? Ever wondered how Public Opinion translates into Public Policy and what are challenges faced to implement it in a diverse nation like India? If you want to understand the chaotic order that India is, IGS is the elixir mine you are looking for!! Organised in September, an open-to-all three-day-long fest of insightful Webinars and exciting Competitions to satiate your thirst for Knowledge! ",
    image: "https://ppociitk.in/gov.jpeg",
    link: "#",
    tags: ["governance", "summit", "leadership"],
  },
  {
    title: "The Knowledge Hunt",
    date: "March 2025",
    description:
      "The Knowledge Hunt is a national-level initiative from Public Policy and Opinion Cell IIT Kanpur to engage students at the grass-root level and strengthen our nation's talent pool in the policy and governance field. It is a Quiz Competition where the students are tested based on their knowledge and aptitude across diverse areas regarding mental ability, general science, economics, political science, international relations, history, and geography.The Knowledge Hunt is a national-level initiative from Public Policy and Opinion Cell IIT Kanpur to engage students at the grass-root level and strengthen our nation's talent pool in the policy and governance field. It is a Quiz Competition where the students are tested based on their knowledge and aptitude across diverse areas regarding mental ability, general science, economics, political science, international relations, history, and geography.",
    image: "https://ppociitk.in/hunt.jpeg",
    link: "#",
    tags: ["quiz", "knowledge", "fun"],
  },
];

export default function Events() {
  return (
    <div className="px-6 py-12 dark:bg-black w-full">
      {/* <h1 className="text-4xl font-extrabold text-white text-center mb-10">Our Events</h1> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center w-full">
        {events.map((event, idx) => (
          <EventCard key={idx} {...event} />
        ))}
      </div>
    </div>
  );
}
import Link from "next/link";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
export default function OurTeam() {
    const team = [
        {
            name: "Mohit Jangid",
            position: "Overall Coordinator",
            image: "https://i.postimg.cc/Vsd2d1kH/Mohit-Jangid-Mohit-Jangid-1-1.jpg",
            linkedin: "https://www.linkedin.com/in/mohit-jangid-356054258/",
            instagram: "https://www.instagram.com",
            mail: "mohitj22@iitk.ac.in"
        },
        {
            name: "Bhakti Sangvikar",
            position: "Overall Coordinator",
            image: "https://i.postimg.cc/kMzzSZVM/Bhakti-Bhakti-Sangvikar.jpg",
            linkedin: "http://www.linkedin.com/in/bhakti-sangvikar",
            instagram: "https://www.instagram.com",
            mail: "bhaktij22@iitk.ac.in"
        }
    ];
    return (
        <>
        <section className="flex flex-col items-center justify-center w-full">
            <div className="flex items-center space-x-2 mb-6 mt-10">
                <h1 className="text-2xl lg:text-4xl underline font-bold">Our Team.</h1>
                <Link href="/about">
                    <div className="text-blue-500 hover:text-blue-700">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </div>
                </Link>
            </div>
            <div>
                <div className="flex flex-wrap gap-4 justify-center">
                    {team.map((member, index) => (
                        <div key={index} className="flex flex-col items-center bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 max-w-xs">
                            <img src={member.image} alt={member.name} className="rounded-full w-64 h-64 mb-4 border-3" />
                            <h2 className="text-xl font-semibold">{member.name}</h2>
                            <p className="text-gray-600 dark:text-gray-400">{member.position}</p>
                            <div className="grid grid-cols-3 text-center w-full place-content-around mt-2">
                                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline"><FontAwesomeIcon size="xl" icon={faLinkedin}/></a>
                                <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:underline"><FontAwesomeIcon size="xl" icon={faInstagram}/></a>
                                <a href={`mailto:${member.mail}`} className="text-green-500 hover:underline"><FontAwesomeIcon size="xl" icon={faEnvelope}/></a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        </>
    );
}
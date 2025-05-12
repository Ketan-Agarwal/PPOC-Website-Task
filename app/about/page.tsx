import { title } from "@/components/primitives";

export default function AboutPage() {
  return (
    <div className="mt-20">
      <h1 className={title()}>About Us.</h1>
      <section className="flex flex-col items-center justify-center w-full gap-12 py-8 md:py-12 px-6 md:px-20">

        {/* Mission Section */}
        <section className="w-full flex flex-col md:flex-row gap-8">
          <h2 className="text-2xl font-semibold md:w-1/3">Our Mission</h2>
          <p className="text-left md:w-2/3">
            We exist to make policy personal. At PPOC, our mission is to spark curiosity, provoke thought, and drive change through informed dialogue on governance and public affairs. We believe that students shouldn’t just study systems—they should shape them. By creating a hub for debate, research, and civic action, we empower the next generation of changemakers.
          </p>
        </section>

        {/* Vision Section */}
        <section className="w-full flex flex-col md:flex-row gap-8">
          <h2 className="text-2xl font-semibold md:w-1/3">Our Vision</h2>
          <p className="text-left md:w-2/3">
            To lead India’s student policy movement. We envision a future where every IITK graduate is not only technically brilliant but also socially responsible and civically aware. PPOC aims to become the go-to platform for public policy engagement—where ideas turn into impact, and opinion into action.
          </p>
        </section>

        {/* Activities Section */}
        <section className="w-full flex flex-col md:flex-row gap-8">
          <h2 className="text-2xl font-semibold md:w-1/3">What We Do</h2>
          <ul className="list-disc list-inside md:w-2/3 space-y-2 text-left">
            <li>Host India’s leading student-run policy events like <strong>Policy Conclave</strong> and the <strong>Indian Governance Summit</strong>.</li>
            <li>Run initiatives like <strong>Samvaad</strong>, <strong>Sansad</strong>, and <strong>UPSC Talks</strong> to foster real civic dialogue.</li>
            <li>Publish high-quality content through blog series such as <strong>Inside</strong>, <strong>D-CODE</strong>, <strong>Siyaasat</strong>, and more.</li>
            <li>Offer hands-on policy research projects during semester breaks and vacations.</li>
            <li>Collaborate with experts, alumni, NGOs, and think tanks for lectures, mentorships, and internships.</li>
          </ul>
        </section>
        
      </section>
    </div>
  );
}

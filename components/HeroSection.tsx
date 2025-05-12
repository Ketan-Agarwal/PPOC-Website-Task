'use client';
import { Button, ButtonGroup } from "@heroui/button";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function HeroSection() {
    return (
        <section className="w-[100vw] h-[100vh] flex flex-col lg:p-20 bg-fixed" style={{
            backgroundImage: "url('https://vajiram-prod.s3.ap-south-1.amazonaws.com/What_is_the_Committee_of_Privileges_in_Parliament_799a59a762.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
              <div className="absolute inset-0 bg-black bg-opacity-0 dark:bg-opacity-60"></div>
              <div className="relative">

            <div className="font-extrabold text-2xl lg:text-5xl mt-[90px] mx-10 pb-5">
              Public Policy and Opinion Cell
            </div>
            <div className="text-xl italic mx-10 max-w-2xl font-bold">
              "There's Tremendous Gap Between Public Opinion and Public Policy" - Noam Chomsky
            </div>
            {/* <Button>Read our Blog</Button> */}
            <div className="mt-5 items-left flex flex-row flex-initial max-w-[300px] gap-5 place-content-between justify-start ml-10">
  {/* <Link href="/blog"> */}
    <Button variant="solid"  as={Link} color="primary" href="/blog" className=" dark:bg-black bg-white text-black lg:text-lg dark:text-white ">
      Read Our Blog
    </Button>
  {/* </Link> */}

  {/* <Link href="/contact"> */}
    <Button variant="solid"  as={Link} color="primary" href="/contact" className="dark:bg-black bg-white text-black lg:text-lg dark:text-white">
      Contact Us
    </Button>
  {/* </Link> */}
</div>
</div>

          </section>
    );
    }
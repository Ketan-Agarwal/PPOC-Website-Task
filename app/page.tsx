import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";
import {Button, ButtonGroup} from "@heroui/button";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import RecentActivities from "@/components/RecentActivities";
import { redirect } from "next/navigation";
import HeroSection from "@/components/HeroSection";
import PastSpeakers from "@/components/PastSpeakers";
import OurTeam from "@/components/OurTeam";
import BlogPage from "./blog/page";
import Blogs from "@/components/Blogs";
export default function Home() {
  return (
    <>
    <HeroSection/>
    <Blogs />
    <RecentActivities />
    <PastSpeakers />
    <OurTeam />
  </>
  
  );
}

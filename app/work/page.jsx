"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    num: "01",
    category: "front-end",
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis natus facilis perspiciatis id. Itaque officiis in omnis veniam magni? Pariatur maiores explicabo, sed id ut eligendi laborum consequuntur hic sequi!",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "fullstack",
    title: "Project 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis natus facilis perspiciatis id. Itaque officiis in omnis veniam magni? Pariatur maiores explicabo, sed id ut eligendi laborum consequuntur hic sequi!",
    stack: [{ name: "NextJs" }, { name: "TailwindCss" }, { name: "NodeJs" }],
    image: "/assets/work/thumb2.png",
    live: "",
    github: "",
  },
];
const Work = () => {
  return <div>page</div>;
};

export default Work;

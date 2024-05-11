"use client";

import Image from "next/image";
import styles from "./page.module.css";
import logo from '../img/logo-white.png'
import Link from "next/link";
import IndexCover from "./index-cover/index-cover";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  
  return (
    <div>
      <IndexCover onEnter={() => {
        router.replace("/main");
      }}></IndexCover>
    </div>
  );
}

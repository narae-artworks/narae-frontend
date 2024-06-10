"use client";

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

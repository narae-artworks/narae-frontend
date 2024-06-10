"use client";

import { useEffect, useState } from "react";
import IndexCover from "./index-cover/index-cover";
import { useRouter } from "next/navigation";
import Home from "./main/page";

export default function Index() {
  const router = useRouter();
  const [coverEnabled, setCoverEnabled] = useState<boolean | null>(null);
  useEffect(() => {
    if (coverEnabled === null) {
      if (localStorage.getItem('coverEnabled') === null) {
        localStorage.setItem('coverEnabled', 'true');
        setCoverEnabled(true);
      } else {
        setCoverEnabled(JSON.parse(localStorage.getItem('coverEnabled') as string))
      }
    }
  }, []);

  return (
    <div>
      { coverEnabled === null ? null : coverEnabled ? 
      <IndexCover onEnter={() => {
        localStorage.setItem('coverEnabled', 'false');
        setCoverEnabled(false);
      }}></IndexCover> : <Home></Home>}
    </div>
  );
}

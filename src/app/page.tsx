"use client";

import { useEffect, useState } from "react";
import IndexCover from "./index-cover/index-cover";
import { useRouter } from "next/navigation";
import Home from "./main/page";

export default function Index() {
  const router = useRouter();
  const [coverEnabled, setCoverEnabled] = useState<boolean | null>(null);
  const [homeVisibility, setHomeVisibility] = useState<boolean>(true);
  useEffect(() => {
    if (coverEnabled === null) {
      if (localStorage.getItem('coverEnabled') === null) {
        localStorage.setItem('coverEnabled', 'true');
        setHomeVisibility(false);
        setCoverEnabled(true);
        setTimeout(() => {
          setHomeVisibility(true);
        }, 300);
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
      }}></IndexCover> : (homeVisibility && <Home></Home>)}
    </div>
  );
}

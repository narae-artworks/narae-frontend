import TopNavbar from "../top-navbar/top-navbar";
import nightBackground from '../sky-background.module.scss';
import { ReactNode } from "react";

type Prop = {children?: ReactNode};

export default function MainLayout({ children }: Prop) {
  return (
    <div className={nightBackground.nightBackground} style={{minHeight: '100vh'}}>
        <TopNavbar></TopNavbar>
        {children}
    </div>
  );
}

"use client";

import TopNavbar from "../top-navbar/top-navbar";
import nightBackground from '../sky-background.module.scss';
import styles from './page.module.scss';
import Image from 'next/image';
import naraeWhite from '@/img/logo-white.png';

export default function Home() {
  return (
    <div className={nightBackground.nightBackground} style={{minHeight: '100vh'}}>
        <TopNavbar className={styles.navbar}></TopNavbar>
        <div className={styles.contentContainer}>
          <div className="section">
            <div className={styles.videoContainer}>
              <video src="/intro.mp4" autoPlay controls={false} ></video>
            </div>
            <div className={styles.logoContainer}>
                <Image src={naraeWhite} alt="narae white logo image" className={styles.LogoImg}></Image>
              </div>
          </div>
        </div>
    </div>
  );
}
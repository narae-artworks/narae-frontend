"use client";

import TopNavbar from "../top-navbar/top-navbar";
import nightBackground from '../sky-background.module.scss';
import ReactFullpage from "@fullpage/react-fullpage";
import styles from './page.module.scss';

export default function Home() {
  return (
    <div className={nightBackground.nightBackground} style={{minHeight: '100vh'}}>
        <TopNavbar className={styles.navbar}></TopNavbar>
        <ReactFullpage
          scrollOverflow={false}
          credits={{enabled: false}}
          render={({ state, fullpageApi }) => {
            return (
              <ReactFullpage.Wrapper>
                <div className="section">
                  <div className={styles.videoContainer}>
                    <video src="/intro.mp4" autoPlay controls={false}></video>
                  </div>
                </div>
                {/* <div className="section">
                  이벤트
                </div>
                <div className="section">
                  어워드
                </div> */ }
              </ReactFullpage.Wrapper>
            );
          }}
        />
    </div>
  );
}
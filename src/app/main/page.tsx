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
          credits={{enabled: true, label: 'Made with fullpage.js', position: 'right'}}
          render={({ state, fullpageApi }) => {
            return (
              <ReactFullpage.Wrapper>
                <div className="section">
                  영상
                </div>
                <div className="section">
                  이벤트
                </div>
                <div className="section">
                  어워드
                </div>
              </ReactFullpage.Wrapper>
            );
          }}
        />
    </div>
  );
}
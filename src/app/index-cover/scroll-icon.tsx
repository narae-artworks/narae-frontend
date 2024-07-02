'use client';

import Image from "next/image";
import scrollUp from './scroll-up.png';
import scrollDown from './scroll-down.png';
import styles from './scroll-icon.module.scss';
import { useEffect, useState } from "react";

export default function ScrollIcon() {
    let [space, setSpace] = useState<boolean>(false);
    useEffect(() => {
        let timeout = setTimeout(() => {
            setSpace((v) => !v);
        }, 300)

        return () => clearTimeout(timeout);
    })

    return <div className={styles.scrollIcon}>
        <Image src={scrollUp} alt="위로 스크롤하는 아이콘"></Image>
        <Image src={scrollDown} className={styles.down} 
            style={{marginTop: space ? 4 : 0}}
            alt="아래로 스크롤하는 아이콘"></Image>
    </div>   
}
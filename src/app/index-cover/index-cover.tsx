"use client";

import styles from './index-cover.module.scss';
import character from '../../img/character-jumping-eyes-closed.png';
import Image from 'next/image';
import logo from '../../img/logo-white-shadow.png';
import description from './description.png';
import ScrollIcon from './scroll-icon';

type Prop = {
    onEnter: () => void
};

export default function IndexCover({ onEnter } : Prop) {
    return <div className={styles.cover} onTouchMove={(evt) => {
        evt.preventDefault();
        onEnter();
    }} onWheel={(evt) => {
        evt.preventDefault();
        onEnter();
    }}>
        <Image src={character} className={styles.character} alt="점프하는 나래 마스코트 캐릭터" />
        <div className={styles.left}>
            <Image src={logo} className={styles.logo} alt="나래 로고"></Image>
            <Image src={description} alt='국내 최초, 최대 규모 대학생 연합회지'></Image>
            <ScrollIcon></ScrollIcon>
        </div>
        <div className={styles.universites}>
            <div className={styles.shadow}>
            건국대 고려대 경희대 동국대 명지대 상명대 서울대 세종대 중앙대 한국외대 
            </div>
            <div className={styles.text}>
            건국대 고려대 경희대 동국대 명지대 상명대 서울대 세종대 중앙대 한국외대
            </div>
        </div>
    </div>
}
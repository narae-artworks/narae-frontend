import { useState } from 'react';
import styles from './comic.module.scss';

type Prop = {
    artist: string;
    title: string;
    categories: string[];
} & ComicProp;
    
type ComicProp = {
    comicPageSrcs: string[];
    
}

function NullSafeImage({ srcs, idx, fallback }: { srcs: string[]; idx: number | null; fallback?: string; }) {
    return idx === null 
        ? (fallback ?? null) 
        : <img src={srcs[idx]} alt={`${idx + 1}번째 만화 페이지`}></img>
}

function Viewer({ comicPageSrcs }: ComicProp) {
    // page starts from 0
    const [ currentPage, setCurrentPage ] = useState<number>(0);
    const pageCount = comicPageSrcs.length;
    const leftPageIdx = currentPage === 0
        ? null
        : currentPage - 1;
    const rightPageIdx = currentPage === pageCount - 1
        ? null
        : currentPage;

    const increasePageIdx = (delta: number) => ((evt: any) => {
        evt.preventDefault();
        
        setCurrentPage((prev) => {
            let newVal = prev + delta;
            if (0 <= newVal && newVal < pageCount)
                return newVal;
            else
                return prev;
        });
    })

    return <div className={styles.viewer}>
        <div className={styles.desktopHelp}>
            왼쪽 이미지를 누르면 다음 페이지로, 오른쪽 이미지를 누르면 이전 페이지로 이동합니다.
        </div>
        <div className={styles.mobileHelp}>
            이미지의 왼쪽을 누르면 다음 페이지로, 이미지의 오른쪽을 누르면 이전 페이지로 이동합니다.
        </div>
        <div className={styles.desktop}>
            <a className={styles.leftPage} href='#' onClick={increasePageIdx(1)}>
                <NullSafeImage srcs={comicPageSrcs} idx={leftPageIdx}></NullSafeImage>
            </a>
            <a className={styles.rightPage} href='#' onClick={increasePageIdx(-1)}>
                <NullSafeImage srcs={comicPageSrcs} idx={rightPageIdx}></NullSafeImage>
            </a>
        </div>
        <div className={styles.mobile}>
            <div className={styles.page}>
                <img src={comicPageSrcs[currentPage]} alt={`${currentPage + 1}번째 만화 페이지`}></img>
                <a href='#' className={styles.left} onClick={increasePageIdx(1)}></a>
                <a href='#' className={styles.right} onClick={increasePageIdx(-1)}></a>
            </div>
        </div>
    </div>
}

export default function Comic({ categories, title, artist, comicPageSrcs }: Prop ) {
    return <div className={styles.comic}>
        <header>
            <div className={styles.artist}> { artist }</div>
            <div className={styles.title}>
                { title }
                <ul className={styles.categories}>
                    { categories.map(i => <li>{i}</li>) }
                </ul>
            </div>
        </header>
        <Viewer comicPageSrcs={comicPageSrcs}></Viewer>
    </div>
}
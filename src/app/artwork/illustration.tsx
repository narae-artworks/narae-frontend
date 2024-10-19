import Image from 'next/image';
import styles from './illustration.module.scss';
import wing from './wing.png';
import classNames from 'classnames';

type Prop = {
    artist: string;
    title: string;
    categories: string[];
    description: string;
} & IllustrationProp;

type IllustrationProp = {
    illustrationSrc: string;
}

function IllustrationViewer({ illustrationSrc, className } : IllustrationProp & { className?: string }) {
    return <div className={classNames(styles.viewer, className)}>
        {/* <div className={styles.shadow}>
            <img src={illustrationSrc} alt='반투명한 일러스트 이미지'></img>
        </div> */}
        <img className={styles.illustration} src={illustrationSrc} alt="일러스트 이미지"></img>
    </div>
}

export default function Illustration({ categories, title, artist, illustrationSrc, description }: Prop ) {
    return <div className={styles.illustration}>
        <header>
            <div className={styles.artist}>{ artist }</div>
            <div className={styles.title}>
                { title }
                <div className={styles.wing}>
                    <Image src={wing} alt="날개"></Image>
                </div>
            </div>
            <ul className={styles.categories}>
                { categories.map((i, index) => <li key={index}>{i}</li>) }
            </ul>
            <p className={styles.description}>
                {description}
            </p>
        </header>
        <IllustrationViewer illustrationSrc={illustrationSrc}></IllustrationViewer>
    </div>
}
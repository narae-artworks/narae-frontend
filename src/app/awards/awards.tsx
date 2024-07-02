import classNames from 'classnames';
import styles from './awards.module.scss';
import awardImage from '../../img/logo-black.png'
import Image from 'next/image';

type Awards = {
    id: string,
    content: string,
}

type Prop = {
    awards: Awards[]
    className?: string,
}

export default function Awards({ awards, className } : Prop) {
    return <ul className={classNames(styles.awardSection, className)}>
        <div className={styles.ImgContainer}><Image src={awardImage} alt="award image" className={styles.awardImg}></Image></div>
        <div className={styles.awardContainer}>
            <div className={styles.award}>
                {
                    awards.map(i => {
                        return <div key={i.id}>{i.content}</div>
                    })
                }
            </div>
        
        </div>
    </ul>
}
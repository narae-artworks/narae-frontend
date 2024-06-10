import classNames from 'classnames';
import { ReactNode } from "react"
import styles from './celebrate-section.module.scss';

type Prop = {
    sectionName: string,
    children: ReactNode,
    className?: string,
}

export default function CelebrateSection({ sectionName, children, className } : Prop) {
    return <ul className={classNames(styles.section, className)}>
        <div className={styles.sectionNameBox}> <div className={styles.sectionName}><span> {sectionName} </span> </div></div>
        <div className = {styles.artworkSection}> { children } </div>
    </ul>
}
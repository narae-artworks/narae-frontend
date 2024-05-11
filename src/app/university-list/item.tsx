import { ReactNode } from "react";
import styles from './item.module.scss';

type Prop = {
    children?: ReactNode
    href: string;
}

export default function UniversityItem({children, href}: Prop) {
    return <a href={href} className={styles.item}>
        { children }
    </a>
}
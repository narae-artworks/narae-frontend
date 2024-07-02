import { ReactNode } from "react";
import styles from './item.module.scss';
import classNames from "classnames";

type Prop = {
    children?: ReactNode
    href: string;
    className?: string;
}

export default function UniversityItem({children, href, className}: Prop) {
    return <a href={href} className={classNames(styles.item, className)}>
        { children }
    </a>
}
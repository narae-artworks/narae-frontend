import classNames from 'classnames';
import styles from './artwork-list.module.scss'
import { ReactNode } from "react"

type Prop = {
    children: ReactNode
    className?: string
};

export default function ArtworkList({ children, className } : Prop) {
    return <ul className={classNames(styles.artworkList, className)}>
        { children }
    </ul>
}
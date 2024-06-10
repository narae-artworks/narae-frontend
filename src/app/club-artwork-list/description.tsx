import { ReactNode } from 'react';
import styles from './description.module.scss';
import classNames from 'classnames';

type Prop = {
    children?: ReactNode
    className?: string
}

export default function ClubDescription({ children, className } : Prop) {
    return <div className={classNames(styles.description, className)}>
        { children }
    </div>
}
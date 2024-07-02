import { ReactNode } from "react"
import styles from './content-container.module.scss'

type Prop = {
    children?: ReactNode
}

export default function ContentContainer({ children } : Prop) {
    return <main className={styles.container}>
        {children}
    </main>
}
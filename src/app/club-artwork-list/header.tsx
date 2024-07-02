import { ReactNode } from "react"
import UniversityItem from "../university-list/item"

type Prop = {
    href: string,
    children: ReactNode,
    className?: string
}

export default function Header({ href, children, className } : Prop) {
    return <UniversityItem href={href} className={className}>
        { children }
    </UniversityItem>
}
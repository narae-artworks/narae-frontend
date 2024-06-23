"use client";

import Link from "next/link";
import styles from './top-navbar.module.scss';
import classNames from "classnames";
import DesktopNavbar from "./desktop-navbar";
import MobileNavbar from "./mobile-navbar";
import { useState } from "react";
import { SearchProp } from "./search-input";

export type TopNavbarItem = {
    label: string;
    href: string;
    submenu?: ({
        label: string;
        href: string;
    })[];
    }
    
type Prop = {
    className?: string;
    onSearchSubmit?: (query: string) => void;
};

export default function TopNavbar({ className }: Prop) {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const items: TopNavbarItem[] = [
        {
            label: '창작 만화',
            href: '/cartoon?type=creation'
        },
        {
            label: '팬 만화',
            href: '/cartoon?type=fan'
        },
        {
            label: '창작 일러스트',
            href: '/illustration?type=creation'
        },
        {
            label: '팬 일러스트',
            href: '/illustration?type=fan'
        },
        /* {
            label: '기타',
            href: '/other'
        } */
    ]

const searchProps: SearchProp = {
    onChange: setSearchQuery,
    onSubmit: (query) => {
        setSearchQuery('');
    },
    value: searchQuery
};

return <nav className={classNames(styles.navbar, className)}>
    <DesktopNavbar className={styles.desktop} items={items} {...searchProps} />
    <MobileNavbar className={styles.mobile} items={items} {...searchProps} />
</nav>;
}
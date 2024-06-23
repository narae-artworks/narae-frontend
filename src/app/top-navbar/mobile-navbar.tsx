"use client";

import Image from "next/image";
import { TopNavbarItem } from "./top-navbar"
import logo from '../../img/logo-black.png';
import styles from './mobile-navbar.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch, faX } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import { useState } from "react";
import Link from "next/link";
import SearchInput, { SearchProp } from "./search-input";

type Prop = {
    items: TopNavbarItem[];
    className?: string;
} & SearchProp;

function NavbarMenu({ items } : Pick<Prop, 'items'>) {
    return <ul className={styles.menu}>
        { items.map(i => <li><Link href={i.href}>{i.label}</Link></li>)}
    </ul>
}

export default function MobileNavbar({ items, className, ...search }: Prop) {
    const [submenuType, setSubmenuType] = useState<null | 'menu' | 'search'>(null);
    
    return <nav className={classNames(styles.navbar, className)}>
        <div className={styles.logoAndButtons}>
            <Link href="/">
                <Image src={logo} width={40} alt="나래 로고"></Image>
            </Link>
            <div className={styles.space}></div>
            <a href="#" onClick={(evt) => {
                evt.preventDefault();
                setSubmenuType((prev) => prev === 'search' ? null : 'search')
            }}>
                <FontAwesomeIcon icon={submenuType === 'search' ? faX : faSearch} className={styles.icon} />
            </a>
            <a href="#" onClick={(evt) => {
                evt.preventDefault();
                setSubmenuType((prev) => prev === 'menu' ? null : 'menu')
            }}>
                <FontAwesomeIcon icon={submenuType === 'menu' ? faX : faBars} className={styles.icon} />
            </a>
        </div>

        { (submenuType === 'menu') ? (
            <NavbarMenu items={items} />
        ) : (submenuType === 'search' && 
            <div className={styles.searchContainer}>

                <SearchInput className={styles.search} {...search} smallIcon></SearchInput>
            </div>
        )}
    </nav>
}
import { TopNavbarItem } from "./top-navbar"
import styles from './desktop-navbar.module.scss'
import { faXTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import Link from "next/link";
import Image from 'next/image'
import logo from '../../img/logo-black.png';
import SearchInput, { SearchProp } from "./search-input";

type Prop = {
    items: TopNavbarItem[];
    className?: string;
} & SearchProp;

export default function DesktopNavbar({ items, className, ...search }: Prop) {
    return (<nav className={classNames(styles.navbar, className)}>
    <Link href="/" className={styles.home}>
        <Image src={logo} alt="나래 로고"></Image>    
    </Link>
    <ul className={styles.items}>
        {
            items.map(i => (
                <li key={i.label}>
                    <Link href={i.href}  className={styles.label}>
                        {i.label}
                    </Link>
                </li>
            ))
        }
    </ul>
    <div className={styles.space}></div>
    <div className={styles.right}>
        <div className={classNames(styles.box, styles.iconBtn)}>
            <FontAwesomeIcon icon={faEnvelope} className={styles.icon}></FontAwesomeIcon>
        </div>
        <div className={classNames(styles.box, styles.iconBtn)}>
            <FontAwesomeIcon icon={faXTwitter} className={styles.icon}></FontAwesomeIcon>
        </div>
        <div className={classNames(styles.box, styles.iconBtn)}>
            <FontAwesomeIcon icon={faInstagram} className={styles.icon}></FontAwesomeIcon>
        </div>
        {/* 
        <SearchInput className={styles.search} {...search} ></SearchInput>
        */}
    </div>
    </nav>);
}
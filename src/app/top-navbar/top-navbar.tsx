import Link from "next/link";
import styles from './top-navbar.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faSearch } from "@fortawesome/free-solid-svg-icons";
import logo from '../../img/logo-black.png';
import Image from "next/image";
import { faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import classNames from "classnames";

type TopNavbarItem = {
    label: string;
    href: string;
    submenu?: ({
        label: string;
        href: string;
    })[];
}

type Prop = {
    className?: string;};

export default function TopNavbar({ className }: Prop) {
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
        {
            label: '기타',
            href: '/other'
        }
    ]

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
            <form className={classNames(styles.box, styles.search)}>
                <div>
                    <FontAwesomeIcon icon={faSearch} className={styles.icon}></FontAwesomeIcon>
                </div>
                <input type="search" placeholder="제목/작가/학교/태그로 검색">

                </input>
            </form>
        </div>
    </nav>);
}
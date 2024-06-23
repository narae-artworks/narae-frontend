import Image from 'next/image';
import character from '../../img/character-jumping.png';
import TitleHeader from '../title-header/title-header';
import UniversityItem from './item';
import clubs, { ClubInfo } from '../clubs';
import styles from './university-list.module.scss';

type Prop = {
    title: string;
    type: string;
    hrefCreator: (club: ClubInfo) => string
}

export default function UniversityList({ title, type, hrefCreator: createHref } : Prop) {
    return <div className={styles.universityList}>
        <TitleHeader title={title}></TitleHeader>
        <div className={styles.inside}>
            <Image src={character} alt="점프하는 나래 캐릭터" className={styles.character}></Image>
            <ul className={styles.items}>
                {clubs.map(i => (
                    <li key={i.id}>
                        <UniversityItem href={createHref(i) + "?type=" + type}>{i.univShortName} {i.clubName}</UniversityItem>
                    </li>
                ))}
            </ul>
        </div>
    </div>
}
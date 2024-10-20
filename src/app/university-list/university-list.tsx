import Image from 'next/image';
import character from '../../img/character-jumping.png';
import TitleHeader from '../title-header/title-header';
import UniversityItem from './item';
import clubs, { ClubInfo } from '../../data/clubs';
import styles from './university-list.module.scss';

type Prop = {
    title: string;
    type: string;
    hrefCreator: (club: ClubInfo) => string
    filter?: (club: ClubInfo) => boolean;
}

export default function UniversityList({ title, type, hrefCreator: createHref, filter } : Prop) {
    return <div className={styles.universityList}>
        <TitleHeader title={title}></TitleHeader>
        <div className={styles.inside}>
            <Image src={character} alt="점프하는 나래 캐릭터" className={styles.character}></Image>
            <ul className={styles.items}>
                {clubs.filter(filter ?? (() => true)).map(i => (
                    <li key={i.id}>
                        <UniversityItem href={createHref(i)}>{i.univShortName} {i.clubName}</UniversityItem>
                    </li>
                ))}
            </ul>
        </div>
    </div>
}
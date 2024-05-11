import Image from 'next/image';
import character from '../../img/character-jumping.png';
import TitleHeader from '../title-header/title-header';
import UniversityItem from './item';
import clubs, { ClubInfo } from '../clubs';
import styles from './university-list.module.scss';

type Prop = {
    title: string;
    hrefCreator: (club: ClubInfo) => string
}

export default function UniversityList({ title, hrefCreator: createHref } : Prop) {
    return <div className={styles.universityList}>
        <TitleHeader title={title}></TitleHeader>
        <div className={styles.inside}>
            <Image src={character} alt="점프하는 나래 캐릭터"></Image>
            <ul className={styles.items}>
                {clubs.map(i => (
                    <li key={i.id}>
                        <UniversityItem href={createHref(i)}>{i.univShortName} {i.clubName}</UniversityItem>
                    </li>
                ))}
            </ul>
        </div>
    </div>
}
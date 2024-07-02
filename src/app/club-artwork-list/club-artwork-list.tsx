import Artwork from "../artwork-list/artwork";
import ArtworkList from "../artwork-list/artwork-list";
import ClubDescription from "./description";
import Header from "./header";
import styles from './club-artwork-list.module.scss';

type Artwork = {
    thumbnailSrc: string,
    id: string,
    title: string,
    href: string,
}

type Prop = {
    clubName: string,
    clubId: string,
    clubLogoSrc: string,
    description: string,
    arts:  Artwork[]
};

export default function ClubArtworkList({ clubName, clubId, description, clubLogoSrc, arts } : Prop) {
    return (
        <div className={styles.clubArtworkList}>
            <div className={styles.club}>
                <img src={clubLogoSrc} className={styles.logo} alt="Club Logo" />
                <div className={styles.nameAndDescription}>
                    <Header href={`.`} className={styles.name}>
                        {clubName}
                    </Header>
                    <ClubDescription>{description}</ClubDescription>
                </div>
            </div>
            <ArtworkList>
                {arts.map((i) => (
                    <Artwork
                        key={i.id} // Add a unique "key" prop for each element in the iterator
                        href={i.href}
                        thumbnailSrc={i.thumbnailSrc}
                        title={i.title}
                    ></Artwork>
                ))}
            </ArtworkList>
        </div>
    );
}
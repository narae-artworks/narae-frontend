import Artwork from "../artwork-list/artwork";
import ArtworkList from "../artwork-list/artwork-list";
import ClubDescription from "./description";
import Header from "./header";
import styles from './club-artwork-list.module.scss';

type Artwork = {
    thumbnailSrc: string,
    cartoonId: string,
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
    return <div className={styles.clubArtworkList}>
        <div className={styles.club}>
            <img src={clubLogoSrc} className={styles.logo}></img>
            <div className={styles.nameAndDescription}>
                <Header href={`/cartoon/${clubId}`} className={styles.name}>
                    { clubName }
                </Header>
                <ClubDescription>
                    { description }
                </ClubDescription>
            </div>
        </div>
        <ArtworkList>
            { arts.map(i => <Artwork
                href={`/cartoon/${clubId}/${i.cartoonId}`}
                thumbnailSrc={i.thumbnailSrc}
                title={i.title}
                ></Artwork>)
            }
        </ArtworkList>
    </div>
}
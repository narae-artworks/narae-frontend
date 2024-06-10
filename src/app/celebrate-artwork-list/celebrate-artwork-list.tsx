import classNames from 'classnames';
import styles from './celebrate-artwork-list.module.scss'
import Artwork from '../artwork-list/artwork'
import CelebrateTitle from './celebrate-title';
import CelebrateDescription from './celebrate-description';
import CelebrateSection from './celebrate-section';

type ArtworkType = {
    id: string,
    href: string,
    thumbnailSrc: string,
    type: string, // illustration or video
    title: string,
}

type Prop = {
    title: string,
    description: string,
    artworks: ArtworkType[],
    className?: string
};

export default function CelebrateArtworkList({ title, description, artworks, className } : Prop) {
    return <ul className={classNames(styles.celebrateArtworkList, className)}>
        { 
            <div>
            <CelebrateTitle title={title}></CelebrateTitle>
            <CelebrateDescription description={description}></CelebrateDescription>
            <CelebrateSection sectionName="일러스트">
                {
                    artworks.map(i => {
                        if(i.type == "illustration") {
                            return <Artwork
                            key={i.id}
                            href={i.href}
                            thumbnailSrc={i.thumbnailSrc}
                            title={i.title}
                        ></Artwork>
                    }})
                    
                }
            </CelebrateSection>

            <CelebrateSection sectionName="영상">
                {
                    artworks.map(i => {
                        if(i.type == "video") {
                            return <Artwork
                            key={i.id}
                            href={i.href}
                            thumbnailSrc={i.thumbnailSrc}
                            title={i.title}
                        ></Artwork>
                    }})
                }
            </CelebrateSection>
            </div>
        }
    </ul>
}
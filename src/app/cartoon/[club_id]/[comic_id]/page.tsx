"use client";

import Artwork from "@/app/artwork/artwork";
import ClubArtworkList from "@/app/club-artwork-list/club-artwork-list";
import ContentContainer from "@/app/main-layout/content-container";
import MainLayout from "@/app/main-layout/main-layout";
import { cartoons } from "@/data/cartoons";
import { useParams } from "next/navigation";

export default function ClubCartoonList() {
    const params = useParams<{club_id: string; comic_id: string}>();
    const art = cartoons.filter(i => i.clubId === params.club_id && i.id === params.comic_id)[0];

    return <MainLayout>
        <ContentContainer>
            <Artwork
                title={art.title}
                artist={art.artist}
                categories={art.categories}
                comicPageSrcs={art.images}
                description={art.description}
            ></Artwork>
        </ContentContainer>
    </MainLayout>
}
"use client";

import Artwork from "@/app/artwork/artwork";
import ClubArtworkList from "@/app/club-artwork-list/club-artwork-list";
import ContentContainer from "@/app/main-layout/content-container";
import MainLayout from "@/app/main-layout/main-layout";
import { useParams } from "next/navigation";

export default function ClubCartoonList() {
    const params = useParams<{club_id: string}>();

    return <MainLayout>
        <ContentContainer>
            <Artwork
                title="Lorem ipsum"
                artist="홍길동"
                categories={["액션", "코미디", "인생"]}
                illustrationSrc="https://picsum.photos/200/300"
            ></Artwork>
        </ContentContainer>
    </MainLayout>
}
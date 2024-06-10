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
                comicPageSrcs={[
                    "https://picsum.photos/2480/3508?a",
                    "https://picsum.photos/2480/3508?b",
                    "https://picsum.photos/2480/3508?c",
                    "https://picsum.photos/2480/3508?d",
                    "https://picsum.photos/2480/3508?e",
                    "https://picsum.photos/2480/3508?f",
                    "https://picsum.photos/2480/3508?g",
                    "https://picsum.photos/2480/3508?h"
                ]}
            ></Artwork>
        </ContentContainer>
    </MainLayout>
}
"use client";

import ClubArtworkList from "@/app/club-artwork-list/club-artwork-list";
import ContentContainer from "@/app/main-layout/content-container";
import MainLayout from "@/app/main-layout/main-layout";
import { useParams } from "next/navigation";

export default function ClubCartoonList() {
    const params = useParams<{club_id: string}>();

    return <MainLayout>
        <ContentContainer>
            <ClubArtworkList
                arts={[1,2,3,4,5,6,7,8,9].map(i => ({
                    id: i.toString(),
                    href: `/illustration/${params.club_id}/${i}`,
                    thumbnailSrc: 'https://picsum.photos/200',
                    title: 'Lorem ipsum' 
                }))}
                clubId={params.club_id}
                clubLogoSrc="https://picsum.photos/200"
                clubName="한국대학교"
                description="Lorem ipsum"
            />    
        </ContentContainer>
    </MainLayout>
}
"use client";

import ClubArtworkList from "@/app/club-artwork-list/club-artwork-list";
import ContentContainer from "@/app/main-layout/content-container";
import MainLayout from "@/app/main-layout/main-layout";
import { getClubInfoById } from "@/data/clubs";
import { illustrations } from "@/data/illustrations";
import { useParams, useSearchParams } from "next/navigation";

export default function ClubCartoonList() {
    const params = useParams<{club_id: string}>();
    const queryParams = useSearchParams();
    const type = queryParams.get('type') ?? 'creation';

    return <MainLayout>
        <ContentContainer>
            <ClubArtworkList
                arts={illustrations.filter(i => i.clubId === params.club_id && i.derivateWork === (type === 'fan')).map(i => ({
                    id: i.id,
                    href: `/illustration/${params.club_id}/${i.id}`,
                    thumbnailSrc: i.image,
                    title: i.title
                }))}
                clubId={params.club_id}
                clubLogoSrc={getClubInfoById(params.club_id).logoSrc}
                clubName={getClubInfoById(params.club_id).clubName}
                description={getClubInfoById(params.club_id).description}
            />    
        </ContentContainer>
    </MainLayout>
}
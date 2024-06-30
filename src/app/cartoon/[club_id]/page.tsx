"use client";

import ClubArtworkList from "@/app/club-artwork-list/club-artwork-list";
import ContentContainer from "@/app/main-layout/content-container";
import MainLayout from "@/app/main-layout/main-layout";
import { cartoons } from "@/data/cartoons";
import { getClubInfoById } from "@/data/clubs";
import { useParams, useSearchParams } from "next/navigation";

export default function ClubCartoonList() {
    const params = useParams<{club_id: string}>();
    const searchParams = useSearchParams();
    const type = searchParams.get('type') ?? 'creation';

    return <MainLayout>
        <ContentContainer>
            <ClubArtworkList
                arts={cartoons
                    .filter(i => i.clubId === params.club_id && i.derivateWork === (type === 'fan'))
                    .map(i => ({
                        id: i.id.toString(),
                        href: `/cartoon/${params.club_id}/${i.id}`,
                        thumbnailSrc: i.thumbnailSrc,
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
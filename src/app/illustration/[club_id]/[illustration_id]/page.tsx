"use client";

import React from "react";

// TO-DO: organize too dirty imports
import Artwork from "../../../artwork/artwork";
import ContentContainer from "../../../main-layout/content-container";
import MainLayout from "../../../main-layout/main-layout";
import { useParams } from "next/navigation";
import { illustrations } from "@/data/illustrations";

export default function ClubCartoonList() {
    const params = useParams<{club_id: string, illustration_id: string}>();
    const art = illustrations.filter(i => i.clubId === params.club_id && i.id === params.illustration_id)[0];

    return <MainLayout>
        <ContentContainer>
            <Artwork
                title={art.title}
                artist={art.artist}
                categories={art.categories}
                illustrationSrc={art.image}
            ></Artwork>
        </ContentContainer>
    </MainLayout>
}
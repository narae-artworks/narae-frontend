"use client";

import React from "react";

// TO-DO: organize too dirty imports
import Artwork from "../../../../app/artwork/artwork";
import ContentContainer from "../../../../app/main-layout/content-container";
import MainLayout from "../../../../app/main-layout/main-layout";
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
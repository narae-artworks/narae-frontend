"use client"

import ContentContainer from "../main-layout/content-container";
import MainLayout from "../main-layout/main-layout";
import UniversityList from "../university-list/university-list";
import { useState, useEffect } from "react";
import { useSearchParams } from 'next/navigation';

interface QueryParams {
    [key: string]: string;
}

export default function CartoonList() {
    const queryParams = useSearchParams();
    const type = queryParams.get('type') ?? 'creation';

    return <MainLayout>
        <ContentContainer>
            <UniversityList title= {(type == "fan" ? "팬 " : "창작 ") + "만화 홈"}
                type={type}
                hrefCreator={(club) => `/cartoon/${club.id}`}></UniversityList>
        </ContentContainer>
    </MainLayout>
}
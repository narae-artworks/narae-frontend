"use client"

import { useSearchParams } from "next/navigation";
import ContentContainer from "../main-layout/content-container";
import MainLayout from "../main-layout/main-layout";
import UniversityList from "../university-list/university-list";
import { useState, useEffect } from "react";

interface QueryParams {
    [key: string]: string;
}

export default function CartoonList() {
    const queryParams = useSearchParams();
    const type = queryParams.get('type') ?? 'creation';

    return <MainLayout>
        <ContentContainer>
            <UniversityList title= {(type == "fan" ? "팬 " : "창작 ") + "일러스트 홈"}
                type={type}
                hrefCreator={(club) => `/illustration/${club.id}`}></UniversityList>
        </ContentContainer>
    </MainLayout>
}
"use client"

import ContentContainer from "../main-layout/content-container";
import MainLayout from "../main-layout/main-layout";
import UniversityList from "../university-list/university-list";
import { useState, useEffect } from "react";

interface QueryParams {
    [key: string]: string;
}

export default function CartoonList() {

    const [queryParams, setQueryParams] = useState<QueryParams>({});

    useEffect(() => {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const paramsObject: QueryParams = {};
    
    params.forEach((value, key) => {
      paramsObject[key] = value;
    });
    
    setQueryParams(paramsObject);
    }, []);

    return <MainLayout>
        <ContentContainer>
            <UniversityList title= {(queryParams.type == "fan" ? "팬 " : "창작 ") + "만화 홈"}
                type={queryParams.type}
                hrefCreator={(club) => `/cartoon/${club.id}`}></UniversityList>
        </ContentContainer>
    </MainLayout>
}
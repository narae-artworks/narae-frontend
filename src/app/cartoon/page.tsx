import ContentContainer from "../main-layout/content-container";
import MainLayout from "../main-layout/main-layout";
import UniversityList from "../university-list/university-list";

export default function CartoonList() {
    return <MainLayout>
        <ContentContainer>
            <UniversityList title="만화 홈"
                hrefCreator={(club) => `/cartoon/${club.id}`}></UniversityList>
        </ContentContainer>
    </MainLayout>
}
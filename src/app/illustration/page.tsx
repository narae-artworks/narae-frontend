import ContentContainer from "../main-layout/content-container";
import MainLayout from "../main-layout/main-layout";
import UniversityList from "../university-list/university-list";

export default function CartoonList() {
    return <MainLayout>
        <ContentContainer>
            <UniversityList title="일러스트 홈"
                hrefCreator={(club) => `/illustration/${club.id}`}></UniversityList>
        </ContentContainer>
    </MainLayout>
}
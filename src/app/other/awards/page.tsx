import ContentContainer from "../../main-layout/content-container";
import MainLayout from "../../main-layout/main-layout";
import TitleHeader from '../../title-header/title-header';
import awardssample from "../awards/awards-sample";
import AwardsComponent from "../../awards/awards";

export default function NoticeList() {
    return <MainLayout>
        <ContentContainer>
            <TitleHeader title="어워즈"></TitleHeader>
            <AwardsComponent awards={awardssample}></AwardsComponent>
        </ContentContainer>
    </MainLayout>
}
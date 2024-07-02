import ContentContainer from "../../main-layout/content-container";
import MainLayout from "../../main-layout/main-layout";
import NoticeListComponent from "../../notice-list/notice-list";
import noticesample from "../notice/notice-sample"
import TitleHeader from '../../title-header/title-header';

export default function NoticeList() {
    return <MainLayout>
        <ContentContainer>
            <TitleHeader title="공지"></TitleHeader>
            <NoticeListComponent title="공지"
                notices={noticesample}
            />
        </ContentContainer>
    </MainLayout>
}
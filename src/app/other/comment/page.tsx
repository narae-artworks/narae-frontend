import ContentContainer from "../../main-layout/content-container";
import MainLayout from "../../main-layout/main-layout";
import CommentListComponent from "../../comment-list/comment-list";
import commentsample from "../comment/comment-sample"
import TitleHeader from '../../title-header/title-header';

export default function NoticeList() {
    return <MainLayout>
        <ContentContainer>
            <TitleHeader title="후기"></TitleHeader>
            <CommentListComponent comments={commentsample} />
        </ContentContainer>
    </MainLayout>
}
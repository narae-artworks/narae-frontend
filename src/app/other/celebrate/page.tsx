import ContentContainer from "../../main-layout/content-container";
import MainLayout from "../../main-layout/main-layout";
import CelebrateArtworkListComponent from "../../celebrate-artwork-list/celebrate-artwork-list";
import TitleHeader from '../../title-header/title-header';
import celebratesample from "../celebrate/celebrate-sample"


export default function CelebrateList() {
    return <MainLayout>
        <ContentContainer>
            <TitleHeader title="축전"></TitleHeader>
            <CelebrateArtworkListComponent
                title="축전 감사문"
                description="Perfruique beatam accessio voluptas offendimur, disputandum, disputata putem. Divinum didicisse secumque romanum quaeri, alii malunt posuere multavit totus explicatis. Summa inesse fodere discordans veniamus probabo fuerit, dicere ipse duxit triarium. Malarum natus, docti afficitur scribimus primis nimium, utuntur. Si quo non velint tanta dicebas reici fugiendum allicit segnitiae nisl."
                artworks={celebratesample}
            />
        </ContentContainer>
    </MainLayout>
}
import Illustration from "./illustration";
import Comic from "./comic";

type Prop = {
    artist: string;
    title: string;
    categories: string[];
} & ({illustrationSrc: string}|{comicPageSrcs: string[]});

export default function Artwork( props: Prop ) {
    return ('illustrationSrc' in props )  ? <Illustration {...props} /> : <Comic {...props} />;
    
}
import { ReactNode } from "react";

type Prop = {
    artist: string;
    title: string;
    categories: string[];
    comicPageSrcs: string[];
}

export default function Comic({ categories, title, artist, comicPageSrcs }: Prop ) {
    return <div>
        <header>
            <div className="artist"></div>
            <div className="title">

                <div className="wing"></div>
            </div>
            <ul className="categories">
                <li></li>
            </ul>
        </header>
    </div>
}
type Illustration = {
    id: string;
    artist: string;
    clubId: string;
    title: string;
    image: string;
    categories: string[];
    /** 2차 창작 여부 */
    derivateWork: boolean;
}

export const illustrations = [{
    id: '1',
    clubId: "kku",
    artist: "홍길동",
    title: "Lorem ipsum",
    image: "/image/1.jpg",
    categories: ["a", "b", "c"],
    derivateWork: false
}] as Illustration[];
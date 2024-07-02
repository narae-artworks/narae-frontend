type Cartoon = {
    id: string;
    artist: string;
    clubId: string;
    title: string;
    images: string[];
    thumbnailSrc: string;
    categories: string[];
    /** 2차 창작 여부 */
    derivateWork: boolean;
}

export const cartoons = [{
    id: '1',
    clubId: "kku",
    artist: '홍길동',
    title: "Lorem ipsum",
    images: [
        "/image/1.jpg",
        "/image/2.jpg",
        "/image/3.jpg",
        "/image/4.jpg",
        "/image/5.jpg",
        "/image/6.jpg",
    ],
    thumbnailSrc: "/image/1.jpg",
    categories: ["a", "b", "c"],
    derivateWork: false
}] as Cartoon[];
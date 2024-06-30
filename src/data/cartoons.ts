type Cartoon = {
    clubId: string;
    title: string;
    images: string[];
    cover: string;
    tags: string[];
    /** 2차 창작 여부 */
    derivateWork: boolean;
}

export const datcartoon = [{
    clubId: "kku",
    title: "Lorem ipsum",
    images: [
        "image/1.jpg"
    ],
    cover: "image/1.jpg",
    tags: ["a", "b", "c"],
    derivateWork: false
}] as Cartoon[];
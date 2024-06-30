type Illustration = {
    clubId: string;
    title: string;
    image: string;
    tags: string[];
    /** 2차 창작 여부 */
    derivateWork: boolean;
}

export const datcartoon = [{
    clubId: "kku",
    title: "Lorem ipsum",
    image: "image/1.jpg",
    tags: ["a", "b", "c"],
    derivateWork: false
}] as Illustration[];
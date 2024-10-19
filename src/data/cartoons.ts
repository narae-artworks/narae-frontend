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
    description: string;
}
const crsosingTheoryImage = [1,2,3,4,5,6,7,8,9,10].map((i) => `/image/HUFS_KwonDohee_${i.toString().padStart(2, '0')} - 도야.png`);
const tastyRiceImage = [1,2,3,4,5,6,7,8,9].map((i) => `/image/DU_johyeonseo_${i.toString().padStart(2, '0')}.png`)

export const cartoons = [{
    id: 'crossing_theory',
    clubId: "hufs",
    artist: '권도희',
    title: "교차 이론 1화",
    description: "초능력을 가진 채 태어나 빌런들과 싸워나갈 운명을 지닌 윤씨 6남매의 군상극. 싸우는 이유와 사상이 각자 다른 영웅들이 가족이라는 하나의 공동체 속에서 공통된 적을 만나고, 점점 서로를 이해하고 결속되어가는 이야기가 주 스토리이다. 1화는 6남매의 셋째이자 차남, 불살주의 (자칭) 히어로 '윤교차'의 이야기.",
    thumbnailSrc: crsosingTheoryImage[0],
    images: crsosingTheoryImage,
    categories: ["현대판타지", "액션", "능력자배틀물", "초능력", "소년만화", "히어로", "빌런", "개그"],
    derivateWork: false
}, {
    id: 'tasty_rice',
    clubId: 'dgu',
    artist: '조현서',
    title: '해 주는 밥이 제일 맛있다',
    description: '가족의 사랑에 대한 이야기입니다. 대학에 진학하고 사회에서 깨져가며 가장 가까운 존재인 가족이 얼마나 소중한지 다시금 깨닫게 되었습니다. 이를 요리에 빗대어 표현해봤습니다. ',
    categories: ['가족', '가족애', '요리', '요리만화'],
    derivateWork: false,
    images: tastyRiceImage,
    thumbnailSrc: tastyRiceImage[0]
}] as Cartoon[];
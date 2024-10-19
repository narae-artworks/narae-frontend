import { derivativeWorkIllustrations } from "./derivateWorkIllustrations";

export type Illustration = {
  id: string;
  artist: string;
  clubId: string;
  title: string;
  image: string;
  categories: string[];
  /** 2차 창작 여부 */
  derivateWork: boolean;
  description: string;
};

export const illustrations = [
  {
    id: "tosiltosil",
    clubId: "smu",
    artist: "포포",
    title: "토실토실",
    image: "/image/SMU_popo_01.png",
    categories: ["퍼리"],
    derivateWork: false,
    description: "통통한 거 보소 ㅋㅋ",
  },
  {
    id: "illusration_bibada",
    clubId: "hufs",
    artist: "비바다(BIBADA)",
    categories: [
      "달토끼",
      "점둥이",
      "피서",
      "한옥",
      "빙수",
      "서핑",
      "파도타기",
    ],
    derivateWork: false,
    title: "과학천재 달토끼 점둥이, 점둥이네 여름나기-너울/마루",
    image: "/image/HUFS_BIBADA_01.png",
    description:
      "달로 가다가 지구로 불시착 한 달토끼 점둥이는 달나라 호 로켓을 만드는 여행 중에 많은 친구들을 만났습니다. 첨단 비행접시 돌돌이, 지구 맛집 정복자 둥실이, 몸짱 트레이너 짐둥이... 이번 여름에는 일단 이 친구들과 놀기로 했습니다. 달토끼는 지구온난화 날씨에 적응하기 힘들어서 피서가 필요했거든요. 거센 파도와 아름다운 한옥에서 서핑도 하고 빙수도 먹고 좋은 시간을 보내고 있네요. 여름이 끝나면 점둥이가 달나라 호를 타고 집으로 돌아갈 수 있겠죠?",
  },

  {
    id: "fanart_bibada",
    clubId: "hufs",
    artist: "비바다(BIBADA)",
    categories: [
      "던전밥",
      "봇치더락",
      "라이오스",
      "고토히토리",
      "마르실",
      "기타히어로",
      "칠책",
      "센시",
      "파린",
      "실리카겔",
      "노페인",
      "패러디",
      "팬아트",
    ],
    derivateWork: false,
    title: "봇치 더 라이오스 데뷔, 마르실리카겔-노 파린",
    image: "/image/HUFS_BIBADA_02.png",
    description:
      "달로 가다가 지구로 불시착 한 달토끼 점둥이는 달나라 호 로켓을 만드는 여행 중에 많은 친구들을 만났습니다. 첨단 비행접시 돌돌이, 지구 맛집 정복자 둥실이, 몸짱 트레이너 짐둥이... 이번 여름에는 일단 이 친구들과 놀기로 했습니다. 달토끼는 지구온난화 날씨에 적응하기 힘들어서 피서가 필요했거든요. 거센 파도와 아름다운 한옥에서 서핑도 하고 빙수도 먹고 좋은 시간을 보내고 있네요. 여름이 끝나면 점둥이가 달나라 호를 타고 집으로 돌아갈 수 있겠죠?",
  },
  ...`커미션 캐릭터 솔림의 두상 일러스트.
솔림이 셀카를 찍는 모습.
솔림의 전신 일러스트.
커미션 캐릭터 림림의 전신 일러스트.
림림의 반신 일러스트.
림림과 청웨이의 2인 일러스트. 같은 발음의 wei는 여보세요라는 뜻의 중국어이기도 하다. 림림이 청웨이의 이름을 활용해 말장난하는 모습이다.
림림이 거울을 보는 모습.
밴드에서 기타 연주 중 머리를 쓸어넘긴다.
프러포즈를 하는 중이다.
햇빛이 들어오는 도서관에서 마주보며 웃고 있다.`
    .split("\n")
    .map((description, idx) => ({
      id: "rokkoo_" + idx,
      clubId: "kku",
      artist: "심현서",
      categories: ["일러스트", "미소녀", "미소년", "Y2K", "동양풍"],
      description,
      derivateWork: false,
      title: `쉬면서 (${idx + 1})`,
      image: `/image/KU_rokkoo_${(idx + 1)
        .toString()
        .padStart(2, "0")} - 쉬면서.png`,
    })),
  {
    id: "light_in_dark",
    clubId: "smu",
    artist: "인예원",
    categories: ["중세", "청소년", "남자", "빛", "어둠"],
    description:
      "동아리 봄 전시회 때 제작했던 자캐 그림입니다. 중세를 배경으로 각국을 떠돌아다니며 모험하는 귀공자를 생각하고 그려봤는데, 험한 지역까지 가고 여러 위험들을 마주해 잠시 주저앉아 있던 와중 도움을 받는다는 느낌이 되었습니다.",
    derivateWork: false,
    title: "어둠 속의 빛",
    image: "/image/MJU_inyaewon_01.png",
  },
  ...[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => ({
    id: `visible_by_only_my_eyes_${i}`,
    clubId: "khu_hgr",
    artist: "신경찬",
    categories: ["여우", "사진", "포토 드로잉", "동물 캐릭터", "상상"],
    description:
      "저는 일상 속에서 어떤 사물이나 장소를 보면 그곳에 여우를 갖다 놓는 상상을 하곤 합니다. 남들 눈에는 아무것도 없지만, 제 눈에서는 각양각색의 여우들이 저마다 개성을 뽐내며 재밌는 일들을 벌입니다. 작품을 보시는 분들이 어릴 적 상상친구를 만들곤 했던 동심을 떠올리면서, 과연 내 주변에도 여우가 있을지 재밌는 상상을 해보신다면 좋을 것 같습니다.",
    title: `내 눈에만 보여우! (${i})`,
    derivateWork: false,
    image: `/image/KHUH_visible_by_only_my_eyes_${i
      .toString()
      .padStart(2, "0")}.png`,
  })),
  ...[1, 2, 3, 4, 5].map((i) => ({
    id: `meanwhile_in_america_${i}`,
    clubId: "smu",
    artist: "낙서리",
    categories: ["스케치", "낙서", "창작", "낙서리"],
    description: `한편, 아메리카에서는 아메리카 인디언과 아즈텍이 티격태격하는 일상을 보냅니다.
그리고 지나가거나 구경하던  마야와 광대도 얼떨결에 저 둘의 회오리에 휘말리곤 합니다.`,
    title: `Meanwhile in America (${i})`,
    derivateWork: false,
    image: `/image/SMU_doodlelee_0${i}.png`,
  })),
  {
    id: "mermaid_in_the_moonlight",
    clubId: "khu_mhts",
    artist: "구지은",
    categories: [],
    description: "머리카락에 달빛을 품어 심해를 환하게 밝혀주는 인어입니다!",
    derivateWork: false,
    image: "/image/KHUM_mermaid_in_the_moonlight.png",
    title: "달빛을 품은 인어",
  },
].concat(derivativeWorkIllustrations) as Illustration[];

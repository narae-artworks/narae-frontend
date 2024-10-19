import { Illustration } from "./illustrations";

export const derivativeWorkIllustrations: Illustration[] = [
  {
    id: "hunter",
    clubId: "hufs",
    derivateWork: true,
    artist: "HunTer",
    categories: ["명일방주"],
    description:
      "두 사냥꾼이 전투에 돌입하기 직전의 모습을 반씩 보여주는 모습입니다.",
    title: "범고래와 상어",
    image: "/image/HUFS_HunTer_01.png",
  },
  ...[1, 2].map((i) => ({
    id: `requiem_${i}`,
    clubId: "sju",
    derivateWork: true,
    artist: `우산 (${i})`,
    categories: ["진혼기", "자하", "설영"],
    description:
      "요괴와 귀신이 활보하는 신라 시대, 흉신이라는 누명을 쓰고 좌천된 백의화랑 ‘설영’이 8년 만에 나타난 전대 화랑도 수장 ‘자하’를 만나 괴이한 사건들을 함께 해결한다.",
    title: "진혼기",
    image: `/image/SJU_oosan_${i.toString().padStart(2, "0")}.png`,
  })),
  {
    clubId: "sju",
    derivateWork: true,
    artist: "시에미카",
    categories: ["홀로라이브", "네코마타", "오카유"],
    description:
      "이 그림을 그린 후 자신감을 얻어서 온라인 상에 그림 게시를 시작했고, 그린지 1년이 다되어가지만 여전히 가장 마음에 드는 그림입니다.",
    title: "오카유",
    image: "/image/SJU_Shiemika_01.png",
    id: "okau",
  },
  ...[1, 2].map((i) => ({
    clubId: "hufs",
    derivateWork: true,
    artist: "안재홍",
    categories: [],
    description:
      "지금은 전혀 다른 그림을 그리고 있지만, 지금까지도 제가 그림을 그릴 수 있는 것은 아주 오래전부터 이 캐릭터들이 있어주었기 때문입니다.",
    title: `좋아하던 캐릭터들 (${i})`,
    id: `jaehong_${i}`,
    image: `/image/HUFS_jaehong_${i.toString().padStart(2, "0")}.jpeg`,
  })),
  {
    clubId: "cau",
    derivateWork: true,
    artist: "요흔",
    categories: ["프로세카", "쿠사나기네네", "오오토리에무"],
    description:
      "네네와 에무가 추운 겨울에 함께 붕어빵을 먹고 있는 그림입니다.",
    title: "붕어빵 맛있어!!",
    id: "tasty_bungeoppang",
    image: "/image/CAU_yohn_01.png",
  },
  ...[1, 2].map((i) => ({
    clubId: "cau",
    derivateWork: true,
    artist: "요흔",
    categories: ["#카게프로", "키사라기모모"],
    description: "모모가 아이돌로서 활동하는 모습을 그렸습니다",
    title: `나의 아이돌 (${i})`,
    id: `my_idol_${i}`,
    image: `/image/CAU_yohn_0${i + 1}.png`,
  })),
  {
    clubId: "hufs",
    derivateWork: true,
    artist: "유제혁",
    categories: ["건담", "더블오", "메카", "엑시아", "2차창작", "내가건담이다"],
    description:
      "건담 더블오 시즌1의 주역기, 엑시아를 그려보았습니다! 자세히 보시면 GN입자를 남기며 날아가는 나머지 멤버도 숨어있답니다!",
    title: "GN001 EXIA",
    id: "gn001_exia",
    image: "/image/HUFS_YUJEHYEOK_01.jpg",
  },

  {
    id: "kisaki",
    clubId: "kku",
    derivateWork: true,
    artist: "투블리",
    categories: ["블루 아카이브", "스텔라이브"],
    description:
      "블루 아카이브의 키사키입니다. 1부 최종장 당시 처음으로 공개됐는데, 엄청 화제가 됐었죠. 전체적인 흐름을 깔끔하게 표현하는데 신경썼습니다.",
    title: "블루 아카이브-키사키",
    image: "/image/KU_2blitz_01.jpg",
  },

  {
    id: `yuzuka_rico`,
    clubId: "kku",
    derivateWork: true,
    artist: "투블리",
    categories: ["블루 아카이브", "스텔라이브"],
    description:
      "5월 말에 데뷔한 스텔라이브의 3기생들입니다. 그릴 때에는 워낙 데뷔 초라서 방송 대기화면, 방송 배경이나 좋아한다고 말씀하신 내용들을 최대한 반영했습니다",
    title: "스텔라이브-유즈하 리코",
    image: "/image/KU_2blitz_02.jpg",
  },
  {
    id: `yaokumo_rin`,
    clubId: "kku",
    derivateWork: true,
    artist: "투블리",
    categories: ["블루 아카이브", "스텔라이브"],
    description:
      "5월 말에 데뷔한 스텔라이브의 3기생들입니다. 그릴 때에는 워낙 데뷔 초라서 방송 대기화면, 방송 배경이나 좋아한다고 말씀하신 내용들을 최대한 반영했습니다",
    title: "스텔라이브-아오쿠모 린",
    image: "/image/KU_2blitz_03.jpg",
  },
  ...[
    "커피 젤리 먹는 hibari",
    "아침에 발코니로 나와 노래를 듣는 친구의 자작 캐릭터",
    "백예린의 rest를 듣고 그린 친구의 자",
  ].map((description, idx) => ({
    id: `mell_${idx}`,
    clubId: "smu",
    derivateWork: true,
    artist: "멜",
    categories: ["NIJISANJI"],
    description,
    title: "무제",
    image: `/image/SMU_MELL_0${idx + 1}.png`,
  })),
  {
    id: 'heesu',
    clubId: "hufs",
    derivateWork: true,
    artist: "김희수(Heesu)",
    categories: ["프로세카"],
    description:
      "프로세카 만우절 단골 조합! 코하네쨩과 에무쨩입니다. 평소 이벤트에서도 많이 만나줬으면 좋겠다!",
    title: "무제",
    image: `/image/HUFS_Heesu_01.jpg`
  },
];

export type ClubInfo = {
    id: string;
    univShortName: string;
    univFullName: string;
    clubName: string;
}

const clubs = [{
    id: 'kku',
    univFullName: '건국대학교',
    univShortName: '건국대',
    clubName: '망치'
}, {
    id: 'ku',
    univFullName: '고려대학교',
    univShortName: '고려대',
    clubName: '그림마당'
}, {
    id: 'khu_mhts',
    univFullName: '경희대학교',
    univShortName: '경희대',
    clubName: '만화통신'
}, {
    id: 'khu_hgr',
    univFullName: '경희대학교',
    univShortName: '경희대',
    clubName: '한그림',
}, {
    id: 'dgu',
    univFullName: '동국대학교',
    univShortName: '동국대',
    clubName: '만화얼',
}, {
   id: 'mgu',
   univFullName: '명지대학교',
   univShortName: '명지대',
   clubName: '그림패시만화' 
}, {
    id: 'snu',
    univFullName: '서울대학교',
    univShortName: '서울대',
    clubName: '서울대'
}, {
    id: 'smu',
    univFullName:' 상명대학교',
    univShortName: '상명대',
    clubName: '맹가미'
}, {
   id: 'sju',
   univFullName: '세종대학교',
   univShortName: '세종대',
   clubName: '한손' 
}, {
    id: 'cau',
    univFullName: '중앙대학교',
    univShortName: '중앙대',
    clubName: '만화두레'
}, {
    id: 'hufs',
    univFullName: '한국외국어대학교',
    univShortName: '한국외대',
    clubName: '해갈'
}] as ClubInfo[];

export function getClubInfoById(id: string): ClubInfo {
    return clubs.filter(i => i.id === id)[0];
}

export default clubs;
// 구글 맵용 데이터
var marker = [
    {
        "Name": "벨기에",
        "Name_en": "Belgium",
        "Name_ch": "比利时",
        "lat": 50.8550625,
        "lng": 4.3053503,
        "확진자수": 0,
        "사망자수": 0,
        "무증상자": 1,
        "추가날짜": "2/5",
    }, {
        "Name": "스페인",
        "Name_en": "Spain",
        "Name_ch": "西班牙",
        "lat": 40.4378698,
        "lng": -3.8196189,
        "확진자수": 1,
        "사망자수": 0,
        "무증상자": 0,
        "추가날짜": "2/2",
    }, {
        "Name": "스웨덴",
        "Name_en": "Sweden",
        "Name_ch": "瑞典语",
        "lat": 59.3260668,
        "lng": 17.8419725,
        "확진자수": 1,
        "사망자수": 0,
        "무증상자": 0,
        "추가날짜": "2/2",
    }, {
        "Name": "이탈리아",
        "Name_en": "Italy",
        "Name_ch": "义大利",
        "lat": 41.902782,
        "lng": 12.496366,
        "확진자수": 2,
        "사망자수": 0,
        "무증상자": 0,
        "추가날짜": "2/1",
    }, {
        "Name": "러시아",
        "Name_en": "Russia",
        "Name_ch": "俄罗斯",
        "lat": 55.751244,
        "lng": 37.618423,
        "확진자수": 2,
        "사망자수": 0,
        "무증상자": 0,
        "추가날짜": "2/1",
    }, {
        "Name": "캐나다",
        "Name_en": "Canada",
        "Name_ch": "加拿大",
        "lat": 54.7235693,
        "lng": -113.7164202,
        "확진자수": 5,
        "사망자수": 0,
        "무증상자": 0,
    }, {
        "Name": "미국",
        "Name_en": "United States",
        "Name_ch": "美国",
        "lat": 37.2757368,
        "lng": -104.6549972,
        "확진자수": 12,
        "사망자수": 0,
        "무증상자": 0,
    }, {
        "Name": "핀란드",
        "Name_en": "Finland",
        "Name_ch": "芬兰",
        "lat": 60.1102086,
        "lng": 24.7378224,
        "확진자수": 1,
        "사망자수": 0,
        "무증상자": 0,
    }, {
        "Name": "프랑스",
        "Name_en": "France",
        "Name_ch": "法国",
        "lat": 46.1390503,
        "lng": -2.4346589,
        "확진자수": 6,
        "사망자수": 0,
        "무증상자": 0,
    }, {
        "Name": "영국",
        "Name_en": "United Kingdom",
        "Name_ch": "英国",
        "lat": 51.509865,
        "lng": -0.118092,
        "확진자수": 2,
        "사망자수": 0,
        "무증상자": 0,
        "추가날짜": "2/1",
    }, {
        "Name": "네팔",
        "Name_en": "Nepal",
        "Name_ch": "尼泊尔",
        "lat": 28.3838445,
        "lng": 81.8867804,
        "확진자수": 1,
        "사망자수": 0,
        "무증상자": 0,
    }, {
        "Name": "마카오",
        "Name_en": "Macau",
        "Name_ch": "澳门",
        "lat": 22.1619078,
        "lng": 113.5351333,
        "확진자수": 10,
        "사망자수": 0,
        "무증상자": 0,
    }, {
        "Name": "홍콩",
        "Name_en": "Hong Kong",
        "Name_ch": "香港",
        "lat": 22.3529808,
        "lng": 113.9876162,
        "확진자수": 21,
        "사망자수": 1,
        "무증상자": 0,
    }, {
        "Name": "태국",
        "Name_en": "Thailand",
        "Name_ch": "泰国",
        "lat": 13.0110763,
        "lng": 96.9952628,
        "확진자수": 25,
        "사망자수": 0,
        "무증상자": 0,
    }, {
        "Name": "호주",
        "Name_en": "Australia",
        "Name_ch": "澳大利亚",
        "lat": -24.9936027,
        "lng": 115.2351577,
        "확진자수": 14,
        "사망자수": 0,
        "무증상자": 0,
    }, {
        "Name": "싱가포르",
        "Name_en": "Singapore",
        "Name_ch": "新加坡",
        "lat": 1.3143394,
        "lng": 103.7041659,
        "확진자수": 28,
        "사망자수": 0,
        "무증상자": 2,
    }, {
        "Name": "말레이시아",
        "Name_en": "Malaysia",
        "Name_ch": "马来西亚",
        "lat": 4.1389178,
        "lng": 105.1226078,
        "확진자수": 12,
        "사망자수": 0,
        "무증상자": 0,
    }, {
        "Name": "캄보디아",
        "Name_en": "Cambodia",
        "Name_ch": "柬埔寨",
        "lat": 12.1458696,
        "lng": 103.8594161,
        "확진자수": 1,
        "사망자수": 0,
        "무증상자": 0,
    }, {
        "Name": "베트남",
        "Name_en": "Vietnam",
        "Name_ch": "越南",
        "lat": 15.7583637,
        "lng": 101.4157502,
        "확진자수": 10,
        "사망자수": 0,
        "무증상자": 0,
    }, {
        "Name": "필리핀",
        "Name_en": "Philippines",
        "Name_ch": "菲律宾",
        "lat": 14.5965787,
        "lng": 120.9444545,
        "확진자수": 3,
        "사망자수": 1,
        "무증상자": 0,
    }, {
        "Name": "대만",
        "Name_en": "Taiwan",
        "Name_ch": "台湾",
        "lat": 25.0174719,
        "lng": 121.3662943,
        "확진자수": 13,
        "사망자수": 0,
        "무증상자": 0,
    }, {
        "Name": "스리랑카",
        "Name_en": "Sri Lanka",
        "Name_ch": "斯里兰卡",
        "lat": 7.8589214,
        "lng": 79.5850432,
        "확진자수": 1,
        "사망자수": 0,
        "무증상자": 0,
    }, {
        "Name": "독일",
        "Name_en": "Germany",
        "Name_ch": "德国",
        "lat": 51.0968735,
        "lng": 5.9694438,
        "확진자수": 12,
        "사망자수": 0,
        "무증상자": 2,
    }, {
        "Name": "인도",
        "Name_en": "India",
        "Name_ch": "印度",
        "lat": 28.5274228,
        "lng": 77.1387735,
        "확진자수": 3,
        "사망자수": 0,
        "무증상자": 0,
    }, {
        "Name": "아랍에미리트",
        "Name_en": "United Arab Emirates",
        "Name_ch": "阿拉伯联合酋长国",
        "lat": 24.3870789,
        "lng": 54.4185368,
        "확진자수": 5,
        "사망자수": 0,
        "무증상자": 0,
    }, {
        "Name": "중국",
        "Name_en": "China",
        "Name_ch": "中国",
        "lat": 39.9385466,
        "lng": 116.117281,
        "확진자수": 31161,
        "사망자수": 636,
        "무증상자": 0,
    }, {
        "Name": "일본",
        "Name_en": "Japan",
        "Name_ch": "日本",
        "lat": 34.6777642,
        "lng": 135.4160247,
        "확진자수": 45,
        "사망자수": 0,
        "무증상자": 4,
    }, {
        "Name": "한국",
        "Name_en": "Korea, Republic of",
        "Name_ch": "韩国",
        "lat": 37.5456299,
        "lng": 126.9540667,
        "확진자수": 24,
        "사망자수": 0,
        "무증상자": 0,
        "완치자": 2,
    }
];

// 선차트용 데이터 확진자수
var marker2 = {
    labels: ["1/24", "1/25", "1/26", "1/27", "1/28", "1/29", "1/30", "1/31", "2/1", "2/2", "2/3", "2/4", "2/5", "2/6","2/7"],
    data: [845, 1315, 2010, 2794, 4576, 6056, 7812, 9812, 11925, 14550, 17378, 20619, 24524, 28253, 31398],
    data2: [25, 41, 56, 80, 106, 132, 170, 213, 259, 304, 362, 426, 492, 565, 638]
}

// 선차트용 데이터
var 입도객현황 = {
    날짜: ["2/4", "2/5", "2/6"],
    내국인: [19209, 17633, 15873],
    외국인: [1866, 1285, 1247],
    중국인: [755, 156, 116]
}

// 제주지역선별진료소
var 제주지역선별진료소 = [{
        "이름": "제주대학교병원",
        "lat": "33.4670605",
        "lng": "126.5370226",
        "주소": "제주 제주시 아란13길 15",
        "전화번호": "064-717-1075"
    },
    {
        "이름": "한마음병원",
        "lat": "33.4962918",
        "lng": "126.5374979",
        "주소": "제주 제주시 연신로 52",
        "전화번호": "064-750-9000"
    },
    {
        "이름": "서귀포의료원",
        "lat": "33.254995",
        "lng": "126.5625628",
        "주소": "제주 서귀포시 장수로 47",
        "전화번호": "064-730-3000"
    },
    {
        "이름": "한국병원",
        "lat": "33.5002078",
        "lng": "126.5148722",
        "주소": "제주 제주시 서광로 193",
        "전화번호": "064-750-0000"
    },
    {
        "이름": "제주한라병원",
        "lat": "33.4899863",
        "lng": "126.4829032",
        "주소": "제주 제주시 도령로 65",
        "전화번호": "064-740-5975"
    },
    {
        "이름": "중앙병원",
        "lat": "33.4922645",
        "lng": "126.4685369",
        "주소": "제주 제주시 월랑로 91",
        "전화번호": "064-786-7000"
    },
    {
        "이름": "서귀포열린병원",
        "lat": "33.2544248",
        "lng": "126.5632242",
        "주소": "제주 서귀포시 일주동로 8638",
        "전화번호": "064-762-8001"
    }
];

// 업데이트 일시 데이터
var updateLog = {
  date: "2/6",
  time: "14:00"
};

// This is a bad way to copy, but for now it will suffice.
// 네이버 지도 API가 로드된 후 marker를 수정하기 때문에 일단 copy를 진행하지만 수정이 필요한 코드입니다.
var _marker = JSON.parse(JSON.stringify(marker));

// 테이블 데이터
var tableData = [{
    "순서" : "1",
    "국가" : "중국",
    "나이" : "35",
    "성별" : "여성",
    "입국일자" : "1/19",
    "확진일자" : "1/20",
    "감염차수" : "1",
    "접촉자" : "45",
    "이동경로" : "중국 후베이성 우한시에 거주하는 중국 국적 여성<br>19일 입국. 인천공항에서 격리<br>인천 동구 인천의료원에서 치료",
    "치료장소" : "인천의료원",
  }, {
    "순서" : "2",
    "국가" : "한국",
    "나이" : "55",
    "성별" : "남성",
    "입국일자" : "1/22",
    "확진일자" : "1/24",
    "감염차수" : "1",
    "접촉자" : "75",
    "이동경로" : "22일 저녁 김포공항 귀국(우한 출발 상하이 경유)<br>검역에서 발열 확인. 능동적 감시대상자로 분류<br>김포공항에서 택시로 자택 이동<br>이후 자택에만 있었음<br>23일 보건진료소에서 진료후 감염 확진자로 확인",
    "치료장소" : "서울 국립중앙의료원",
  }, {
    "순서" : "3",
    "국가" : "한국",
    "나이" : "54",
    "성별" : "남성",
    "입국일자" : "1/20",
    "확진일자" : "1/26",
    "감염차수" : "1",
    "접촉자" : "98",
    "이동경로" : "중국 후베이성 우한시 거주<br>1월 20일 일시 귀국(무증상 입국자)<br>22일 오후 1시 서울 강남 글로비 성형외과<br>한일관(압구정로)<br>본죽(도산대로)<br>호텔(호텔뉴브)숙박<br>23일 한강, 역삼, 대치<br>23일 편의점(GS 한강잠원 1호점)<br>강남구 역삼동과 대치동 일대 음식점<br>24일 일산 소재 본죽 (정발산점) <br>오후 4시 식사동 스타벅스 <br>저녁 일산 모친 자택, 명지 병원",
    "치료장소" : "일산 명지병원",
  }, {
    "순서" : "4",
    "국가" : "한국",
    "나이" : "55",
    "성별" : "남성",
    "입국일자" : "1/20",
    "확진일자" : "1/27",
    "감염차수" : "1",
    "접촉자" : "172",
    "이동경로" : "20일 우한발 직항편(16:25 KE882)이용 인천공항<br>공항버스(17:30경 8834번)이용<br>평택 송탄터미널<br>택시로 자택이동<br>21일 평택 365 연합의원<br>22일 ~ 24일 자택<br>25일 평택 365 연합의원<br>26일 보건소 선별진료",
    "치료장소" : "분당 서울대병원",
  }, {
    "순서" : "5",
    "국가" : "한국",
    "나이" : "33",
    "성별" : "남성",
    "입국일자" : "1/24",
    "확진일자" : "1/30",
    "감염차수" : "1",
    "접촉자" : "75",
    "이동경로" : "우한시 업무 차 방문<br>24일 우한시 인근 장사 공항에서 아시아나 OZ322 타고 귀국<br>26일 다이소 성신여대역점<br>11시경 지하철로 성동구 선녀보살(역술인)<br>지하철 이용 12시경 선호케어(마사지숍)<br>숙소 인근 이마트24, GS25, 식자재유통센터, 두꺼비마트<br>27일 오후 돈암동떡볶이, 두꺼비마트, 럭키마트<br>28일 성북구 예쁠레뷰티라인, 버스 이동<br>중랑구 가락홈마트,이가네 바지락칼국수<br>지하철 이용 강남구 와이즈웨딩<br>지하철로 자택이동<br>29일 부친 차량 이용 중랑구 보건소 검사 후 자택 귀가<br>30일 자택에서 서울의료원 이송",
    "치료장소" : "서울의료원",
  }, {
    "순서" : "6",
    "국가" : "한국",
    "나이" : "55",
    "성별" : "남성",
    "입국일자" : "-",
    "확진일자" : "1/30",
    "감염차수" : "2",
    "접촉자" : "25",
    "이동경로" : "22일 3번 확진자와 강남 음식점에서 식사26일 명륜교회 새벽,오전 예배<br>교회 식당 점심식사,오후 예배<br>저녁 가족과 종로구 일대 음식점 저녁식사 후 귀가<br>27∼29일 자택 자가 격리30일 자택에서 서울대병원으로 이송",
    "치료장소" : "서울대병원",
  }, {
    "순서" : "7",
    "국가" : "한국",
    "나이" : "28",
    "성별" : "남성",
    "입국일자" : "1/23",
    "확진일자" : "1/30",
    "감염차수" : "1",
    "접촉자" : "21",
    "이동경로" : "우한에서 청도 거쳐 23일 인천공항으로 귀국(22:20 청도항공 QW9901편)<br>26~28일 자택<br>29일 보건소 구급차량 이용 검사 후 구급차량 귀가<br>30일 자택에서 서울의료원 이송",
    "치료장소" : "서울의료원",
  }, {
    "순서" : "8",
    "국가" : "한국",
    "나이" : "62",
    "성별" : "여성",
    "입국일자" : "1/23",
    "확진일자" : "1/31",
    "감염차수" : "1",
    "접촉자" : "76",
    "이동경로" : "우한국제패션센터 한국관(더플레이스) 근무<br>* 이 장소는 3번째 확진자, 15 확진자와도 관련<br>7번 확진자(지인)와 23일 같은 비행기(옆좌석)로 입국<br>23일 우한에서 청도 거쳐(22:20 청도항공 QW9901) 인천 공항으로 귀국<br>아들 차량 이용 아들의 집으로 이동<br>25일 서초3동 풍미감자탕점심식사, 아들 차량 이용 자택(군산)으로 이동<br>군산 소재 음식점 저녁식사 후 귀가<br>26일 군산 월명동 아센사우나 (14:11~16:29),군산 참치본가<br>27일 군산 유남진 내과 내원 자차 이용 귀가<br>28일 군산의료원, 약국, 차량 귀가<br>29일 군산 문화동 우리떡갈비점심식사, 이마트 군산점<br>30일 익산 원광대병원 내원, 의사환자로 분류, 입원<br>31일 입원 중 확진 판정",
    "치료장소" : "원광대병원(익산)",
  }, {
    "순서" : "9",
    "국가" : "한국",
    "나이" : "28",
    "성별" : "여성",
    "입국일자" : "-",
    "확진일자" : "1/31",
    "감염차수" : "2",
    "접촉자" : "2",
    "이동경로" : "30일 5번째 환자 접촉자 통보 받고 자택<br>31일 서울의료원 이송",
    "치료장소" : "서울의료원",
  }, {
    "순서" : "10",
    "국가" : "한국",
    "나이" : "54",
    "성별" : "남성",
    "입국일자" : "-",
    "확진일자" : "1/31",
    "감염차수" : "3",
    "접촉자" : "91",
    "이동경로" : "* 6번째 환자 가족(아내)<br>30일 점심 자차 이용 일산 메종드아이디헤어백석벨라시타점, 자택 귀가<br>31일 서울대병원 이송<br>",
    "치료장소" : "서울대병원",
  }, {
    "순서" : "11",
    "국가" : "한국",
    "나이" : "25",
    "성별" : "남성",
    "입국일자" : "-",
    "확진일자" : "1/31",
    "감염차수" : "3",
    "접촉자" : "-",
    "이동경로" : "* 6번째 환자 가족(아들)<br>검역(능동감시)<br>치료중",
    "치료장소" : "서울대병원",
  }, {
    "순서" : "12",
    "국가" : "중국",
    "나이" : "48",
    "성별" : "남성",
    "입국일자" : "1/19",
    "확진일자" : "2/1",
    "감염차수" : "1",
    "접촉자" : "138",
    "이동경로" : "19일 일본에서 국내로 귀국<br>20일 택시를 이용 15시 서울 중구 소재 음식점을 방문. 다시 택시를 타고 남대문 쇼핑<br>19시20분 CGV 부천역점 8층5관 E5~6 영화 '백두산'<br>21일 지하철과 택시로 12시 인천출입국사무소, 다시 택시로 인천시 남구 친구 집을 방문<br>22일 9시 부천시 약국 방문, 지하철로 서울역 이동, 편의점 이용, 강릉행 KTX(11:01-12:59)<br>14시 강릉소재 음식점을 이용, 택시로 16시 강릉 썬크루즈리조트 이동, 17시 커피숍, 18시 음식점, 19시 숙소 복귀<br>23일 서울역행 KTX(12:30-2:27) KTX로 오후 2시27분 서울역. 지하철로 부천속내과)를 방문<br>24일 지하철로 수원역, 수원역에서 택시 타고 친척집을 방문. 버스를 타고 경기도 군포 소재 친척집<br>25일 군포 친척집에서 택시로 군포 더건강한내과 방문. 현대약국, 지하철로 귀가.<br>26일 CGV부천역점 재방문. 17시30분 '남산의부장들'을 8층 4관 좌석번호 E13~14에서 관람.<br>27일 지하철과 택시로 서울시 중구 소재 음식점을 방문<br>28일 14시 부천속내과, 서전약국.<br>29일엔 종일 집. 30일 10시 부천보건소 선별진료소를 방문,다시 택시를 타고 귀가.<br>13시 순천향대학교부속부천병원,17시 자가 격리가 시작.<br>31일엔 종일 집. 2월1일 확진 판정 받고 분당서울대병원으로 이송<br>*접촉자는 현재까지 138명으로 확인, 이 중 1명이 확진(가족, 14번째 환자)<br>나머지 접촉자는 자가격리 등 조치 중",
    "치료장소" : "분당 서울대병원",
  }, {
    "순서" : "13",
    "국가" : "한국",
    "나이" : "28",
    "성별" : "남성",
    "입국일자" : "1/31",
    "확진일자" : "2/2",
    "감염차수" : "1",
    "접촉자" : "확인중",
    "이동경로" : "31일 임시항공편(1차)으로 들어온 귀국한 입국 교민 368명 중 1명<br>국립중앙의료원에 격리조치<br>*입국 시 증상을 호소했던 18명을 포함 나머지 1차 입국 교민 367명은 모두 음성<br>* 2월 1일 임시항공편으로 귀국한 2차 입국교민도 전수 진단검사를 진행중<br>우선 시행된 유증상자 7명의 검사 결과는 모두 음성",
    "치료장소" : "국립중앙의료원",
  }, {
    "순서" : "14",
    "국가" : "중국",
    "나이" : "40",
    "성별" : "여성",
    "입국일자" : "-",
    "확진일자" : "2/2",
    "감염차수" : "3",
    "접촉자" : "-",
    "이동경로" : "* 12번째 환자 가족<br>자가 격리 중이었음<br>역학 조사 진행 중",
    "치료장소" : "분당 서울대병원",
  }, {
    "순서" : "15",
    "국가" : "한국",
    "나이" : "43",
    "성별" : "남성",
    "입국일자" : "1/20",
    "확진일자" : "2/2",
    "감염차수" : "1",
    "접촉자" : "12",
    "이동경로" : "20일 입국(16:25 KE882 우한 -> 인천)<br>* 4번 환자와 같은 비행기를 탑승하여 능동 감시 중이던 대상자<br>1일 증상을 호소해 실시한 검사 결과 확진<br>* 수원시 장안구 거주",
    "치료장소" : "국군수도병원",
  }, {
    "순서" : "16",
    "국가" : "한국",
    "나이" : "42",
    "성별" : "여성",
    "입국일자" : "1/19",
    "확진일자" : "2/4",
    "감염차수" : "1",
    "접촉자" : "확인중",
    "이동경로" : "19일 태국에서 입국<br>25일 저녁 증상 발생, 2일까지 치료받았으나 호전되지 않음<br>3일 전남대학교 병원에 내원, 격리조치",
    "치료장소" : "전남대병원",
  }]

import React, { useEffect, useMemo, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { ceo, medicalIllustrators as artists, alumniIllustrators } from '../data/team';

function WatermarkedImage({ src, alt, watermarkText }) {
  const canvasRef = useRef(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      // 부모 크기에 맞게 캔버스 크기 조정, 부모가 0x0이면 원본 이미지 크기로 fallback
      const parent = canvas.parentElement;
      let maxW = img.width, maxH = img.height;
      if (parent) {
        const parentRect = parent.getBoundingClientRect();
        if (parentRect.width > 0 && parentRect.height > 0) {
          const scale = Math.min(parentRect.width / img.width, parentRect.height / img.height, 1);
          maxW = img.width * scale;
          maxH = img.height * scale;
        }
      }
      canvas.width = maxW;
      canvas.height = maxH;
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, maxW, maxH);
      ctx.drawImage(img, 0, 0, maxW, maxH);

      // 워터마크 폰트 크기 (이미지 너비의 8% 또는 최소 24px)
      const fontSize = Math.max(Math.floor(maxW * 0.08), 24);
      ctx.font = `bold ${fontSize}px Arial`;
      ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
      ctx.strokeStyle = 'rgba(0, 0, 0, 0.2)';
      ctx.lineWidth = 2;
      const metrics = ctx.measureText(watermarkText);
      const textX = (maxW - metrics.width) / 2;
      const textY = maxH / 2;
      ctx.strokeText(watermarkText, textX, textY);
      ctx.fillText(watermarkText, textX, textY);
      setImageLoaded(true);
    };
    img.onerror = () => setImageLoaded(true);
    img.src = src;
  }, [src, watermarkText]);

  return (
    <canvas
      ref={canvasRef}
      className="object-contain w-full h-full max-w-full max-h-full"
      style={{ display: imageLoaded ? 'block' : 'none' }}
    />
  );
}

export const projects = [
                                    {
                                      id: 188,
                                      title: "SLN, BCS Figure",
                                      titleKo: "SLN, BCS Figure",
                                      category: ["Figure", "Surgical Illustration"],
                                      categoryKo: ["Figure", "수술 일러스트"],
                                      tags: ["figure", "surgical-illustration"],
                                      artists: ["cheolhee-han"],
                                      year: "2023.07",
                                      image: "https://res.cloudinary.com/dmktvk7fw/image/upload/v1769683868/1_preOP_jg3ljx.jpg",
                                      images: [
                                        "https://res.cloudinary.com/dmktvk7fw/image/upload/v1769683868/1_preOP_jg3ljx.jpg",
                                        "https://res.cloudinary.com/dmktvk7fw/image/upload/v1769683868/2_localization_h81uhv.jpg",
                                        "https://res.cloudinary.com/dmktvk7fw/image/upload/v1769683868/3_injection_qmj7zd.jpg",
                                        "https://res.cloudinary.com/dmktvk7fw/image/upload/v1769683874/4_incision_ztxfev.jpg",
                                        "https://res.cloudinary.com/dmktvk7fw/image/upload/v1769683874/4_incision_ztxfev.jpg",
                                        "https://res.cloudinary.com/dmktvk7fw/image/upload/v1769683868/6_excisionLine_lyrzfx.jpg",
                                        "https://res.cloudinary.com/dmktvk7fw/image/upload/v1769683866/7_tumorExcision_vgurf5.jpg",
                                        "https://res.cloudinary.com/dmktvk7fw/image/upload/v1769683866/8_ADM_xpfhyv.jpg",
                                        "https://res.cloudinary.com/dmktvk7fw/image/upload/v1769683867/9_suture1_dofrrn.jpg",
                                        "https://res.cloudinary.com/dmktvk7fw/image/upload/v1769683867/10_suture2_ce5liq.jpg",
                                        "https://res.cloudinary.com/dmktvk7fw/image/upload/v1769683993/11_lateralview_sample4_ojhh4x.jpg",
                                        "https://res.cloudinary.com/dmktvk7fw/image/upload/v1769684006/SLN_sample7_final_vlwds1.jpg"
                                      ],
                                      video: null,
                                      descKo: "서영진 교수님 의뢰(가톨릭대학교 성빈센트 유방외과), SLN, BCS figure.",
                                      descEn: "SLN, BCS figure for Prof. Youngjin Seo (St. Vincent's Hospital, Catholic University of Korea, Breast Surgery).",
                                      client: "서영진 교수님 (가톨릭대학교 성빈센트 유방외과)",
                                      clientEn: "Prof. Youngjin Seo, St. Vincent's Hospital, Catholic University of Korea, Breast Surgery",
                                    },
                                  {
                                    id: 50,
                                    title: "Aortic Research Society Logo",
                                    titleKo: "대한대동맥연구회 로고디자인",
                                    category: ["Logo Design"],
                                    categoryKo: ["로고디자인"],
                                    tags: ["logo-design", "medical-logo"],
                                    artists: ["jeah-kim"],
                                    year: "2023.05",
                                    image: "https://res.cloudinary.com/dmktvk7fw/image/upload/v1769683663/50_wwqy8m.png",
                                    images: [
                                      "https://res.cloudinary.com/dmktvk7fw/image/upload/v1769683663/50_wwqy8m.png"
                                    ],
                                    video: null,
                                    descKo: "대한대동맥연구회 로고디자인.",
                                    descEn: "Logo design for Korean Aortic Research Society.",
                                    client: "대한대동맥연구회",
                                    clientEn: "Korean Aortic Research Society",
                                  },
                                {
                                  id: 136,
                                  title: "TICGLE",
                                  titleKo: "TICGLE",
                                  category: ["Surgical Illustration", "Figure"],
                                  categoryKo: ["수술 일러스트", "Figure"],
                                  tags: ["surgical-illustration", "figure"],
                                  artists: ["jinsoo-rhu"],
                                  year: "2020.01",
                                  image: "https://res.cloudinary.com/dmktvk7fw/image/upload/v1769536885/136-1_gkwcvi.jpg",
                                  images: [
                                    "https://res.cloudinary.com/dmktvk7fw/image/upload/v1769536885/136-1_gkwcvi.jpg",
                                    "https://res.cloudinary.com/dmktvk7fw/image/upload/v1769536885/136-2_nqvszm.png",
                                    "https://res.cloudinary.com/dmktvk7fw/image/upload/v1769536884/136-3_fz6bui.png"
                                  ],
                                  video: null,
                                  descKo: "TICGLE 수술 일러스트 및 Figure.",
                                  descEn: "Transplant Surgery: TICGLE.",
                                  client: "삼성서울병원 이식외과",
                                  clientEn: "Samsung Medical Center, Transplant Surgery",
                                },
                              {
                                id: 134,
                                title: "Nephron Exosome",
                                titleKo: "Nephron Exosome",
                                category: "Figure",
                                categoryKo: "Figure",
                                tags: ["medical-illustration"],
                                artists: ["jinsoo-rhu"],
                                year: "2020.01",
                                image: "https://res.cloudinary.com/dmktvk7fw/image/upload/v1769536684/134-1_b2aiey.jpg",
                                images: [
                                  "https://res.cloudinary.com/dmktvk7fw/image/upload/v1769536684/134-1_b2aiey.jpg",
                                  "https://res.cloudinary.com/dmktvk7fw/image/upload/v1769536682/134-2_ccfdcn.png"
                                ],
                                video: null,
                                descKo: "서울순천향 신장내과 의뢰, Nephron exosome 논문 Figure.",
                                descEn: "Figure of nephron exosome for Soonchunhyang University Seoul Hospital, Nephrology.",
                                client: "서울순천향 신장내과",
                                clientEn: "Soonchunhyang University Seoul Hospital, Nephrology",
                              },
                            {
                              id: 133,
                              title: "Arachnoid Trabeculae",
                              titleKo: "Arachnoid Trabeculae",
                              category: "Medical Illustration",
                              categoryKo: "메디컬 일러스트",
                              tags: ["medical-illustration"],
                              artists: ["jinsoo-rhu"],
                              year: "2020.01",
                              image: "https://res.cloudinary.com/dmktvk7fw/image/upload/v1769536492/133_wpgm7c.jpg",
                              images: [
                                "https://res.cloudinary.com/dmktvk7fw/image/upload/v1769536492/133_wpgm7c.jpg"
                              ],
                              video: null,
                              descKo: "한양대 신경외과 의뢰, Arachnoid trabeculae 메디컬 일러스트.",
                              descEn: "Medical illustration of arachnoid trabeculae for Hanyang University Neurosurgery.",
                              client: "한양대 신경외과",
                              clientEn: "Hanyang University Neurosurgery",
                            },
                          {
                            id: 106,
                            title: "HBP-Ampullectomy, PJ anastomosis",
                            titleKo: "HBP-Ampullectomy, PJ anastomosis",
                            category: "Surgical Illustration",
                            categoryKo: "수술 일러스트",
                            tags: ["surgical-illustration"],
                            artists: ["jinsoo-rhu"],
                            year: "2020.06",
                            image: "https://res.cloudinary.com/dmktvk7fw/image/upload/v1769536259/106-1_uh6e20.jpg",
                            images: [
                              "https://res.cloudinary.com/dmktvk7fw/image/upload/v1769536259/106-1_uh6e20.jpg",
                              "https://res.cloudinary.com/dmktvk7fw/image/upload/v1769536259/106-2_qtesvz.jpg"
                            ],
                            video: null,
                            descKo: "한양대 의뢰, HBP-Ampullectomy, PJ anastomosis 수술 일러스트.",
                            descEn: "Surgical illustration for Hanyang University: HBP-Ampullectomy, PJ anastomosis.",
                            client: "한양대",
                            clientEn: "Hanyang University",
                          },
                        {
                          id: 9,
                          title: "Laparo Esophagojejunstomy",
                          titleKo: "Laparo Esophagojejunstomy",
                          category: ["Surgical Illustration", "Figure"],
                          categoryKo: ["수술 일러스트", "Figure"],
                          tags: ["surgical-illustration", "figure"],
                          artists: ["miseung-kim"],
                          year: "2021.09",
                          image: "https://res.cloudinary.com/dmktvk7fw/image/upload/v1769536066/9-1_ujdkv9.jpg",
                          images: [
                            "https://res.cloudinary.com/dmktvk7fw/image/upload/v1769536066/9-1_ujdkv9.jpg",
                            "https://res.cloudinary.com/dmktvk7fw/image/upload/v1769536066/9-2_cmxiad.jpg",
                            "https://res.cloudinary.com/dmktvk7fw/image/upload/v1769536066/9-3_tksc0w.jpg"
                          ],
                          video: null,
                          descKo: "서울대 외과 의뢰, 논문용 수술 일러스트. 논문명: Postoperative morbidity and quality of life between totally laparoscopic total gastrectomy and laparoscopy-assisted total gastrectomy: A propensity-score matched analysis",
                          descEn: "Surgical illustration for Seoul National University Department of Surgery, for the paper: Postoperative morbidity and quality of life between totally laparoscopic total gastrectomy and laparoscopy-assisted total gastrectomy: A propensity-score matched analysis.",
                          client: "서울대 외과",
                          clientEn: "Seoul National University Department of Surgery",
                          paperTitle: "Postoperative morbidity and quality of life between totally laparoscopic total gastrectomy and laparoscopy-assisted total gastrectomy: A propensity-score matched analysis",
                          doi: "https://doi.org/10.1186/s12885-021-08744-1",
                        },
                      {
                        id: 20,
                        title: "Aortic Surgery",
                        titleKo: "대동맥수술",
                        category: "Medical Illustration",
                        categoryKo: "의학 일러스트",
                        tags: ["medical-illustration"],
                        artists: ["miseung-kim"],
                        year: "2020.08",
                        image: "https://res.cloudinary.com/dmktvk7fw/image/upload/v1769535643/20_r3ty2j.jpg",
                        images: [
                          "https://res.cloudinary.com/dmktvk7fw/image/upload/v1769535643/20_r3ty2j.jpg"
                        ],
                        video: null,
                        descKo: "대동맥수술 메디컬 일러스트.",
                        descEn: "Medical illustration of aortic surgery.",
                        client: "양산부대 흉부외과",
                        clientEn: "Yangsan Armed Forces Thoracic Surgery",
                      },
                    {
                      id: 151,
                      title: "Thyroid nodule - C6 axial",
                      titleKo: "Thyroid nodule - C6 axial",
                      category: "Medical Illustration",
                      categoryKo: "의학 일러스트",
                      tags: ["medical-illustration"],
                      artists: ["soyoung-lim"],
                      year: "2023.03",
                      image: "https://res.cloudinary.com/dmktvk7fw/image/upload/v1769534917/151_vt4ym3.jpg",
                      images: [
                        "https://res.cloudinary.com/dmktvk7fw/image/upload/v1769534917/151_vt4ym3.jpg"
                      ],
                      video: null,
                      descKo: "갑상선 결절(C6 축면) 메디컬 일러스트.",
                      descEn: "Medical illustration of a thyroid nodule (C6 axial view).",
                      client: null,
                      clientEn: null,
                    },
                  {
                    id: 178,
                    title: "Hanyang University Surgery Logo Design",
                    titleKo: "한양대외과 로고디자인",
                    category: "Logo Design",
                    categoryKo: "로고 디자인",
                    tags: ["logo-design"],
                    artists: ["soyoung-lim"],
                    year: "2022.08",
                    image: "https://res.cloudinary.com/dmktvk7fw/image/upload/v1769534917/178-1_i4vdny.jpg",
                    images: [
                      "https://res.cloudinary.com/dmktvk7fw/image/upload/v1769534917/178-1_i4vdny.jpg",
                      "https://res.cloudinary.com/dmktvk7fw/image/upload/v1769534917/178-2_kfmyed.jpg",
                      "https://res.cloudinary.com/dmktvk7fw/image/upload/v1769534917/178-3_uhcccj.jpg"
                    ],
                    video: null,
                    descKo: "한양대를 상징하는 사자, 의학을 상징하는 아스클레피오스의 지팡이(rod of Asclepius), 그리고 외과를 상징하는 메스를 조합하여 디자인한 한양대학교 외과 로고입니다.",
                    descEn: "This logo for Hanyang University Department of Surgery combines a lion symbolizing Hanyang University, the rod of Asclepius representing medicine, and a scalpel to signify surgery.",
                    client: "한양대학교 외과",
                    clientEn: "Hanyang University Department of Surgery",
                  },
                {
                  id: 182,
                  title: "Cardiac ultrasound exam figure",
                  titleKo: "심장 초음파 검사 figure",
                  category: "Figure",
                  categoryKo: "Figure",
                  tags: ["figure"],
                  artists: ["jeongin-choi"],
                  year: "2023.10",
                  image: "https://res.cloudinary.com/dmktvk7fw/image/upload/v1769534176/182_km0ca5.jpg",
                  images: [
                    "https://res.cloudinary.com/dmktvk7fw/image/upload/v1769534176/182_km0ca5.jpg"
                  ],
                  video: null,
                  descKo: "심장초음파검사를 시행하게 되면 visual analysis (qualitatative analysis)와 manual measurement를 통한 평가 (quantitative analysis)를 모두 시행하여햐하는데 초음파 검사 한건을 하기 위해서는 이 두 종류의 평가를 십여변, 많게는 수십번 반복해야한다는 것을 강조하기 위함을 화살 표를 추가하여 보여준다.",
                  descEn: "When performing a cardiac ultrasound, both visual analysis (qualitative analysis) and manual measurement-based evaluation (quantitative analysis) must be conducted. To emphasize this point, arrows are added in the illustration to show that performing a single ultrasound exam requires repeating these two types of evaluations multiple times, sometimes tens or even dozens of times. This visual representation helps highlight the repetitive nature of the process in a clear and intuitive way.",
                  client: "분당서울대학교병원 순환기내과 윤연이 교수",
                  clientEn: "Prof. Yeon Yi Yoon, Division of Cardiology, Seoul National University Bundang Hospital",
                },
              {
                id: 184,
                title: "ASDN kidney figure",
                titleKo: "ASDN kidney figure",
                category: ["Figure", "Graphical Abstract"],
                categoryKo: ["Figure", "Graphical Abstract"],
                tags: ["figure", "graphical-abstract"],
                artists: ["jeongin-choi"],
                year: "2023.10",
                image: "https://res.cloudinary.com/dmktvk7fw/image/upload/v1769532954/184-1_jzwpih.jpg",
                images: [
                  "https://res.cloudinary.com/dmktvk7fw/image/upload/v1769532954/184-1_jzwpih.jpg",
                  "https://res.cloudinary.com/dmktvk7fw/image/upload/v1769532956/184-2_uvjngq.jpg",
                  "https://res.cloudinary.com/dmktvk7fw/image/upload/v1769532956/184-3_jotvi5.jpg"
                ],
                video: null,
                descKo: "저나트륨 고칼륨 식사가 고혈압과 심혈관계 질환에 미치는 영향에 대한 일러스트.",
                descEn: "A figure that summarizes the current understanding of renal handling physiology of potassium (K+) and provides an integrated perspective on the renal response to potassium depletion caused by dietary potassium (K+) restriction.",
                client: "한양대학교 김병식 교수",
                clientEn: "Prof. Byung Sik Kim, Hanyang University",
              },
            {
              id: 191,
              title: "Infiltrative Lesions of the Thyroid: Benign vs. Malignant",
              titleKo: "갑상샘 침윤성 병변: 양성 대 악성",
              category: "Figure",
              categoryKo: "Figure",
              tags: ["figure"],
              artists: ["hyejeong-hong"],
              year: "2024.02",
              image: "https://res.cloudinary.com/dmktvk7fw/image/upload/v1769532505/191_enfhre.jpg",
              images: [
                "https://res.cloudinary.com/dmktvk7fw/image/upload/v1769532505/191_enfhre.jpg"
              ],
              video: null,
              descKo: "갑상선 내부에 침윤성 병변이 나타난 양상(좌: 양성, 우: 악성)을 비교한 Figure 일러스트. 좌측은 benign하게 thyroid 내부에 infiltration lesion이 보이고, 우측은 malignancy스럽게(무시무시하게) infiltration lesion이 표현됨.",
              descEn: "A figure illustration comparing infiltrative lesions of the thyroid: the left shows a benign-appearing infiltration within the thyroid, while the right depicts a malignant, aggressive infiltration pattern.",
              client: "고려대학교 안암병원 영상의학과 조교수 신재호",
              clientEn: "Prof. Jaeho Shin, Department of Radiology, Korea University Anam Hospital",
            },
          {
            id: 194,
            title: "Duodenoduodenostomy for duodenal obstruction",
            titleKo: "십이지장 폐쇄에 따른 십이지장 문합술",
            category: "Surgical Illustration",
            categoryKo: "수술 일러스트",
            tags: ["surgical-illustration"],
            artists: ["haeun-kim"],
            year: "2025.03",
            image: "https://res.cloudinary.com/dmktvk7fw/image/upload/v1769532269/194_p6exfa.png",
            images: [
              "https://res.cloudinary.com/dmktvk7fw/image/upload/v1769532269/194_p6exfa.png"
            ],
            video: null,
            descKo: "십이지장 폐쇄 위치에 따른 십이지장 문합술 방법에 대해 2D 일러스트로 표현하였다.",
            descEn: "2D illustrations of duodenoduodenostomy techniques according to the site of duodenal obstruction.",
            client: "삼성서울병원 이상훈 교수",
            clientEn: "Prof. Sanghoon Lee, Samsung Medical Center",
          },
        {
          id: 195,
          title: "Anatomical Layers of the Temporalis Muscle Fascia in a Postauricular Surgical View",
          titleKo: "이비인후과 관련 수술",
          category: "Surgical Illustration",
          categoryKo: "수술 일러스트",
          tags: ["surgical-illustration"],
          artists: ["haeun-kim"],
          year: "2025.08",
          image: "https://res.cloudinary.com/dmktvk7fw/image/upload/v1769531645/195_xvbg3k.png",
          images: [
            "https://res.cloudinary.com/dmktvk7fw/image/upload/v1769531645/195_xvbg3k.png"
          ],
          video: null,
          descKo: "귀 뒤쪽으로 접근해서 Temporalis muscle 의 fascia 를 떼는 그림이다. 가장 superficial 하게 superficial temporalis fascia 가 있고, 그 아래에 deep temporalis fascia 가 있고, 마지막 층에 temporalis muscle 이 있는 구조적 특징을 구분하기 쉽게 표현한 2D 일러스트이다.",
          descEn: "A 2D illustration depicting the harvesting of temporalis muscle fascia via a postauricular approach. The anatomical layers—including the superficial temporal fascia, the underlying deep temporal fascia, and the temporalis muscle—are clearly delineated for ease of structural identification.",
          client: null,
          clientEn: null,
        },
      {
        id: 186,
        title: "Minimally Invasive Cardiac Surgery",
        titleKo: "Minimally Invasive Cardiac Surgery",
        category: "Surgical Illustration",
        categoryKo: "수술 일러스트",
        tags: ["surgical-illustration"],
        artists: ["jeongin-choi"],
        year: "2023.05",
        image: "https://res.cloudinary.com/dmktvk7fw/image/upload/v1769530897/186_izdtqk.jpg",
        images: [
          "https://res.cloudinary.com/dmktvk7fw/image/upload/v1769530897/186_izdtqk.jpg"
        ],
        video: null,
        descEn: "An illustration showing the incision for heart surgery and the scope being inserted.",
        descKo: "심장수술의 인시젼과 스콥이 들어간 그림.",
        client: "용인세브란스 흉부외과 조교수 김완기",
        clientEn: "Yongin Severance Thoracic Surgery, Prof. Wanki Kim",
      },
    {
      id: 123,
      title: "L-RPS",
      titleKo: "L-RPS",
      category: "Figure",
      categoryKo: "Figure",
      tags: ["figure"],
      artists: ["jinsoo-rhu"],
      year: "2020.01",
      image: "https://res.cloudinary.com/dmktvk7fw/image/upload/v1769530053/123-1_ap34h0.png",
      images: [
        "https://res.cloudinary.com/dmktvk7fw/image/upload/v1769530053/123-1_ap34h0.png",
        "https://res.cloudinary.com/dmktvk7fw/image/upload/v1769530051/123-2_khqgq5.png",
        "https://res.cloudinary.com/dmktvk7fw/image/upload/v1769530050/123-3_mc3q8q.png"
      ],
      video: null,
      descEn: "Figure illustration for Samsung Medical Center.",
      descKo: "삼성서울병원 의뢰 Figure 일러스트.",
      client: "삼성서울병원",
      clientEn: "Samsung Medical Center",
    },
  {
    id: 12,
    title: "Pediatric allergy reaction illustration for the Pediatric Society",
    titleKo: "소아과학회-소아알러지반응",
    category: ["Medical Illustration", "Infographic"],
    categoryKo: ["의학 일러스트","인포그래픽"],
    tags: ["medical-illustration", "infographic"],
    artists: ["miseung-kim"],
    year: "2020.02",
    image: "https://res.cloudinary.com/dmktvk7fw/image/upload/v1769526582/12_hqurzd.jpg",
    images: [
      "https://res.cloudinary.com/dmktvk7fw/image/upload/v1769526582/12_hqurzd.jpg"
    ],
    video: null,
    descEn: "Pediatric allergy reaction illustration for the Pediatric Society.",
    descKo: "소아과학회 의뢰 소아 알러지 반응 일러스트.",
    client: "소아과학회",
    clientEn: "The Korean Pediatric Society",
  },
   {
     id: 155,
     title: "Screening Flowchart",
     titleKo: "스크리닝 플로우차트",
     category: ["Figure", "Flowchart", "Graphical Abstract"],
     categoryKo: ["Figure",  "플로우차트", "Graphical Abstract"],
     tags: ["figure", "flowchart", "graphical-abstract"],
     artists: ["soyoung-lim"],
     year: "2022.10",
     image: "https://res.cloudinary.com/dmktvk7fw/image/upload/v1769524181/155_gwlo4b.jpg",
     images: [
       "https://res.cloudinary.com/dmktvk7fw/image/upload/v1769524181/155_gwlo4b.jpg"
     ],
     video: null,
     descEn: "work period: Oct 31 – Dec 16 (about 1.5 months).",
     descKo: "작업기간: 10월 31일 – 12월 16일 (약 1.5개월)",
     client: "분당서울대병원",
     clientEn: "Seoul National University Bundang Hospital",
   },
   
];
 
export default function ProjectGrid({ lang, artistFilter = null }) {
  const isKo = lang === 'ko';
  const [selected, setSelected] = useState(null);
  const [activeTag, setActiveTag] = useState('all');
  const [activeArtist, setActiveArtist] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);

  // 모달에서 키보드 좌우 화살표로 이미지 넘기기
  useEffect(() => {
    if (!selected || !(selected.images && selected.images.length > 1)) return;
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        handlePrevImage();
      } else if (e.key === 'ArrowRight') {
        handleNextImage();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selected, imageIndex]);

  useEffect(() => {
    setActiveArtist(artistFilter || null);
    // Reset tag filter when a specific artist is selected from outside
    if (artistFilter) {
      setActiveTag('all');
    }
  }, [artistFilter]);

  const closeModal = () => {
    setSelected(null);
    setImageIndex(0);
  };

  const handlePrevImage = () => {
    if (selected && selected.images && selected.images.length > 0) {
      setImageIndex((prev) => (prev === 0 ? selected.images.length - 1 : prev - 1));
    }
  };

  const handleNextImage = () => {
    if (selected && selected.images && selected.images.length > 0) {
      setImageIndex((prev) => (prev === selected.images.length - 1 ? 0 : prev + 1));
    }
  };

  const tagLabels = useMemo(() => ({
    en: {
      all: 'All',
      'surgical-illustration': 'Surgical Illustration',
      'scientific-illustration': 'Scientific Illustration',
      '2d-3d-animation': '2D/3D Animation',
      'figure': 'Figure',
      'logo-design': 'Logo Design',
      'flowchart': 'Flowchart',
      poster: 'Poster',
      infographic: 'Infographic',
      diagrams: 'Diagrams',
      editorial: 'Editorial'
    },
    ko: {
      all: '전체',
      'surgical-illustration': '수술 일러스트',
      'scientific-illustration': '과학 일러스트',
      '2d-3d-animation': '2D/3D 애니메이션',
      'figure': 'Figure',
      'logo-design': '로고 디자인',
      'medical-illustration': '메디컬 일러스트',
      'graphical-abstract': 'Graphical Abstract',
      'flowchart': '플로우차트',
      poster: '포스터',
      infographic: '인포그래픽',
      diagrams: '다이어그램',
      editorial: '에디토리얼'
    }
  }), []);

  // 전체보기일 때만 랜덤 정렬
  function shuffle(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
  const filteredByTag = activeTag === 'all'
    ? shuffle(projects)
    : projects.filter((p) => p.tags.includes(activeTag));

  const alumniIds = useMemo(() => alumniIllustrators.map((a) => a.id), []);

  const visibleProjects = activeArtist === 'alumni-group'
    ? filteredByTag.filter((p) => p.artists && p.artists.some((id) => alumniIds.includes(id)))
    : activeArtist
      ? filteredByTag.filter((p) => p.artists && p.artists.includes(activeArtist))
      : filteredByTag;

  const artistOptions = useMemo(() => {
    const list = [ceo, ...artists, ...alumniIllustrators];
    return [...list].sort((a, b) =>
      isKo
        ? a.nameKo.localeCompare(b.nameKo, 'ko')
        : a.name.localeCompare(b.name, 'en')
    );
  }, [isKo]);

  return (
    <section className="py-24 px-6 md:px-12 bg-white text-black">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col gap-6 mb-12 md:mb-16">
          <div className="flex items-end justify-between border-b border-black/10 pb-6">
            <h2 className="text-5xl md:text-7xl font-medium tracking-tighter">
              Projects.
            </h2>
            <span className="hidden md:block font-mono text-sm">( {visibleProjects.length.toString().padStart(2, '0')} )</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {['all', ...Array.from(new Set(projects.flatMap((p) => p.tags)))].map((tag) => {
              // dash(-)를 띄어쓰기로, 각 단어 첫 글자 대문자로 변환
              const formatTag = (str) => str === 'all'
                ? (isKo ? '전체' : 'All')
                : (isKo
                  ? (tagLabels.ko[tag] || tag)
                  : (tagLabels.en[tag] || str.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()))
                );
              return (
                <button
                  key={tag}
                  onClick={() => setActiveTag(tag)}
                  className={`px-3 py-2 rounded-full text-sm border transition-colors ${
                    activeTag === tag
                      ? 'bg-black text-white border-black'
                      : 'bg-white text-black border-neutral-200 hover:border-black'
                  }`}
                >
                  {formatTag(tag)}
                </button>
              );
            })}
          </div>

          <div className="flex flex-col gap-2">
            <div className="text-sm text-neutral-500 font-medium">{isKo ? '일러스트레이터' : 'Illustrators'}</div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveArtist(null)}
                className={`px-3 py-2 rounded-full text-sm border transition-colors ${
                  !activeArtist
                    ? 'bg-black text-white border-black'
                    : 'bg-white text-black border-neutral-200 hover:border-black'
                }`}
              >
                {isKo ? '전체' : 'All'}
              </button>
              <button
                onClick={() => setActiveArtist('alumni-group')}
                className={`px-3 py-2 rounded-full text-sm border transition-colors ${
                  activeArtist === 'alumni-group'
                    ? 'bg-black text-white border-black'
                    : 'bg-white text-black border-neutral-200 hover:border-black'
                }`}
              >
                Alumni
              </button>
              {[ceo, ...artists].map((artist) => (
                <button
                  key={artist.id}
                  onClick={() => setActiveArtist(artist.id)}
                  className={`px-3 py-2 rounded-full text-sm border transition-colors ${
                    activeArtist === artist.id
                      ? 'bg-primary text-white border-primary'
                      : 'bg-white text-black border-neutral-200 hover:border-primary'
                  }`}
                >
                  {isKo ? artist.nameKo : artist.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {visibleProjects.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer cursor-scale"
              onClick={() => setSelected(project)}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100 rounded-sm mb-6">
                <img
                  src={
                    project.image.includes('cloudinary.com')
                      ? project.image.replace('/upload/', '/upload/q_auto,f_auto,w_600,h_450,c_limit/')
                      : project.image
                  }
                  alt={
                    isKo
                      ? `메디컬 일러스트, 의료 일러스트레이션, 의학 그림 | ${project.titleKo} | Gleedoc 포트폴리오`
                      : `Medical Illustration, Medical Art, Healthcare Visualization | ${project.title} | Gleedoc Portfolio`
                  }
                  className="w-full h-full object-contain transition-transform duration-700 ease-out group-hover:scale-105 bg-white"
                  loading="lazy"
                  style={{ objectFit: 'contain' }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                <div className="absolute top-4 right-4 bg-white rounded-full p-2 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <ArrowUpRight size={20} />
                </div>
              </div>
              
              <div className="flex justify-between items-start border-t border-black/10 pt-4">
                <div>
                  <h3 className="text-2xl font-medium tracking-tight mb-1">
                    {isKo ? project.titleKo : project.title}
                  </h3>
                  <p className="text-neutral-500">
                    {(() => {
                      const cat = isKo ? project.categoryKo : project.category;
                      if (Array.isArray(cat)) return cat.join(' / ');
                      return cat;
                    })()}
                  </p>
                </div>
                <span className="font-mono text-sm text-neutral-400">{project.year}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="bg-white text-black w-[85vw] max-w-[1100px] max-h-[95vh] overflow-y-auto scrollbar-none rounded-2xl shadow-2xl relative"
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="fixed md:absolute top-4 right-4 p-2 rounded-full hover:bg-black/5 transition-colors z-50 bg-white/90"
                onClick={closeModal}
                aria-label="Close"
                style={{boxShadow:'0 2px 8px 0 rgba(0,0,0,0.08)'}}
              >
                <X size={28} />
              </button>
              <div className="relative h-auto min-h-0 bg-neutral-100 flex flex-row items-center justify-center overflow-hidden gap-2">
                {/* 이미지 영역 */}
                <div className="flex-shrink-0 flex items-center justify-center bg-white p-0 w-[60vw] h-[60vh] min-w-0 min-h-0 relative overflow-hidden">
                  {selected.video ? (
                    <iframe
                      width="100%"
                      height="100%"
                      src={selected.video}
                      title={isKo ? selected.titleKo : selected.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  ) : selected.images && selected.images.length > 0 ? (
                    <div className="relative flex items-center justify-center w-full h-full">
                      <WatermarkedImage
                        src={selected.images[imageIndex] && selected.images[imageIndex].includes('cloudinary.com')
                          ? selected.images[imageIndex].replace('/upload/', '/upload/q_auto,f_auto,w_1200/')
                          : selected.images[imageIndex]}
                        alt={
                          isKo
                            ? `메디컬 일러스트, 의료 일러스트레이션, 의학 그림 | ${selected.titleKo} ${imageIndex + 1} | Gleedoc 포트폴리오`
                            : `Medical Illustration, Medical Art, Healthcare Visualization | ${selected.title} ${imageIndex + 1} | Gleedoc Portfolio`
                        }
                        watermarkText="© Gleedoc Studio"
                        className="object-contain w-full h-full"
                        style={{objectFit:'contain'}}
                      />
                      {/* 이미지가 2장 이상일 때만 좌우 버튼 렌더링 */}
                      {selected.images.length > 1 && (
                        <>
                          <button
                            onClick={handlePrevImage}
                            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-white rounded-full transition-colors z-40"
                            aria-label="Previous image"
                            style={{ boxShadow: '0 2px 8px 0 rgba(0,0,0,0.10)' }}
                          >
                            <ChevronLeft size={24} />
                          </button>
                          <button
                            onClick={handleNextImage}
                            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-white rounded-full transition-colors z-40"
                            aria-label="Next image"
                            style={{ boxShadow: '0 2px 8px 0 rgba(0,0,0,0.10)' }}
                          >
                            <ChevronRight size={24} />
                          </button>
                        </>
                      )}
                      {selected.images.length > 1 && (
                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-30">
                          {selected.images.map((_, i) => (
                            <button
                              key={i}
                              onClick={() => setImageIndex(i)}
                              className={`w-3 h-3 rounded-full border-2 border-white shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-lime-400 ${
                                i === imageIndex
                                  ? 'bg-lime-400 scale-110 drop-shadow-lg'
                                  : 'bg-white/70 opacity-80'
                              }`}
                              style={{ outline: '2px solid rgba(0,0,0,0.18)' }}
                              aria-label={`Go to image ${i + 1}`}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <WatermarkedImage
                      src={selected.image && selected.image.includes('cloudinary.com')
                        ? selected.image.replace('/upload/', '/upload/q_auto,f_auto,w_1200/')
                        : selected.image}
                      alt={
                        isKo
                          ? `메디컬 일러스트, 의료 일러스트레이션, 의학 그림 | ${selected.titleKo} | Gleedoc 포트폴리오`
                          : `Medical Illustration, Medical Art, Healthcare Visualization | ${selected.title} | Gleedoc Portfolio`
                      }
                      watermarkText="© Gleedoc Studio"
                      className="object-contain w-full h-full max-w-full max-h-full min-w-0 min-h-0"
                      style={{objectFit:'contain',width:'100%',height:'100%',maxWidth:'100%',maxHeight:'100%'}}
                    />
                  )}
                </div>
              </div>
              
              {/* 설명 + 타이틀 + 클라이언트 + 아티스트 영역 */}
              <div className="pt-4 border-t border-neutral-200 space-y-2">
                <div className="flex flex-col md:flex-row gap-6 md:gap-8 pb-8">
                  {/* 설명 + Medical Illustrator 영역 */}
                  <div className="w-full flex flex-col gap-6 px-4 md:px-8 items-center text-center">
                    {/* 타이틀 */}
                    <h3 className="text-2xl font-bold text-center mb-2 mt-2">{selected && (isKo ? selected.titleKo : selected.title)}</h3>
                    {/* 설명 */}
                    <p className="text-base text-neutral-700 leading-relaxed mb-2 text-left break-words max-w-2xl mx-auto" style={{textAlign:'left'}}>
                      {selected && (isKo ? selected.descKo : selected.descEn)}
                    </p>
                    {/* 클라이언트 (작업기간/Year는 삭제) */}
                    {selected && selected.client && (
                      <div className="text-lg text-neutral-700 font-semibold flex flex-col items-center mb-2 gap-1">
                        <span>
                          {isKo
                            ? <>클라이언트: <span className="font-bold">{selected.client}</span></>
                            : <>Client: <span className="font-bold">{selected.clientEn || selected.client}</span></>
                          }
                        </span>
                      </div>
                    )}
                    {selected && selected.year && (
                      <div className="text-base text-neutral-500 font-normal flex flex-col items-center mb-2">
                        {isKo ? `작업기간: ${selected.year}` : `Work period: ${selected.year}`}
                      </div>
                    )}
                    {/* Medical Illustrator */}
                    <div className="flex flex-row flex-wrap items-center justify-center gap-2 mt-2 mb-2">
                      <span className="text-base font-semibold text-neutral-700 mr-2">
                        {isKo
                          ? '담당 일러스트레이터'
                          : (selected.artists.length === 1 ? 'Medical Illustrator' : 'Medical Illustrators')}
                      </span>
                      {selected.artists.map((artistId) => {
                        const artist = artists.find(a => a.id === artistId)
                          || alumniIllustrators.find(a => a.id === artistId)
                          || (ceo && ceo.id === artistId ? ceo : null);
                        return artist ? (
                          <span
                            key={artistId}
                            className="px-4 py-2 bg-primary/10 text-primary text-base rounded-full font-medium shadow-sm"
                          >
                            {isKo ? artist.nameKo : artist.name}
                          </span>
                        ) : null;
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

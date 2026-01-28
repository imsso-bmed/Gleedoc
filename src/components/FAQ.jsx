import React, { useState } from 'react';
import { motion } from 'framer-motion';

const translations = {
  en: {
    title: "Frequently Asked Questions",
    tabs: [
      { id: 'request', label: 'Project Request' },
      { id: 'copyright', label: 'Copyright & Rights' },
      { id: 'payment', label: 'Payment' }
    ],
    items: {
      request: [
        {
          q: "How do I request a project?",
          a: "Contact us via email or through our Gleedoc KakaoTalk channel with details about your project, including the type of work (2D illustration, 3D image, video, etc.), purpose (paper figure, research proposal, company promotion, etc.), deadline, and reference materials. We'll get back to you with a quote within 1-2 days."
        },
        {
          q: "What information should I provide when requesting a project?",
          a: "Please share: the type of final deliverable (2D illustration, 3D image, 2D video, etc.), the purpose of the work (research paper figure, research proposal, company branding, etc.), your desired deadline, and any reference images or materials that inspire your vision."
        },
        {
          q: "How is communication handled during a project?",
          a: "We believe strong collaboration leads to better results. We communicate via email or KakaoTalk throughout the process, confirming sketches, addressing revision requests, and finalizing the completed work with you."
        },
        {
          q: "How are project quotes determined?",
          a: "Quotes are calculated considering multiple factors: the volume of work, timeline, and complexity of the project. Each project is unique, and we customize our pricing accordingly."
        }
      ],
      copyright: [
        {
          q: "Do you handle copyright and usage rights?",
          a: "Yes, we handle all copyright and usage rights clearly. Upon final payment, we transfer exclusive copyright to the client. This means you have full ownership and can use the work for commercial purposes without restrictions. We can discuss alternative arrangements if needed during the initial consultation."
        },
        {
          q: "Can you retain the work in our portfolio or use it as a case study?",
          a: "We can retain the right to display your project in our portfolio and use it for case studies and marketing purposes, subject to your written approval. This helps us showcase our work and attract future clients. We can negotiate specific terms, such as anonymizing client information or limiting usage periods, based on your requirements."
        },
        {
          q: "What if we want to use the work across multiple platforms or media?",
          a: "The standard copyright transfer includes all media and platform usage rights. However, if you plan to use the work for significantly different purposes (e.g., commercial licensing, international distribution, or derivative products beyond the original scope), additional licensing fees may apply. Please discuss your full intended usage during the planning phase."
        },
        {
          q: "What about modifications and derivative works?",
          a: "Upon copyright transfer, you have the right to modify the work as needed. However, if you request modifications after final delivery and approval, they are considered new work and may incur additional costs. We recommend clarifying all requirements during the project planning phase to avoid misunderstandings."
        }
      ],
      payment: [
        {
          q: "What payment methods do you accept?",
          a: "We can issue tax invoices (invoices) for payment, making it easy to process through your accounting system."
        }
      ]
    }
  },
  ko: {
    title: "자주 묻는 질문",
    tabs: [
      { id: 'request', label: '프로젝트 의뢰' },
      { id: 'copyright', label: '저작권 & 권리' },
      { id: 'payment', label: '결제' }
    ],
    items: {
      request: [
        {
          q: "작업을 의뢰하고 싶습니다. 어떻게 하면 되나요?",
          a: "아래의 메일로 문의하기 혹은 홈페이지 메뉴의 Contact와 연결된 그리닥 카카오톡 채널을 통해 원하시는 작업에 대한 정보와 작업의 기간, 레퍼런스 이미지 등을 보내주시면 됩니다. 담당자가 1~2일 내 연락드립니다."
        },
        {
          q: "의뢰시 어떤 정보를 함께 보내드리면 좋을까요?",
          a: "원하시는 작업에 대한 정보(최종 결과물의 형태 – 2D 일러스트, 3D 이미지, 2D 영상 등), 작업의 목적(논문 figure용, 연구계획서용, 회사 홍보용 등), 원하시는 작업의 마감 기간, 레퍼런스 자료 혹은 이미지 등을 보내주시면 좋습니다."
        },
        {
          q: "작업에 대한 소통은 어떻게 이루어지나요?",
          a: "그리닥은 더 근사한 작업 결과물을 위해 클라이언트와의 소통을 중요하게 생각합니다. 메일 혹은 카카오톡을 통해 스케치 컨펌, 수정요청 확인, 최종 결과물 컨펌의 과정을 소통하고 있습니다."
        },
        {
          q: "견적은 어떤 기준으로 산정되나요?",
          a: "견적은 다양한 기준을 종합적으로 고려하여 산정됩니다. 기본적으로 작업의 양, 작업 기간, 작업의 난이도에 따라 견적이 산정됩니다."
        }
      ],
      copyright: [
        {
          q: "저작권과 이용권은 어떻게 되나요?",
          a: "최종 결과물 대금 지급 후 저작권을 클라이언트에게 이전하는 것이 원칙입니다. 이는 귀사가 작업물에 대한 완전한 소유권을 갖게 되며, 별도의 제한 없이 상업적 목적으로 활용할 수 있음을 의미합니다. 특별한 협의가 필요하신 경우 초기 상담 시 별도로 논의할 수 있습니다."
        },
        {
          q: "저작권 이전 후 그리닥에서도 포트폴리오에 작품을 전시할 수 있나요?",
          a: "귀사의 서면 동의 하에 포트폴리오 및 케이스 스터디 전시, 마케팅 목적의 사용을 유지할 수 있습니다. 이는 그리닥의 작업 사례를 보여주어 향후 클라이언트 유치에 도움이 됩니다. 필요시 클라이언트 정보 익명화, 사용 기간 제한 등 구체적인 조건을 협의할 수 있습니다."
        },
        {
          q: "여러 매체나 플랫폼에서 작업물을 재사용하려면 어떻게 하나요?",
          a: "기본 저작권 이전에는 모든 매체와 플랫폼에서의 사용권이 포함됩니다. 다만 원래 범위를 크게 벗어난 사용(예: 상업적 라이선싱, 국제 유통, 파생 상품 개발 등)을 계획 중이라면 초기 상담 시 반드시 알려주시기 바랍니다. 경우에 따라 추가 비용이 발생할 수 있습니다."
        },
        {
          q: "작업물을 수정하거나 2차 저작물을 만들 경우 권리는 어떻게 되나요?",
          a: "저작권 이전 후에는 작업물 수정에 대한 모든 권리가 귀사에게 있습니다. 다만 최종 완성 후 요청하시는 수정 사항이 상당한 작업량을 요구할 경우, 이를 새로운 작업으로 간주하여 추가 비용을 협의드릴 수 있습니다. 예상되는 모든 요구사항을 프로젝트 기획 단계에서 명확히 하시기를 권장합니다."
        }
      ],
      payment: [
        {
          q: "결제 방법으로는 어떤 것들이 가능한가요?",
          a: "세금계산서 발행이 가능합니다. 이를 통해 귀사의 회계 시스템에서 쉽게 처리할 수 있습니다."
        }
      ]
    }
  }
};

export default function FAQ({ lang }) {
  const t = translations[lang];
  const [activeTab, setActiveTab] = useState('request');
  const [openIndices, setOpenIndices] = useState([]);

  const toggleItem = (index) => {
    if (openIndices.includes(index)) {
      setOpenIndices(openIndices.filter(i => i !== index));
    } else {
      setOpenIndices([...openIndices, index]);
    }
  };

  return (
    <section className="py-24 px-6 md:px-12 bg-neutral-50 text-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-medium tracking-tighter mb-16">
          {t.title}
        </h2>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-neutral-200">
          {t.tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                setOpenIndices([]);
              }}
              className={`px-6 py-3 font-medium transition-colors relative ${
                activeTab === tab.id
                  ? 'text-black'
                  : 'text-neutral-400 hover:text-neutral-600'
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-black"
                  transition={{ type: 'spring', duration: 0.5 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {t.items[activeTab].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="bg-white rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleItem(i)}
                className="w-full px-6 md:px-8 py-5 text-left font-medium text-lg hover:bg-neutral-50 transition-colors flex justify-between items-center"
              >
                <span>{item.q}</span>
                <span className="text-2xl">{openIndices.includes(i) ? '−' : '+'}</span>
              </button>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: openIndices.includes(i) ? 'auto' : 0,
                  opacity: openIndices.includes(i) ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-4 md:px-8 py-4 bg-neutral-50 text-neutral-600 border-t border-neutral-200 text-left leading-relaxed break-keep" style={{wordBreak:'keep-all'}}>
                  {item.a}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

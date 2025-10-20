"use client"; // only if you use client-only features; remove if not needed

import {
  IoPencilOutline,
  IoHammerOutline,
  IoCheckmarkCircleOutline,
  IoHeadsetOutline,
  IoRocketOutline,
  IoShieldOutline,
} from "react-icons/io5";

const ICON_MAP = {
  "pencil-outline": IoPencilOutline,
  "hammer-outline": IoHammerOutline,
  "checkmark-circle-outline": IoCheckmarkCircleOutline,
  "headset-outline": IoHeadsetOutline,
  "rocket-outline": IoRocketOutline,
  "shield-outline": IoShieldOutline,
};

export default function Features() {
  const items = [
    {
      icon: "pencil-outline",
      title: "Design",
      content:
        "Our BAFE-certified designers create customized fire alarm systems that meet regulations and your building's unique needs.",
    },
    {
      icon: "hammer-outline",
      title: "Installation",
      content:
        "Our expert engineers install fire alarm systems to top safety, compliance, and reliability standards.",
    },
    {
      icon: "checkmark-circle-outline",
      title: "Commission",
      content:
        "We conduct thorough commissioning and testing to ensure full compliance and immediate protection.",
    },
    {
      icon: "headset-outline",
      title: "Service",
      content:
        "We offer personalized service with detailed attention and unwavering quality for your fire alarm needs.",
    },
    {
      icon: "rocket-outline",
      title: "Delivery",
      content:
        "Projects are delivered on time, to spec, with support throughout every stage.",
    },
    {
      icon: "shield-outline",
      title: "Aftercare",
      content:
        "Our dedicated aftercare resolves issues promptly, maintaining system integrity and your satisfaction.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20">
      <div className="max-w-[70rem] min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 justify-center items-center px-4 sm:px-6 lg:px-8">
        {items.map((i) => {
          const Icon = ICON_MAP[i.icon] || IoPencilOutline;
          return (
            <div
              key={i.title}
              className="flex flex-col items-center text-center p-4 sm:p-6"
            >
              <div className="mb-3 sm:mb-4 rounded-full border-2 border-[#e53935] bg-[#555] p-3 sm:p-4">
                <Icon className="text-white" size={40} />
              </div>

              <p className="text-lg sm:text-xl lg:text-2xl text-gray-800 font-extrabold mb-2 sm:mb-3">
                {i.title}
              </p>
              <p className="text-sm sm:text-base font-light leading-relaxed text-center max-w-xs">
                {i.content}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

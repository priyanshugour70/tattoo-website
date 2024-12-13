import React, { useState } from "react";

const FAQ = () => {
  const faqData = [
    {
      question: "Question One",
      answer:
        "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.",
    },
    {
      question: "Question Two",
      answer:
        "Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.",
    },
    {
      question: "Question Three",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "Question Four",
      answer:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      question: "Question Five",
      answer:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      question: "Question Six",
      answer:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="bg-black text-white  flex justify-center items-start p-8">
      <div className="w-full max-w-4xl">
        <div className="text-center">
          <h1 className="text-3xl font-bold uppercase mb-4">
            <div className="bg-[#d2d9c7] text-black inline-block px-8 py-2 rounded-full">
              <h1 className="text-3xl font-semibold uppercase tracking-wide">
                FAQ
              </h1>
            </div>
          </h1>
        </div>
        {/* FAQ Section */}
        <div className="flex flex-col gap-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-[#d2d9c7] rounded-md p-4 cursor-pointer transition duration-300"
              onClick={() => toggleFAQ(index)}
            >
              {/* Question */}
              <div
                className={`font-semibold text-center text-xl ${
                  activeIndex === index ? "text-black" : "text-black"
                }`}
              >
                {faq.question}
              </div>
              {/* Answer */}
              {activeIndex === index && (
                <div className="mt-4 text-base text-gray-100 bg-black rounded-md py-4 px-2 transition">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;

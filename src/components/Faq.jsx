import gsap from "gsap";
import { useEffect, useState } from "react";

const Slide3 = () => {
  useEffect(()=>{
    gsap.fromTo('.faqsection > div',
      {opacity:0,y:"50vh"},
      {opacity:1,
        y:0,
        duration:2.5,
        stagger:1,
        scrollTrigger:{
          trigger:'.faqsection',
          start:'top 80%',
          end:'top 30%',
          scrub: true,
          ease: 'power4.out' }
        }
    )
  },[])
    const faqs = [
        {
          question: "What is Dyvos?",
          answer:
            "Dyvos is a forward-thinking company focused on delivering innovative solutions in technology, AI, and modern digital experiences.",
        },
        {
          question: "What services does Dyvos offer?",
          answer:
            "Dyvos specializes in AI-driven applications, cutting-edge technology solutions, and personalized digital strategies to help businesses thrive in the modern era.",
        },
        {
          question: "How can I contact Dyvos for support?",
          answer:
            "You can reach Dyvos through our official website’s contact form or by emailing support@dyvos.com. Our team is available to assist you promptly.",
        },
        {
          question: "How can I contact Dyvos for support?",
          answer:
            "You can reach Dyvos through our official website’s contact form or by emailing support@dyvos.com. Our team is available to assist you promptly.",
        },
     
      ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle the clicked FAQ
  };

  return (
    <div className="py-16">

    <div className="overflow-hidden p-8  flex flex-col gap-8 items-center max-w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto px-8 ">
        <div className="flex flex-col items-center faqsection">
            <h1 className="text-2xl font-bold mb-4">Some of the things you may want to know</h1>
            <p className="sm:mb-8 text-gray-400">We answered questions so you {`don’t`} have to ask them.</p>
        </div>
        <div className="sm:space-y-4 space-y-2 w-full  items-center faqsection">
  {faqs.map((faq, index) => (
    <div
      key={index}
      className={`flex flex-col divide-y divide-gray-400/40 bg-white  shadow-md rounded-lg overflow-hidden  ${
        openIndex === index ? "bg-blue-50" : ""
      }`}
    >
      {/* Question Header */}
      <div
        className="flex justify-between items-center p-4 cursor-pointer"
        onClick={() => toggleFAQ(index)}
      >
        <p
          className={`text-lg font-medium ${
            openIndex === index ? "text-blue-600" : "text-black"
          }`}
        >
          {faq?.question}
        </p>
        <span
          className={`transform transition-transform duration-300 ${
            openIndex === index ? "rotate-180" : ""
          }`}
        >
          ▼
        </span>
      </div>

      {/* Answer Section */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          openIndex === index ? "max-h-screen" : "max-h-0"
        }`}
      >
        {openIndex === index && (
          <div className="p-4 text-gray-700">{faq?.answer}</div>
        )}
      </div>
    </div>
  ))}
</div>

    </div>
          </div>
  )
}

export default Slide3
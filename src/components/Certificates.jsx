import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Info } from "lucide-react";

import cCert from "../assets/C.png";
import cssCert from "../assets/CSS.png";
import electroCert from "../assets/clg.jpeg";
import openpoolCert from "../assets/openpool.png";
import CppCert from "../assets/Cpp.jpg"

// Certificate data with added details for interactive display
const certificates = [
  {
    title: "CSS (Basic)",
    issuer: "HackerRank",
    date: "Dec 15, 2025",
    image: cssCert,
    link: "https://www.hackerrank.com/certificates/ec8b27b16601",
    details: "Demonstrated strong foundational knowledge of CSS, including selectors, typography, box model layout, and basic responsive design principles.",
  },
  {
    title: "Introduction to C",
    issuer: "SoloLearn",
    date: "March 06, 2026",
    image: cCert,
    link: "https://www.sololearn.com/en/certificates/CC-XIK2BWG0",
    details: "Mastered fundamental concepts of C programming, touching upon memory management, pointers, and essential data structures.",
  },
  {
    title: "Introduction to C++",
    issuer: "SoloLearn",
    date: "Mar 17, 2026",
    image: CppCert,
    link: "https://lnkd.in/dqEQ6p7Q",
    details: "Explored object-oriented programming in C++, learning about classes, inheritance, polymorphism, and the Standard Template Library (STL).",
  },
  {
    title: "OpenPool",
    issuer: "OpenPool",
    date: "Mar 16, 2026",
    image: openpoolCert,
    link: "https://drive.google.com/file/d/1pBYZ0szwluDIJRE7GFjKhARxQPNPTByV/view",
    details: "Contributed to open source projects, gaining practical experience with collaborative development workflows and version control.",
  },
  {
    title: "ElectroSphere 2K26",
    issuer: "Swaminarayan University",
    date: "Jan 07, 2026",
    image: electroCert,
    details: "Participated in university-level technical symposium. Showcased core engineering concepts and collaborative teamwork.",
  },
];

const CertificateCard = ({ cert }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="relative min-w-[420px] bg-neutral-900 light:bg-white rounded-3xl overflow-hidden shadow-2xl border border-white/10 light:border-slate-200 light:shadow-lg cursor-pointer group"
    >
      <div className="transition-all duration-500 group-hover:scale-105">
        <img
          src={cert.image}
          alt={cert.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-8">
          <h3 className="text-2xl font-bold text-white light:text-slate-900 mb-2">
            {cert.title}
          </h3>
          <p className="text-gray-400 light:text-slate-500 mb-4">
            {cert.issuer}
          </p>
          <p className="text-sm text-cyan-400 light:text-indigo-600 mb-6">
            {cert.date}
          </p>
        </div>
      </div>

      <div className="absolute inset-0 bg-black/60 light:bg-white/60 backdrop-blur-xl p-8 flex flex-col transition-all duration-500 opacity-0 translate-y-8 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto">
        <h3 className="text-2xl font-bold text-white light:text-slate-900 mb-6">
          {cert.title}
        </h3>
        <p className="text-gray-200 light:text-slate-800 leading-relaxed mb-8 flex-grow font-medium">
          {cert.details}
        </p>
        
        {cert.link && (
          <a
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-2 text-cyan-300 light:text-indigo-700 hover:text-white light:hover:text-indigo-900 transition mt-auto font-bold"
          >
            Verify Certificate
            <ExternalLink size={16} />
          </a>
        )}
      </div>
    </motion.div>
  );
};

const Certificates = () => {

  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  const x = useTransform(progress, [0, 1], ["0%", "-60%"]);

  return (
    <section
      ref={containerRef}
      id="certificates"
      className="relative h-[300vh] bg-black light:bg-slate-50"
    >

      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">

        {/* Title */}
        <div className="text-center mb-16">


          <h2 className="text-5xl md:text-7xl font-bold text-white light:text-slate-900">
            Certifications
          </h2>
        </div>

        {/* Horizontal Scroll */}
        <motion.div
          style={{ x }}
          className="flex gap-12 px-20"
        >

          {certificates.map((cert, index) => (
            <CertificateCard key={index} cert={cert} />
          ))}

        </motion.div>

      </div>

    </section>
  );
};

export default Certificates;
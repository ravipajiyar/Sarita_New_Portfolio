import React, { useState } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { certificates } from "../constants";

const CertificateCard = ({
  title,
  issuer,
  year,
  credentialId,
  downloadLink,
  description,
  icon
}) => (
  <Tilt className="xs:w-[300px] w-full">
    <motion.div
      variants={fadeIn("up", "spring", 0.5, 0.75)}
      className="bg-black-100 p-6 rounded-2xl shadow-card relative min-h-[280px]"
    >
      <div className="absolute top-4 right-4 text-gray-400">{year}</div>
      <img
        src={icon}
        alt={title}
        className="w-16 h-16 object-contain mb-4"
      />
      <h3 className="text-white text-[20px] font-bold mb-2">{title}</h3>
      <p className="mt-1 text-secondary text-[14px]">{issuer}</p>
      {credentialId && (
        <p className="mt-2 text-secondary text-[12px]">Credential ID: {credentialId}</p>
      )}
      {description && (
        <p className="mt-2 text-secondary text-[13px] line-clamp-3">{description}</p>
      )}
      <a
        href={downloadLink || "#"}
        download={typeof downloadLink === 'string' && !downloadLink.startsWith('http')}
        target={downloadLink?.startsWith('http') ? '_blank' : undefined}
        rel={downloadLink?.startsWith('http') ? 'noopener noreferrer' : undefined}
        className="bg-[#915EFF] mt-4 text-white py-2 px-4 rounded-md shadow-md text-sm font-bold hover:bg-[#7d4fe3] transition absolute bottom-4 right-4"
      >
        Download
      </a>
    </motion.div>
  </Tilt>
);

const CertificateSection = ({ title, certificates, currentIndex, onNext, onPrev, onDotClick }) => {
  const itemsPerPage = 3;
  const totalPages = Math.ceil(certificates.length / itemsPerPage);

  if (!certificates || certificates.length === 0) {
    return null;
  }

  return (
    <div className="mb-20">
      <h3 className="text-white text-[24px] font-bold mb-8 text-center">{title}</h3>
      
      <div className="relative">
        {/* Previous Button */}
        {totalPages > 1 && (
          <button
            onClick={onPrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 bg-[#915EFF] hover:bg-[#7d4fe3] text-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
            aria-label="Previous slide"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        {/* Certificates Container */}
        <div className="overflow-hidden mx-12">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {Array.from({ length: totalPages }).map((_, pageIndex) => (
              <div
                key={pageIndex}
                className="w-full flex-shrink-0 flex justify-center gap-6 px-4"
              >
                {certificates
                  .slice(pageIndex * itemsPerPage, (pageIndex + 1) * itemsPerPage)
                  .map((certificate, index) => (
                    <div key={`${pageIndex}-${index}`} className="flex-shrink-0">
                      <CertificateCard {...certificate} />
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>

        {/* Next Button */}
        {totalPages > 1 && (
          <button
            onClick={onNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 bg-[#915EFF] hover:bg-[#7d4fe3] text-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
            aria-label="Next slide"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
      </div>

      {/* Navigation Dots */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-8 gap-3">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              className={`h-3 rounded-full transition-all duration-300 ${
                currentIndex === index ? "bg-white w-6" : "bg-gray-500 w-3 hover:bg-gray-400"
              }`}
              onClick={() => onDotClick(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const Certificates = () => {
  const [currentCertPro, setCurrentCertPro] = useState(0);
  const [currentCertAdd, setCurrentCertAdd] = useState(0);

  // Split certificates into professional and additional
  const professionalCerts = certificates.slice(0, 10); // First 10 certificates are professional
  const additionalCerts = certificates.slice(10); // Remaining are additional

  const handleProNext = () => {
    const totalPages = Math.ceil(professionalCerts.length / 3);
    setCurrentCertPro((prev) => (prev + 1) % totalPages);
  };

  const handleProPrev = () => {
    const totalPages = Math.ceil(professionalCerts.length / 3);
    setCurrentCertPro((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const handleAddNext = () => {
    const totalPages = Math.ceil(additionalCerts.length / 3);
    setCurrentCertAdd((prev) => (prev + 1) % totalPages);
  };

  const handleAddPrev = () => {
    const totalPages = Math.ceil(additionalCerts.length / 3);
    setCurrentCertAdd((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <div className="mt-12 bg-gradient-to-b from-gray-900 to-black rounded-[20px]">
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Professional Development</p>
          <h2 className={styles.sectionHeadText}>Certifications.</h2>
        </motion.div>
      </div>

      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-col gap-16`}>
        <CertificateSection
          title="Professional Development Certifications"
          certificates={professionalCerts}
          currentIndex={currentCertPro}
          onNext={handleProNext}
          onPrev={handleProPrev}
          onDotClick={setCurrentCertPro}
        />

        <div className="w-full border-t border-gray-800 my-8" />

        <CertificateSection
          title="Additional Certifications"
          certificates={additionalCerts}
          currentIndex={currentCertAdd}
          onNext={handleAddNext}
          onPrev={handleAddPrev}
          onDotClick={setCurrentCertAdd}
        />
      </div>
    </div>
  );
};

export default SectionWrapper(Certificates, "certificate");
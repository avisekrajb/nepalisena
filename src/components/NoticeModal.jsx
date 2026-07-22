// src/components/NoticeModal.jsx
import React, { useEffect, useState } from 'react';
import jsPDF from 'jspdf';
import { useNotice } from '../context/NoticeContext';

const NoticeModal = () => {
  const { isModalOpen, closeModal, noticeData } = useNotice();
  const [isDownloading, setIsDownloading] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  // Download only the image as PDF
  const downloadPhotoAsPDF = async () => {
    setIsDownloading(true);
    try {
      // Get the image element
      const imgElement = document.getElementById('notice-image');
      if (!imgElement) {
        throw new Error('Image not found');
      }

      // Create a canvas to get image data
      const canvas = document.createElement('canvas');
      canvas.width = imgElement.naturalWidth || imgElement.width;
      canvas.height = imgElement.naturalHeight || imgElement.height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(imgElement, 0, 0, canvas.width, canvas.height);
      
      // Convert to base64
      const imgData = canvas.toDataURL('image/png');
      
      // Create PDF with image
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      
      // Calculate dimensions to fit image properly
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const finalWidth = imgWidth * ratio;
      const finalHeight = imgHeight * ratio;
      const x = (pdfWidth - finalWidth) / 2;
      const y = (pdfHeight - finalHeight) / 2;
      
      pdf.addImage(imgData, 'PNG', x, y, finalWidth, finalHeight);
      pdf.save(`notice-${new Date().toISOString().split('T')[0]}.pdf`);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Failed to download PDF. Please try again.');
    } finally {
      setIsDownloading(false);
    }
  };

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isModalOpen, closeModal]);

  // Handle click outside
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  if (!isModalOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={handleOverlayClick}
    >
      <div 
        className="relative bg-white rounded-2xl w-full max-w-5xl max-h-[95vh] overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cancel/Close Icon - Top Right */}
        <button
          onClick={closeModal}
          className="absolute top-3 right-3 z-10 w-10 h-10 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center group hover:bg-red-50 border-2 border-red-100 hover:border-red-300"
          aria-label="Close modal"
        >
          <svg 
            className="w-6 h-6 text-gray-600 group-hover:text-red-500 transition-colors duration-200" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Image Container - Full height with scroll */}
        <div className="h-[85vh] overflow-y-auto p-2 bg-white rounded-t-2xl">
          <img
            id="notice-image"
            src={noticeData.imageUrl}
            alt="Notice"
            className="w-full h-auto object-contain rounded-lg"
            onLoad={() => setImageLoaded(true)}
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/800x600/1f5e39/ffffff?text=Notice';
              setImageLoaded(true);
            }}
          />
        </div>

        {/* Download Button - Sticky Bottom */}
        <div className="sticky bottom-0 p-4 border-t bg-white flex justify-center rounded-b-2xl">
          <button
            onClick={downloadPhotoAsPDF}
            disabled={isDownloading || !imageLoaded}
            className={`inline-flex items-center gap-3 px-8 py-3 bg-primary hover:bg-primary-dark text-white rounded-xl transition-all duration-200 font-medium shadow-md hover:shadow-lg hover:-translate-y-0.5 ${
              (isDownloading || !imageLoaded) ? 'opacity-50 cursor-not-allowed hover:translate-y-0' : ''
            }`}
          >
            {isDownloading ? (
              <>
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Downloading...
              </>
            ) : (
              <>
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                </svg>
                Download PDF
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoticeModal;

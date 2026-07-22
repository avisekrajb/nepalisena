// src/context/NoticeContext.jsx
import React, { createContext, useState, useContext, useMemo, useEffect } from 'react';

const NoticeContext = createContext(null);

export const NoticeProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasBeenShown, setHasBeenShown] = useState(false);
  const [noticeData, setNoticeData] = useState({
    title: 'Notice',
    imageUrl: '/notice.png'
  });

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setHasBeenShown(true);
  };

  // Auto-open modal on first load
  useEffect(() => {
    if (!hasBeenShown) {
      const timer = setTimeout(() => {
        setIsModalOpen(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [hasBeenShown]);

  const value = useMemo(() => ({
    isModalOpen,
    openModal,
    closeModal,
    noticeData,
    setNoticeData,
    hasBeenShown
  }), [isModalOpen, noticeData, hasBeenShown]);

  return (
    <NoticeContext.Provider value={value}>
      {children}
    </NoticeContext.Provider>
  );
};

export const useNotice = () => {
  const context = useContext(NoticeContext);
  if (!context) {
    throw new Error('useNotice must be used within a NoticeProvider');
  }
  return context;
};
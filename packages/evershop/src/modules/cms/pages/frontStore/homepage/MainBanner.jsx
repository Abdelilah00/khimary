import React from 'react';
import './MainBanner.scss';

export default function MainBanner() {

  return (
    <div className="main-banner-home flex items-center">
      <img src="/HomeBanner.webp" alt="banner" />
    </div>
  );
}

export const layout = {
  areaId: 'content',
  sortOrder: 1
};

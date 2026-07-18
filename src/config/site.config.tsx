import { Metadata } from 'next';
import logoImg from '@/components/airBnbImages/AirbnbLogo3.png';
import { LAYOUT_OPTIONS } from '@/config/enums';
import logoIconImg from '@/components/airBnbImages/AirbnbLogo3.png';
import { OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types';

enum MODE {
  DARK = 'dark',
  LIGHT = 'light',
}

export const siteConfig = {
  title: 'Airbnb',
  description: `Airbnb`,
  logo: logoImg,
  icon: logoIconImg,
  mode: MODE.LIGHT,
  layout: LAYOUT_OPTIONS.HYDROGEN,
  // TODO: favicon
};

export const metaObject = (
  title?: string,
  openGraph?: OpenGraph,
  description: string = siteConfig.description
): Metadata => {
  return {
    title: title ? `${title} - Airbnb` : siteConfig.title,
    description,
    openGraph: openGraph ?? {
      title: title ? `${title} - Airbnb` : title,
      description,
      url: '#',
      siteName: 'Airbnb Website', // https://developers.google.com/search/docs/appearance/site-names
      images: {
        url: '#',
        width: 1200,
        height: 630,
      },
      locale: 'en_US',
      type: 'website',
    },
  };
};

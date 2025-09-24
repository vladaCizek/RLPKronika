// Main historie.js - Complete history data structure for historie.html
import { hrabuvka19361959 } from './hrabuvka-1936-1959.js';
import { gonio } from './gonio.js';
import { mosnov19591969 } from './mosnov-1959-1969.js';
import { periode19681989 } from './periode-1968-1989.js';
import { periode19901999 } from './periode-1990-1999.js';
import { periode20002009 } from './periode-2000-2009.js';
import { periode20102019 } from './periode-2010-2019.js';
import { periode20202026 } from './periode-2020-2026.js';

// Historie interface definition for TypeScript compatibility
export interface HistorieSection {
  id: string;
  title: string;
  period: string;
  content: {
    description?: string[];
    timeline?: Array<{
      year: string;
      events: string[];
    }>;
    additionalInfo?: string[];
  };
  images: Array<{
    src: string;
    alt: string;
    caption: string;
  }>;
}

export interface HistorieData {
  title: string;
  subtitle: string;
  description: string;
  sections: HistorieSection[];
  navigation: Array<{
    id: string;
    label: string;
    href: string;
  }>;
}

// Complete history data structure
export const historieData: HistorieData = {
  title: 'Historie řízení letového provozu v Ostravě',
  subtitle: 'ŘÍZENÍ LETOVÉHO PROVOZU V OSTRAVĚ V BĚHU ČASU',
  description: 'Přehled historie řízení letového provozu na letišti Ostrava od roku 1936 do současnosti.',

  // Navigation structure matching the HTML sidebar
  navigation: [
    { id: 'hrabuvka-1936-1959', label: '1936-1959: Hrabůvka', href: '#hrabuvka-1936-1959' },
    { id: 'gonio', label: 'GONIO na Hrabůvce', href: '#gonio' },
    { id: 'mosnov-1959-1969', label: '1959-1969: Počátky Mošnov', href: '#mosnov-1959-1969' },
    { id: 'periode-1968-1989', label: '1968-1989: Sovětská éra', href: '#periode-1968-1989' },
    { id: 'periode-1990-1999', label: '1990-1999: Transformace', href: '#periode-1990-1999' },
    { id: 'periode-2000-2009', label: '2000-2009: Modernizace', href: '#periode-2000-2009' },
    { id: 'periode-2010-2019', label: '2010-2019: Velké změny', href: '#periode-2010-2019' },
    { id: 'periode-2020-2026', label: '2020-2026: Současnost', href: '#periode-2020-2026' }
  ],

  // All historical sections in chronological order
  sections: [
    hrabuvka19361959,
    gonio,
    mosnov19591969,
    periode19681989,
    periode19901999,
    periode20002009,
    periode20102019,
    periode20202026
  ]
};

// Helper functions for working with historie data
export const getHistorieSection = (id: string): HistorieSection | undefined => {
  return historieData.sections.find(section => section.id === id);
};

export const getHistorieSectionsByPeriod = (startYear: number, endYear: number): HistorieSection[] => {
  return historieData.sections.filter(section => {
    const periodMatch = section.period.match(/(\d{4})/g);
    if (!periodMatch) return false;
    const sectionStartYear = parseInt(periodMatch[0]);
    return sectionStartYear >= startYear && sectionStartYear <= endYear;
  });
};

export const getAllHistorieImages = (): Array<{src: string; alt: string; caption: string; sectionId: string}> => {
  return historieData.sections.flatMap(section =>
    section.images.map(image => ({
      ...image,
      sectionId: section.id
    }))
  );
};

// Export individual sections for direct access
export {
  hrabuvka19361959,
  gonio,
  mosnov19591969,
  periode19681989,
  periode19901999,
  periode20002009,
  periode20102019,
  periode20202026
};
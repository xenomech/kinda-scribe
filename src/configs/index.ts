import {
  AdjustmentsIcon,
  CalendarIcon,
  DocumentDuplicateIcon,
  IdentificationIcon,
  LightBulbIcon,
  SparklesIcon,
  SupportIcon,
  TrendingUpIcon,
  ViewBoardsIcon,
} from '@heroicons/react/solid';
import React from 'react';
export interface LINK_INTERFACE {
  label: string;
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
  to: string;
}
export const PRIMARY_LINKS: LINK_INTERFACE[] = [
  {
    label: 'Post Generator',
    icon: SparklesIcon,
    to: '#',
  },
  {
    label: 'Ideas Generator',
    icon: LightBulbIcon,
    to: '#',
  },
  {
    label: 'Carousel Maker',
    icon: ViewBoardsIcon,
    to: '#',
  },
  {
    label: 'Posts',
    icon: DocumentDuplicateIcon,
    to: '#',
  },
  {
    label: 'Content Inspiration',
    icon: TrendingUpIcon,
    to: '#',
  },
  {
    label: 'Posts for your',
    icon: IdentificationIcon,
    to: '#',
  },
  {
    label: 'Schedule',
    icon: CalendarIcon,
    to: '#',
  },
];
export const SECONDARY_LINKS: LINK_INTERFACE[] = [
  {
    label: 'Preferences',
    icon: AdjustmentsIcon,
    to: '#',
  },
  {
    label: 'Feature requests',
    icon: SupportIcon,
    to: '#',
  },
];

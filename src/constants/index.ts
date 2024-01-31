import {
  DesktopComputerIcon,
  DeviceMobileIcon,
  DeviceTabletIcon,
} from '@heroicons/react/solid';
interface DevicePropertyType {
  dev: keyof typeof BREAKPOINTS;
  width: string;
  icon:
    | typeof DeviceTabletIcon
    | typeof DeviceTabletIcon
    | typeof DesktopComputerIcon;
}
interface BreakPointType {
  mobile: DevicePropertyType;
  tablet: DevicePropertyType;
  desktop: DevicePropertyType;
}
export const BREAKPOINTS: BreakPointType = {
  mobile: {
    dev: 'mobile',
    width: 'w-[360px]',
    icon: DeviceMobileIcon,
  },
  tablet: {
    dev: 'tablet',
    width: 'w-[470px]',
    icon: DeviceTabletIcon,
  },
  desktop: {
    dev: 'desktop',
    width: 'w-[550px]',
    icon: DesktopComputerIcon,
  },
};

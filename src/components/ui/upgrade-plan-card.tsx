import {
  InformationCircleIcon,
  LightningBoltIcon,
} from '@heroicons/react/solid';
import { Button } from './button';
import { Progress } from './progress';

export const UpgradePlanCard = () => {
  return (
    <div className="px-3 pb-3 w-full">
      <div className="p-4 shadow-xs bg-gray-50 rounded-xl ring-1 ring-gray-200">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center flex-1 gap-1">
            <span className="text-xs font-medium text-gray-900">
              Words generated
            </span>
            <InformationCircleIcon className="w-4 h-4 text-gray-400 transition-all duration-150 cursor-pointer hover:text-gray-600" />
          </div>
          <span className="text-xs font-semibold text-gray-900">
            1.25K / 50K
          </span>
        </div>
        <Progress className="h-2 mt-2" value={80} />
        <span className="block mt-2 text-xs font-medium text-gray-500">
          monthly usage resets in 28 days
        </span>
        <Button
          className="w-full rounded-full mt-2 gap-2"
          variant="outline"
          size="sm"
        >
          <LightningBoltIcon className="w-5 h-5 text-gray-500" />
          Upgrade Plan
        </Button>
      </div>
    </div>
  );
};

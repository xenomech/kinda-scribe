import { Button } from '@/components/ui/button';
import { UpgradePlanCard } from '@/components/ui/upgrade-plan-card';
import { PRIMARY_LINKS, SECONDARY_LINKS } from '@/configs';
import { PencilAltIcon } from '@heroicons/react/solid';

const Sidebar = () => {
  return (
    <aside className="w-64 min-w-64 md:h-screen flex items-start flex-col border-r">
      <div className="w-full px-4">
        <div className="h-14 w-full "></div>
        <Button
          size="xl"
          className="w-full flex items-center justify-center gap-2 text-base font-medium rounded-full"
        >
          <PencilAltIcon className="h-5 w-5" />
          Create
        </Button>
      </div>
      <div className="px-4 w-full h-full my-6">
        <div className="pl-1 grow flex flex-col h-full justify-between items-start">
          <div className="flex items-start justify-start flex-col gap-7">
            {PRIMARY_LINKS.map((item, index) => {
              return (
                <a
                  className="text-sm font-semibold text-gray-600 transition-colors hover:text-gray-900 whitespace-nowrap group"
                  href={item.to}
                  key={index + 1}
                >
                  <div className="flex gap-3 items-center text-gray-400 group-hover:text-gray-500">
                    <item.icon className="w-5 h-5 text-gray-400 transition-colors group-hover:text-gray-500" />
                    {item.label}
                  </div>
                </a>
              );
            })}
          </div>
          <div className="flex items-start justify-start flex-col gap-3">
            {SECONDARY_LINKS.map((item, index) => {
              return (
                <a
                  className="text-sm font-semibold text-gray-600 transition-colors hover:text-gray-900 whitespace-nowrap group"
                  href={item.to}
                  key={index + 1}
                >
                  <div className="flex gap-3 items-center text-gray-400 group-hover:text-gray-500">
                    <item.icon className="w-5 h-5 text-gray-400 transition-colors group-hover:text-gray-500" />
                    {item.label}
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <UpgradePlanCard />
    </aside>
  );
};

export default Sidebar;

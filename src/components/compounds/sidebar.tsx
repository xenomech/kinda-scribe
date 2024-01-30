import { PRIMARY_LINKS } from '@/configs';

const Sidebar = () => {
  return (
    <div className="bg-green-300 md:w-1/6 md:h-screen">
      Sidebar
      <div>
        {PRIMARY_LINKS.map((item, index) => {
          return (
            <a
              className="flex gap-4 text-gray-500"
              href={item.to}
              key={index + 1}
            >
              <item.icon className="w-6 h-6" />
              <span className="font-semibold">{item.label}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;

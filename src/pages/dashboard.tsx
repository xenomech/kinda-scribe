import Editor from '@/components/compounds/editor';
import Preview from '@/components/compounds/preview';
import Sidebar from '@/components/compounds/sidebar';

const Dashboard = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <Sidebar />
      <Editor />
      <Preview />
    </div>
  );
};

export default Dashboard;

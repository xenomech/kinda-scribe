import Dashboard from '@/pages/dashboard';
import { PostProvider } from './contexts/app-context';

const App = () => {
  //router configs for multi-page goes here
  return (
    <PostProvider>
      <Dashboard />
    </PostProvider>
  );
};

export default App;

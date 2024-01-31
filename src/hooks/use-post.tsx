import { PostContext } from '@/contexts/app-context';
import { useContext } from 'react';

function usePost() {
  const { post, setPost } = useContext(PostContext);

  return { post, setPost };
}

export default usePost;

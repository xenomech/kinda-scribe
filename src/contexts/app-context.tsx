import { OutputData } from '@editorjs/editorjs';
import { Dispatch, SetStateAction, createContext, useState } from 'react';

interface PostType {
  post: OutputData | undefined;
  setPost: Dispatch<SetStateAction<OutputData | undefined>>;
}
const initialPostState: PostType = {
  post: undefined,
  setPost: () => {},
};

const PostContext = createContext<PostType>(initialPostState);

type PostProviderPropType = {
  children?: React.ReactNode;
};

const PostProvider = ({ children }: PostProviderPropType) => {
  const initialState = initialPostState.post;

  const [post, setPost] = useState(initialState);
  console.log(post);
  return (
    <PostContext.Provider value={{ post, setPost }}>
      {children}
    </PostContext.Provider>
  );
};

export { PostContext, PostProvider };

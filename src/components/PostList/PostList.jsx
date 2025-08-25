import { PostInfo } from '../PostInfo/PostInfo';
import './PostList.scss';

export const PostList = ({ ports }) => (
  <div>
    {ports.map(post => (
      <PostInfo key={post.id} post={post} />
    ))}
  </div>
);

import { notFound } from 'next/navigation';
import { api } from '~/trpc/server';

interface Post {
  id: number;
  name: string;
}

interface PageProps {
  params: {
    postId: string;
  };
}

const Page = async ({ params }: PageProps) => {
  const { postId } = params;

  const postResponse = await api.post.getById.query({ id: parseInt(postId, 10) });
  const post: Post = postResponse; // Assuming response directly contains the post details

  if (!post || !post.id) {
    return notFound();
  }

  return (
    <div className="mt-4">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        {post.name}
      </h1>
    </div>
  );
};

export default Page;

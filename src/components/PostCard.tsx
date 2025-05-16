interface Post {
  id: number;
  title: string;
  description: string;
  createdAt: string;
  category: string;
  tags: string[];
}

export function PostCard({ post }: { post: Post }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm text-gray-500">{post.category}</span>
          <span className="text-sm text-gray-500">{post.createdAt}</span>
        </div>
        <h2 className="text-xl font-bold mb-2">
          {post.title}
        </h2>
        <p className="text-gray-600 mb-4 line-clamp-2">
          {post.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-sm bg-gray-100 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

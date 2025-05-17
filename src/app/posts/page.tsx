import { PostCard } from "@/components/PostCard";

// 임시 데이터 (실제 백엔드 API와 통신할 때는 삭제)
const mockPosts = [
  {
    id: 1,
    title: "First Post",
    description: "This is the first post.",
    createdAt: "2025-05-16",
    category: "Daily",
    tags: ["Development", "Blog"],
  },
  {
    id: 2,
    title: "Second Post",
    description: "This is the second post.",
    createdAt: "2025-05-15",
    category: "Tech",
    tags: ["Next.js", "TypeScript"],
  },
];

export default function PostsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Posts</h1>
      
      {/* 포스트 카드 리스트 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>

      {/* 페이지네이션 */}
      <div className="flex justify-center mt-8">
        <button className="px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200">
          Previous
        </button>
        <span className="mx-4">1/10</span>
        <button className="px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200">
          Next
        </button>
      </div>
    </div>
  );
}

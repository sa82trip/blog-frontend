import { PostCard } from "@/components/PostCard";

// 임시 데이터 (실제 백엔드 API와 통신할 때는 삭제)
const mockPosts = [
  {
    id: 1,
    title: "첫 번째 글",
    description: "이 글은 첫 번째 글입니다.",
    createdAt: "2025-05-16",
    category: "일상",
    tags: ["개발", "블로그"],
  },
  {
    id: 2,
    title: "두 번째 글",
    description: "두 번째 글입니다.",
    createdAt: "2025-05-15",
    category: "기술",
    tags: ["Next.js", "TypeScript"],
  },
];

export default function PostsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">글 목록</h1>
      
      {/* 포스트 카드 리스트 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>

      {/* 페이지네이션 */}
      <div className="flex justify-center mt-8">
        <button className="px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200">
          이전
        </button>
        <span className="mx-4">1/10</span>
        <button className="px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200">
          다음
        </button>
      </div>
    </div>
  );
}

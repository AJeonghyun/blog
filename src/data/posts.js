// 게시물 데이터
const posts = [
  { id: 1, title: '첫 번째 게시물', date: '2024-11-23', category: '개발' },
  { id: 2, title: '두 번째 게시물', date: '2024-11-22', category: '생활' },
  { id: 3, title: '세 번째 게시물', date: '2024-11-21', category: '학교' },
];

const mdx = {
  1: () => import('../posts/post1.mdx'),
  2: () => import('../posts/post2.mdx'),
  3: () => import('../posts/post3.mdx'),
};

// 내보내기
export default posts;
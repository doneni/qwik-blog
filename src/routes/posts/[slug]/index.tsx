import { component$ } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';

export default component$(() => {
  const loc = useLocation();
  const slug = loc.params.slug;

  const postMap: Record<string, { title: string; date: string; content: string }> = {
    'hello-world': {
      title: 'Hello World',
      date: '2025-07-15',
      content: '블로그의 첫 글입니다. 반가워요~ 🍀',
    },
    'i-am-doneni': {
      title: 'I am doneni',
      date: '2025-07-17',
      content: '안녕하세요~ 우하하',
    },
  };

  const post = postMap[slug];

  if (!post) {
    return <h1>Post not found</h1>;
  }

  return (
    <>
      <h1>{post.title}</h1>
      <div style={{ fontSize: '0.875rem', color: '#888' }}>{post.date}</div>
      <p style={{ marginTop: '1rem' }}>{post.content}</p>
    </>
  );
});

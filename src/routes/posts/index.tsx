import { component$ } from '@builder.io/qwik';

export default component$(() => {
  const posts = [
    {
      slug: 'hello-world',
      title: 'Hello World',
      date: '2025-07-15',
      description: '블로그의 첫 글입니다.',
    },
    {
      slug: 'i-am-doneni',
      title: 'I am doneni',
      date: '2025-07-17',
      description: '안녕하세요~',
    },
  ];

  return (
    <>
      <h1>🍓 Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug} style={{ marginBottom: '2rem' }}>
            <a href={`/posts/${post.slug}`} style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
              {post.title}
            </a>
            <div style={{ fontSize: '0.875rem', color: '#888' }}>{post.date}</div>
            <p>{post.description}</p>
          </li>
        ))}
      </ul>
    </>
  );
});

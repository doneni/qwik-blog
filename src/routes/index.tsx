import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <>
      <h1>🍰 Real Qwik Blog</h1>
      <a>🍓</a>
      <a href="/posts" style={{ display: 'inline-block', marginTop: '1rem', fontWeight: 'bold' }}>
        Posts
      </a>
    </>
  );
});
import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <>
      <section>
        <h1>🍰 Real Qwik Blog</h1>
        <p>
          Hi there! This is a simple blog built with Qwik.
          You can document any thoughts, experiments, and lessons learned.
        </p>
      </section>

      <section>
        <a>🍓</a>
        <a href="/posts" style={{ display: 'inline-block', marginTop: '1rem', fontWeight: 'bold' }}>
          Posts
        </a>
        <br/>
        <a>🍓</a>
        <a href="/about" style={{ display: 'inline-block', marginTop: '1rem', fontWeight: 'bold' }}>
          About
        </a>
      </section>
    </>
  );
});
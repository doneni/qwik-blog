import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <header
      style={{
        backgroundColor: '#fbe8d3',
        padding: '1rem 2rem',
        borderBottom: '2px dashed #ff8fab',
        borderRadius: '0 0 1rem 1rem',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
        fontFamily: `'Quicksand', sans-serif`,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <a
        href="/"
        style={{
          fontSize: '1.75rem',
          color: '#d44881',
          textDecoration: 'none',
        }}
      >
        🍰 Real Qwik
      </a>
      <nav style={{ display: 'flex', gap: '3rem', marginRight: '2rem' }}>
        <a href="/posts" style={linkStyle}>Posts</a>
        <a href="/projects" style={linkStyle}>Projects</a>
        <a href="/about" style={linkStyle}>About</a>
      </nav>
    </header>
  );
});

const linkStyle = {
  color: '#7c4a64',
  textDecoration: 'none',
  fontWeight: '600',
  fontSize: '1rem',
};

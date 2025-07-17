import { component$ } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';

export default component$(() => {
  const loc = useLocation();
  const slug = loc.params.slug;

  return (
    <>
      <h1>포스트: {slug}</h1>
      <p>여기에 본문이 들어갈 예정입니다.</p>
    </>
  );
});
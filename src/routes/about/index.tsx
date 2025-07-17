import { component$ } from '@builder.io/qwik';
import thumpsUpGuu from '../../assets/thumbs-up-guu.jpeg';

export default component$(() => {
  return (
    <>
      <h1>🍓 About</h1>
      <p>I'm Doneni.</p>
      <br />
      <img src={thumpsUpGuu} alt="Thumbs Up Guu" width="300" />
    </>
  );
});

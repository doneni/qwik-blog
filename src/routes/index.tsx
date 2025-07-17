import { component$ } from '@builder.io/qwik';
import nappingCat from '../assets/napping-cat.jpeg';

export default component$(() => {
  return (
    <>
      <p> Hi there! This is a simple blog built with Qwik. </p>
      <p> You can document any thoughts, experiments, and lessons learned.</p>
      <br/>
      <img src={nappingCat} alt="Napping Cat" width="400" />
    </>
  );
});
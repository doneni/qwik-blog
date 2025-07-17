import { component$, Slot } from '@builder.io/qwik';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default component$(() => {
  return (
    <div class="layout">
      <Header />
      <main>
        <Slot />
      </main>
      <Footer />
    </div>
  );
});

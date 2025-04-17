import { useState } from 'react';
import Message from '../components/Message';

import About from '../components/About';
import Contact from '../components/Contact';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Qoute from '../components/Qoute';
import Skills from '../components/Skills';

export default function HomePage() {
  const [showMessage, setShowMessage] = useState(true); // show on every visit

  return (
    <>
      {showMessage && <Message onClose={() => setShowMessage(false)} />}

      <Hero />
      <Qoute />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </>
  );
}

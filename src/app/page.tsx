import React from 'react';
import { FC } from 'react';

import styles from './page.module.css'
import Slider from '@/components/slider/slider';

const App = () => {
  return (
    <>
    <header className={styles.hero}>
    <Slider
        props={[
          { name: "Weins", content: <h1>TEST</h1>},
          { name: "Weins", content: <h1>TEST</h1> },
          { name: "Weins", content: <h1>TEST</h1> },
        ]}
      />
    </header>
    <main>
      <section>
        Main - Section
      </section>
    </main>
    </>
  )
}

export default App;
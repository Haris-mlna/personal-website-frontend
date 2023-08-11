import React from 'react';
import { FC } from 'react';

import styles from './page.module.css'
import Slider from '@/components/slider/slider';

import { ContentOne, ContentTwo, ContentThree } from '@/content/home/content';
import SectionDivider from '@/components/divider/section-divider';

const App = () => {
  return (
    <>
    <header className={styles.hero}>
    <Slider
        props={[
          { name: "Intro", content: <ContentOne/>},
          { name: "Trend", content: <ContentTwo/> },
          { name: "Join us", content: <ContentThree/> },
        ]}
      />
    </header>
    <main>
      <SectionDivider title={'Articles'}/>
      <section className={styles.sect_one}>
        
      </section>
    </main>
    </>
  )
}

export default App;
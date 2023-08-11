import styles from './section-divider.module.css'
import { FC } from "react";

interface sectionDividerProps {
  title : string
}

const SectionDivider : FC<sectionDividerProps> = (
  {
    title
  }
) => {
  return (
    <div className={styles.sect_divider}>
      <h2>
        {title}
      </h2>
      <div className={styles.line}>
      </div>
    </div>
    )
}

export default SectionDivider;
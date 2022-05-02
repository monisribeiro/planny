import LateralMenu from '../LateralMenu';
import styles from './layout.module.scss';

export default function Layout({ children }) {
    return (
      <div className={styles.layoutContainer}>
        <LateralMenu />
        <main>{children}</main>
      </div>
    )
  }
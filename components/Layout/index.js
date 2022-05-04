import LateralMenu from '../LateralMenu';
import styles from './layout.module.scss';
import Stack from '@mui/material/Stack';

export default function Layout({ children }) {
    return (
      <Stack direction="row" spacing={0} >
        <LateralMenu />
        <main className={styles.main}>{children}</main>
      </Stack>
    )
  }
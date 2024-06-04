import { Container } from 'react-bootstrap';

import Header from '../../components/common/Header/Header';
import styles from './styles.module.css';

export default function MainLayout() {
  return (
    <Container className={styles.container}>
      <div className={styles.wrapper}><Header /></div>
    </Container>
  )
}

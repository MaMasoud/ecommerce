import { Container } from 'react-bootstrap';

import {Header, Footer} from '@components/common';
import styles from './styles.module.css';
import { Outlet } from 'react-router-dom';




export default function MainLayout() {
  return (
    <Container className={styles.container}>
      <Header />
      <div className={styles.wrapper}><Outlet /></div>
      <Footer />
    </Container>
  )
}

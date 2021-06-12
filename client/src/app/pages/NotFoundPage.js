import { useHistory } from "react-router-dom";

import * as Routes from '../routes';

import styles from './NotFoundPage.module.scss';

const NotFoundPage = () => {
  const history = useHistory();

  return (
    <main className={styles.fullContainer}>
      <div className={styles.fof}>
        <div className={styles.btn__container}>
          <div className={styles.text__container}>
            <h1>OOPS!PAGE NOT FOUND</h1>
            <p>Sorry, the page you're looking for doesn't exist.</p>
          </div>
          <div className={styles.callToActions}>
            <button onClick={() => history.push(Routes.HOME, { from: "NotFoundPage" })}>Home</button>
            <button onClick={() => history.goBack() }>Back</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFoundPage;
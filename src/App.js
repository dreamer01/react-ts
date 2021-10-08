import React from 'react';

import Button from './components/Button';
import styles from './app.css';

function App({ message }) {
  return (
    <div className={styles.app}>
      {message}
      <Button
        className={styles.btn}
        title='Test'
        onClick={() => console.log('Button Click !!')}
      />
      {console.log(process.env.API_URL)}
    </div>
  );
}

export default App;

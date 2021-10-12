import React from 'react';

import Button from './components/Button';
import Styles from './app.css';

type AppProps = {
  message: string;
};

function App({ message }: AppProps) {
  return (
    <div className={Styles.app}>
      {message}
      <Button
        className={Styles.btn}
        title='Click Me !'
        style={{ margin: 20 }}
        onClick={() => console.log('Button Clicked!')}
      />
      {console.log(process.env.API_URL)}
    </div>
  );
}

export default App;

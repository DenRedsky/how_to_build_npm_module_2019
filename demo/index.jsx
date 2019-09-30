import React from 'react';
import ReactDOM from 'react-dom';
import { Button, RocketButton } from '../src';

import style from './style';

const goToSpace = () => console.warn('Поехали!');

const App = () => (
  <div className={ style.app }>
    <div className={ style.app__form }>
      <div>
        <Button>
          CLICK ME!
        </Button>
      </div>
      <div>
        <RocketButton onClick={ goToSpace } className={ style.app__button }>
          WANT TO SPACE
        </RocketButton>
      </div>
    </div>
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));

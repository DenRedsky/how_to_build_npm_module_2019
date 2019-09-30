import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import style from './style';

const Button = ({ onClick, children, className }) => (
  <button
    onClick={ onClick }
    className={ cn(style.button, className) }
    type="button"
  >
    this is simple button
    { children }
  </button>
);

Button.propTypes = {

  /** Колбэк на клик по кнопке */
  onClick: PropTypes.func,

  /** Вложенная разметка */
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element, PropTypes.string]).isRequired,

  /** Имя дополнительного класса для стилей */
  className: PropTypes.string
};

Button.defaultProps = {
  onClick: () => console.info('hey!'),
  className: ''
};

export default Button;

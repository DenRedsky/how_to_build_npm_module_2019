import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';

import style from './style';

const cn = classnames.bind(style);

const RocketButton = ({ onClick, children, className }) => (
  <button
    onClick={ onClick }
    className={ cn('button', className) }
    type="button"
  >
    this is rocket button
    { children }
  </button>
);

RocketButton.propTypes = {

  /** Колбэк на клик по кнопке */
  onClick: PropTypes.func,

  /** Вложенная разметка */
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element, PropTypes.string]).isRequired,

  /** Имя дополнительного класса для стилей */
  className: PropTypes.string
};

RocketButton.defaultProps = {
  onClick: () => {},
  className: ''
};

export default RocketButton;

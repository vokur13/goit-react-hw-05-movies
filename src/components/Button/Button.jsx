import PropTypes from 'prop-types';
import { StyledButton } from './Button.styled';

export const Button = ({
  icon: Icon = null,
  type = 'button',
  disabled = false,
  onClick,
  children,
}) => {
  return (
    <StyledButton type={type} disabled={disabled} onClick={onClick}>
      {Icon && <Icon size="16" />}
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  icon: PropTypes.element,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

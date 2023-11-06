import Button from '@mui/material/Button';
import { styled } from '@mui/system';

const LoginButton = styled(Button)(() => ({
  backgroundColor: 'orange',
  padding : '2px 20px',
  color: 'white',
  '&:hover': {
    backgroundColor: 'orange !important',
  },
}));

export default LoginButton;
import Button from '@mui/material/Button';
import { styled } from '@mui/system';

const ExploreButton = styled(Button)(() => ({
  backgroundColor: 'orange',
  padding : '6px 20px',
  borderRadius : '50px',
  color: 'white',
  '&:hover': {
    backgroundColor: 'orange !important',
  },
}));

export default ExploreButton;
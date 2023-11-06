import Button from '@mui/material/Button';
import { styled } from '@mui/system';

const DetailsButton = styled(Button)(() => ({
  backgroundColor: 'orange',
// border : "1px solid orange",
  padding : '6px 20px',
  borderRadius : '50px',
  color: 'white',
  '&:hover': {
    backgroundColor: 'orange !important',
    color : 'white'
  },
}));

export default DetailsButton;
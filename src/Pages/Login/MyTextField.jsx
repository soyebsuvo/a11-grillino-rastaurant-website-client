import TextField from '@mui/material/TextField';
import { styled } from '@mui/system';

const MyTextField = styled(TextField)(() => ({
    '& .MuiInputBase-root': {
        backgroundColor: 'white',
    },
    '& .MuiInputBase-input': {
        color: 'black', 
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: 'orange', 
    },
}));

export default MyTextField;
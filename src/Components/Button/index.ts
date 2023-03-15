import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const ButtonMenu = styled(Button)({
  color:'gray',
  display: 'flex', 
  justifyContent: 'flex-start', 
  textTransform: 'none', 
  width: '100%',

  '&:hover': {
    color: '#000',
  }
})

export const ButtonPrimary = styled(Button)({
  color: 'white',
  background: 'black',
  display: 'flex',
  borderRadius: '20px',
  textTransform: 'none',


  '&:hover': {
    color: '#000',
  }
})
export const ButtonSecondary = styled(Button)({
  color: 'black',
  background: 'transparent',
  display: 'flex',
  textTransform: 'none',

})

export const ButtonSucess = styled(Button)({
  background: '#e6f6f5',
  color: '#428182',
  fontWeight: 'bold',
  borderRadius: '20px',
  textTransform: 'none',
  padding: '0rem 1rem',
})

export const ButtonPending = styled(Button)({
  background: '#fff0e3',
  color: '#bd8c58',
  fontWeight: 'bold',
  borderRadius: '20px',
  textTransform: 'none',
  padding: '0.2rem 1rem',

})
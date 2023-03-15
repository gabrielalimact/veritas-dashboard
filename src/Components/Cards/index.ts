import Card from '@mui/material/Card';
import styled from "@emotion/styled";

export const DashedCards = styled(Card)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  border: '2px dashed #e0e0e0',
  boxShadow: 'none',
  borderRadius: '20px',
  background: 'transparent',
  width: '200px',
  padding: '20px',
  color: 'black'
})

export const SolidCards = styled(Card)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  border: 'none',
  boxShadow: 'none',
  borderRadius: '20px',
  background: 'white',
  width: '204px',
  padding: '20px',
  color: 'black'
})

export const HalfCards = styled(Card)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  border: 'none',
  boxShadow: 'none',
  borderRadius: '20px',
  background: 'white',
  width: '244px',
  color: 'black'
})

export const CardPayments = styled(Card)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  background: 'white',
  height: '2.5rem',
  borderRadius: '20px',
  padding: '1rem',
  width: '50%'
})
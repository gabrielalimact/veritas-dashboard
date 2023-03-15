import React from 'react';
import logo from './heart.svg';
import people from './assets/taylor.png'
import grafico from './assets/grafico.png'
import grafico2 from './assets/grafico2.png'

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, IconButton, Typography, CardMedia } from '@mui/material';
import { ButtonMenu, ButtonPending, ButtonPrimary, ButtonSecondary, ButtonSucess } from './Components/Button';
import { DashedCards, SolidCards, HalfCards, CardPayments } from './Components/Cards';
import { 
  AutoAwesome, Dashboard, Equalizer, People, Wallet, 
  Settings, LogoutRounded, Circle, Notifications, CalendarMonth, 
  Insights, MoreHoriz 
} from '@mui/icons-material';
import { BasicTable, TableData } from './Components/Table';
import { SwitchDiv } from './Components/Switch';


const theme = createTheme({
  typography: {
    "fontFamily": `"Nunito", sans-serif`,
    "fontSize": 14,
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 500
   }
});
export const App: React.FC = () => {

  const menu = [
    { name: 'Dashboard', icon: <Dashboard />, path: '/dashboard' },
    { name: 'Users', icon: <People />, path: '/users' },
    { name: 'Accounts', icon: <Wallet />, path: '/accounts'},
    { name: 'Statistics', icon: <Equalizer />, path: '/statistics'},
  ]

  const bottomMenu = [
    { name: 'Settings', icon: <Settings />, path: '/settings' },
    { name: 'Logout', icon: <LogoutRounded />, path: '/logout' },
  ]

  const teamsMenu = [
    { name: 'Marketing', icon: <Circle sx={{ color: 'orange', height: '12px'}} />, path: '/settings' },
    { name: 'Development', icon: <Circle sx={{ color: 'blue', height: '12px'}} />, path: '/logout' },
  ]

  const payments: TableData[] = [
    { id: 1, image: people, name: 'Emma Ryan Jr.', date: 'Mar 9, 2023', value: '$4,823', status: 'done', type: 'Salary' },
    { id: 2, image: people, name: 'Justin Weber', date: 'Mar 9, 2023', value: '$3,937', status: 'pending', type: 'Bonus'},
    { id: 3, image: people, name: 'Emma Ryan Jr.', date: 'Mar 9, 2023', value: '$4,823', status: 'done', type: 'Salary' },
    { id: 4, image: people, name: 'Justin Weber', date: 'Mar 9, 2023', value: '$3,937', status: 'pending', type: 'Bonus'},
    { id: 5, image: people, name: 'Emma Ryan Jr.', date: 'Mar 9, 2023', value: '$4,823', status: 'done', type: 'Salary' },
    { id: 6, image: people, name: 'Justin Weber', date: 'Mar 9, 2023', value: '$3,937', status: 'pending', type: 'Bonus'},
  ]
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{
        display: 'flex',
        height: '100%',
        backgroundColor: '#f5f4f7',
      }}>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '13%',
          backgroundColor: 'white',
          padding: '2rem',
        }}>
          <Box>
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '2rem',
            }}>
              <img src={logo} alt="logo" height='20px'/>
              <Typography fontSize='20px' fontWeight='bold' sx={{ marginLeft: '1rem', color: '#2e2e2e'}}>Veritas</Typography>
            </Box>
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '800px',
            }}>
              <Box sx={{
                display: 'flex',
                flexDirection: 'column',
              }}>
                <Typography fontSize='12px' fontWeight='bold' sx={{ marginTop: '1rem', marginBottom: '1rem', color: 'gray', letterSpacing: '0.2em'}}>MAIN MENU</Typography>
                {menu.map((item) => {
                  return (
                    <Box sx={{
                      display: 'flex',
                      flexDirection: 'row',
                    }}>
                      <ButtonMenu startIcon={item.icon}> {item.name} </ButtonMenu>
                    </Box>
                  )})
                }
              </Box>

              <Box sx={{
                display: 'flex',
                flexDirection: 'column',
              }}>
                <Typography fontSize='12px' fontWeight='bold' sx={{ marginTop: '1rem', marginBottom: '1rem', color: 'gray', letterSpacing: '0.2em'}}>TEAMS</Typography>
                {teamsMenu.map((item) => {
                  return (
                    <Box sx={{
                      display: 'flex',
                      flexDirection: 'row',
                    }}>
                      <ButtonMenu startIcon={item.icon}> {item.name} </ButtonMenu>
                    </Box>
                  )})
                }
              </Box>


              <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
              }}>
                {bottomMenu.map((item) => {
                  return (
                    <Box sx={{
                      display: 'flex',
                      flexDirection: 'row',
                    }}>
                      <ButtonMenu startIcon={item.icon}> {item.name} </ButtonMenu>
                    </Box>
                  )})
                }
              </Box>
            </Box>

          </Box>
        </Box>

        <Box sx={{ padding: '2rem', width: '100%' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', marginBottom:'2rem'}}>
            <Typography fontSize='28px' fontWeight='bold' marginRight='4rem'>Analytics</Typography>
            <SwitchDiv />
          </Box>
          <Box sx= {{ display: 'flex', gap: '2rem'}}> 
            <DashedCards>
              <Box>
                <Box sx={{ display: 'flex', alignItems: 'flex-start'}}>
                  <Typography fontSize='20px' fontWeight='bold'>Teams Payments</Typography>
                  <IconButton><Notifications/></IconButton>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '10px'}}>
                  <IconButton sx={{ height: '12px', padding: 0, color: 'blue'}}><CalendarMonth/></IconButton>
                  <Typography fontSize='12px' paddingLeft='5px'>07 Dec approval</Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'flex-end', marginTop: '10px'}}>
                {payments.slice(0,3).map((user) => {
                  return(
                    <CardMedia component="img" image={user.image} sx={{ width: '50px', height: '50px', borderRadius: '50%'}}/>
                  )
                })}
              </Box>
            </DashedCards>

            <DashedCards>
              <Box sx={{ display: 'flex', alignItems: 'center'}}>
                <IconButton><Insights sx={{color: 'blue'}}/></IconButton>
                <Typography fontSize='20px' fontWeight='bold'>Savings</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center'}}>
                <CardMedia component="img" image={grafico2} sx={{ height: '150px'}}/>
              </Box>
            </DashedCards>

            <SolidCards sx={{ padding: '20px' }}>
              <Box>
                <Box sx={{ display: 'flex', alignItems: 'flex-start'}}>
                  <Typography fontSize='20px' fontWeight='bold'>Income Statistics</Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '10px'}}>
                <CardMedia component="img" image={grafico} sx={{ height: '150px'}}/>
              </Box>
            </SolidCards>

            <HalfCards sx={{}}>
              <Box sx={{padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: '#30b3b9', height: '75%', color: 'white'}}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start'}}>
                  <Box sx={{ display: 'flex', flexDirection:'column'}}>
                    <Typography fontSize='30px' fontWeight='semibold'>$95.9</Typography>
                    <Typography fontSize='10px' fontWeight='semibold'>Per month</Typography>
                  </Box>
                  <IconButton sx={{color: 'white'}}><AutoAwesome/></IconButton>
                </Box>
                <Box>
                  <Typography fontSize='23px' fontWeight='semibold' color='white'>Choose Best Plan For You!</Typography>
                </Box>
                
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-around', padding: '10px'}}>
                <ButtonSecondary sx={{ fontSize: '12px'}}>Details</ButtonSecondary>
                <ButtonPrimary sx={{ fontSize: '12px'}}>Upgrade</ButtonPrimary>
              </Box>
            </HalfCards >
          </Box>

          <Typography fontSize='20px' fontWeight='bold' margin='3rem 0 1rem 0'>Recently Payments</Typography>
          <Box sx={{ display:'flex', gap: '2rem'}}>
              {payments.slice(0,3).map((payment) => {
                return(
                  <CardPayments>
                    <Box sx={{ display: 'flex', alignItems: 'center'}}>
                      <CardMedia component="img" image={payment.image} sx={{ width: '50px', height: '50px', borderRadius: '20%'}} />
                      <Box>
                        <Typography fontSize='14px' fontWeight='bold' sx={{ marginLeft: '1rem'}}>{payment.name}</Typography>
                        <Typography fontSize='12px' sx={{ marginLeft: '1rem'}}>{payment.date}</Typography>
                      </Box>
                    </Box>
                      <Typography fontSize='16px' fontWeight='bold' sx={{ marginLeft: '1rem'}}>{payment.value}</Typography>
                    { payment.status === 'done' ? <ButtonSucess>Done</ButtonSucess> : <ButtonPending>Pending</ButtonPending>}
                    <IconButton><MoreHoriz/></IconButton>
                  </CardPayments>
                )
              })}
          </Box>
          
          <BasicTable data={payments}/>
        </Box>
        
        
      </Box>
    </ThemeProvider>
  );
}
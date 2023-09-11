import {useState} from 'react';
import {Link} from 'react-router-dom';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
//import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
//import Diversity1Icon from '@mui/icons-material/Diversity1';
import {Box, Typography} from "@mui/material";
import FlexBetween from '@/components/FlexBetween';
type Props = object;

const Navbar = (props: Props) => {
    const [selected, setSelected] = useState<string>('dashboard');
  return (
    <FlexBetween mb="0.25rem" p="0.5rem 0rem" color="#d1d3da">
        {/*Left side*/}
        <FlexBetween gap = "0.75rem">
        <VolunteerActivismIcon sx={{fontSize: '40px' ,color:'#0d0c4e'}}/>
        <Typography variant="h4" fontSize="20px" style={{ color: '#0d0c4e' }}>CardioScanPro</Typography>
        </FlexBetween>

        {/*Right side*/}
        <FlexBetween gap = "2rem">
            <Box sx={{"&:hover":{color:"#72bde3"}}}>
                <Link 
                    to='/'
                    onClick={()=>setSelected("dashboard")}
                    style={{color: selected ==="dashboard"?"#0d0c4e":"inherit",textDecoration:"inherit"}}>
                    Dashboard
                </Link>
            </Box>
            <Box sx={{"&:hover":{color:"#72bde3"}}}>
            <Link 
                    to='/predictions'
                    onClick={()=>setSelected("predictions")}
                    style={{color: selected ==="predictions"?"#0d0c4e":"inherit",textDecoration:"inherit"}}>
                    Predictions
                </Link>
            </Box>
        </FlexBetween>
    </FlexBetween>

  )
}

export default Navbar
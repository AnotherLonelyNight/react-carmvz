import React from 'react';
import { useMinimalSelectStyles } from '@mui-treasury/styles/select/minimal';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import { deepPurple, grey } from '@material-ui/core/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SettingsIcon from '@mui/icons-material/Settings';
import RefreshIcon from '@mui/icons-material/Refresh';
import Tooltip from '@mui/material/Tooltip';

const iconComponent = (props) => {
  return <ExpandMoreIcon className={props.className} />;
};

export default function Demo() {
  const [age, setAge] = React.useState('10');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <FormControl sx={{ m: 1 }}>
        <Select
          IconComponent={iconComponent}
          sx={{
            minWidth: '180px',
            height: '42px',
            borderRadius: '12px',
            color: '#666',
            fontFamily: 'Roboto',
            '& .MuiSelect-outlined': {
              paddingTop: '12px',
              paddingBottom: '12px',
            },
            '& .MuiOutlinedInput-notchedOutline': {
              display: 'none',
            },
            '&': {
              boxShadow: '0px 5px 20px -2px rgba(0,0,0,0.14)',
              border: 'none',
            },
          }}
          value={age}
          onChange={handleChange}
          MenuProps={{
            sx: {
              '& .MuiMenu-list li': {
                padding: '0px 16px',
                margin: '4px 6px',
                borderRadius: '8px',
                minHeight: '38px',
              },

              '& .MuiPopover-paper': {
                borderRadius: '12px',
                marginTop: '6px',
              },
            },
          }}
        >
          <MenuItem value={10} disableRipple>
            C
          </MenuItem>
          <MenuItem value={20} disableRipple>
            C++
          </MenuItem>
          <MenuItem value={30} disableRipple>
            Golang
          </MenuItem>
          <MenuItem value={40} disableRipple>
            Java
          </MenuItem>
          <MenuItem value={50} disableRipple>
            JavaScript
          </MenuItem>
          <MenuItem value={60} disableRipple>
            Python2
          </MenuItem>
          <MenuItem value={70} disableRipple>
            Python3
          </MenuItem>
        </Select>
      </FormControl>
      <div style={{ display: 'flex' }}>
        <Tooltip title="重置" arrow>
          <Button
            sx={{
              minWidth: '20px',
              width: '40px',
              height: '40px',
              borderRadius: '12px',
              backgroundColor: 'white',
              boxShadow: '0px 4px 10px -2px rgba(0,0,0,0.14)',
              '&:hover': {
                backgroundColor: '#fafafa',
                boxShadow: '0px 4px 10px -2px rgba(0,0,0,0.25)',
              },
            }}
            variant="contained"
            disableRipple
          >
            <RefreshIcon style={{ color: '#666' }} />
          </Button>
        </Tooltip>
        <Tooltip title="设置" arrow>
          <Button
            sx={{
              marginLeft: '12px',
              minWidth: '20px',
              width: '40px',
              height: '40px',
              borderRadius: '12px',
              backgroundColor: 'white',
              boxShadow: '0px 4px 10px -2px rgba(0,0,0,0.14)',
              '&:hover': {
                backgroundColor: '#fafafa',
                boxShadow: '0px 4px 10px -2px rgba(0,0,0,0.25)',
              },
            }}
            variant="contained"
            disableRipple
          >
            <SettingsIcon style={{ color: '#666' }} />
          </Button>
        </Tooltip>
      </div>
    </div>
  );
}

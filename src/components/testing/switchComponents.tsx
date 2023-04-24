import { Divider, Grid, Typography } from '@mui/material';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import CustomSwitch from 'core/components/formFields/customSwitch';

const SwitchComponents = () => {
  return (
    <>
      <Typography variant="h4" sx={{ mt: 4 }}>
        Switch
      </Typography>
      <Divider light />
      <Grid container spacing={4} sx={{ mt: 2 }}>
        <Grid item xs={3}>
          <Switch
            disableRipple
            defaultChecked={true}
            value="a"
            name="checkbox-buttons"
            inputProps={{ 'aria-label': 'A' }}
          />
          <Switch
            disableRipple
            checked={false}
            value="b"
            name="checkbox-buttons"
            inputProps={{ 'aria-label': 'B' }}
          />
          <Switch
            checked={true}
            disabled={true}
            value="c"
            name="checkbox-buttons"
            inputProps={{ 'aria-label': 'C' }}
          />
          <Switch
            checked={false}
            disabled={true}
            value="d"
            name="checkbox-buttons"
            inputProps={{ 'aria-label': 'D' }}
          />
        </Grid>
        <Grid item xs={3}>
          <FormControl>
            <FormGroup>
              <FormControlLabel value="One" control={<CustomSwitch />} label="One" />
              <FormControlLabel value="Two" control={<Switch />} label="Two" />
            </FormGroup>
          </FormControl>
        </Grid>
        <Grid item xs={3}>
          <CustomSwitch checked />
          <CustomSwitch />
        </Grid>
        <Grid item xs={3}>
          <Switch
            disableRipple
            checked={'a' === 'a'}
            value="a"
            size="small"
            name="checkbox-buttons"
            inputProps={{ 'aria-label': 'A' }}
          />
          <Switch
            disableRipple
            checked={false}
            value="b"
            name="checkbox-buttons"
            inputProps={{ 'aria-label': 'B' }}
          />
          <Switch
            checked={true}
            value="c"
            size="medium"
            name="checkbox-buttons"
            inputProps={{ 'aria-label': 'C' }}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default SwitchComponents;

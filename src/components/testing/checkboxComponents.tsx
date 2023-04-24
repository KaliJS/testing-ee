import { Divider, Grid, Typography } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import CustomCheckbox from 'core/components/formFields/customCheckbox';

const RadioComponents = () => {
  return (
    <>
      <Typography variant="h4" sx={{ mt: 4 }}>
        Checkbox
      </Typography>
      <Divider light />
      <Grid container spacing={4} sx={{ mt: 2 }}>
        <Grid item xs={3}>
          <Checkbox
            disableRipple
            defaultChecked={true}
            value="a"
            name="checkbox-buttons"
            inputProps={{ 'aria-label': 'A' }}
          />
          <Checkbox
            disableRipple
            checked={false}
            value="b"
            name="checkbox-buttons"
            inputProps={{ 'aria-label': 'B' }}
          />
          <Checkbox
            checked={true}
            disabled={true}
            value="c"
            name="checkbox-buttons"
            inputProps={{ 'aria-label': 'C' }}
          />
          <Checkbox
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
              <FormControlLabel value="One" control={<CustomCheckbox />} label="One" />
              <FormControlLabel value="Two" control={<Checkbox />} label="Two" />
            </FormGroup>
          </FormControl>
        </Grid>
        <Grid item xs={3}>
          {/* <CustomCheckbox checked={true} /> */}
          <CustomCheckbox color={'primary'} />
        </Grid>
        <Grid item xs={3}>
          <Checkbox
            disableRipple
            checked={'a' === 'a'}
            value="a"
            size="small"
            name="checkbox-buttons"
            inputProps={{ 'aria-label': 'A' }}
          />
          <Checkbox
            disableRipple
            checked={false}
            value="b"
            name="checkbox-buttons"
            inputProps={{ 'aria-label': 'B' }}
          />
          <Checkbox
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

export default RadioComponents;

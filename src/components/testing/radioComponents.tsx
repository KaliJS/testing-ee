import { useState } from 'react';
import { Divider, Grid, Typography } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import CustomRadio from 'core/components/formFields/customRadio';

const RadioComponents = () => {
  const [value, setValue] = useState<string>('female');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
  };

  return (
    <>
      <Typography variant="h4" sx={{ mt: 4 }}>
        Radio
      </Typography>
      <Divider light />
      <Grid container spacing={4} sx={{ mt: 2 }}>
        <Grid item xs={3}>
          <Radio
            disableRipple
            checked
            value="a"
            name="radio-buttons"
            inputProps={{ 'aria-label': 'A' }}
          />
          <Radio disableRipple value="b" name="radio-buttons" inputProps={{ 'aria-label': 'B' }} />
          <Radio
            checked
            disabled={true}
            value="c"
            name="radio-buttons"
            inputProps={{ 'aria-label': 'C' }}
          />
          <Radio
            disabled={true}
            value="d"
            name="radio-buttons"
            inputProps={{ 'aria-label': 'D' }}
          />
        </Grid>
        <Grid item xs={3}>
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel value="female" control={<CustomRadio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={3}>
          <CustomRadio checked />
          <CustomRadio />
          <CustomRadio disabled />
        </Grid>
        <Grid item xs={3}>
          <Radio
            disableRipple
            checked={'a' === 'a'}
            value="a"
            size="small"
            name="radio-buttons"
            inputProps={{ 'aria-label': 'A' }}
          />
          <Radio
            disableRipple
            checked={false}
            value="b"
            name="radio-buttons"
            inputProps={{ 'aria-label': 'B' }}
          />
          <Radio
            checked={true}
            value="c"
            size="medium"
            name="radio-buttons"
            inputProps={{ 'aria-label': 'C' }}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default RadioComponents;

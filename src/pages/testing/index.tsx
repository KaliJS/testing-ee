import { Paper } from '@mui/material';
import InputComponents from 'components/testing/inputComponents';
import SearchComponents from 'components/testing/searchComponents';
import SelectComponents from 'components/testing/selectComponents';
import ButtonComponents from 'components/testing/buttonComponents';
import RadioComponents from 'components/testing/radioComponents';
import CheckboxComponents from 'components/testing/checkboxComponents';
import SwitchComponents from 'components/testing/switchComponents';
import AvatarComponents from 'components/testing/avatarComponents';
import ChipComponents from 'components/testing/chipComponents';
import SnackbarComponents from 'components/testing/snackbarComponents';

const Testing = () => {
  return (
    <Paper sx={{ p: 3 }}>
      <InputComponents />
      <SearchComponents />
      <SelectComponents />
      <ButtonComponents />
      <RadioComponents />
      <CheckboxComponents />
      <SwitchComponents />
      <AvatarComponents />
      <ChipComponents />
      <SnackbarComponents />
    </Paper>
  );
};

export default Testing;

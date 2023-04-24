import { Divider, Grid, Typography, useTheme, Button } from '@mui/material';
// import { showSnackbar } from 'core/Store/snackbar/slice';
import { useDispatch } from 'react-redux';

const SnackbarComponents = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  return (
    <>
      <Typography variant="h4" sx={{ mb: 1, mt: 2 }}>
        Snackbar
      </Typography>
      <Divider light />

      <Grid container spacing={4}>
        <Grid item xs={2}>
          <Button
            onClick={() => {
              // dispatch(showSnackbar('This is message', 'primary', 3000));
            }}
            color="primary"
            variant="contained"
          >
            Primary
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button
            onClick={() => {
              // dispatch(showSnackbar('This is message', 'success', 3000));
            }}
            color="success"
            variant="contained"
          >
            Success
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button
            onClick={() => {
              // dispatch(showSnackbar('This is message', 'warning', 3000));
            }}
            color="warning"
            variant="contained"
          >
            Warning
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button
            onClick={() => {
              // dispatch(showSnackbar('This is message', 'info', 3000));
            }}
            color="info"
            variant="contained"
          >
            Info
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button
            onClick={() => {
              // dispatch(showSnackbar('This is message', 'error', 3000));
            }}
            color="error"
            variant="contained"
          >
            Error
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button
            onClick={() => {
              // dispatch(showSnackbar('This is message', 'secondary', 3000));
            }}
            variant="outlined"
          >
            Secondary
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default SnackbarComponents;

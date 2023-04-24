import { useState } from 'react';
import { Divider, Button, Grid, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import SaveIcon from '@mui/icons-material/Save';
import LoadingButton from '@mui/lab/LoadingButton';

const ButtonComponents = () => {
  const [loading, setLoading] = useState<boolean>(false);
  function handleClick() {
    setLoading(true);
  }
  return (
    <>
      <Typography variant="h4" sx={{ mb: 1 }}>
        Button
      </Typography>
      <Divider light />
      <Typography variant="h6" sx={{ mt: 2 }}>
        Medium
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={2}>
          <Button variant="text">Text</Button>
        </Grid>
        <Grid item xs={2}>
          <Button variant="contained">Contained</Button>
        </Grid>
        <Grid item xs={2}>
          <Button variant="outlined">Outlined</Button>
        </Grid>
        <Grid item xs={2}>
          <Button variant="contained" disabled>
            Disabled
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button variant="contained" disableElevation>
            Contained
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button variant="outlined" disabled>
            Outlined
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={4} sx={{ mt: 1 }}>
        <Grid item xs={2}>
          <Button variant="outlined" startIcon={<DeleteIcon />}>
            Delete
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button variant="contained" endIcon={<SendIcon />}>
            Send
          </Button>
        </Grid>
        <Grid item xs={2}>
          <LoadingButton onClick={handleClick} loading={loading} variant="outlined" disabled>
            <span>disabled</span>
          </LoadingButton>
        </Grid>
        <Grid item xs={2}>
          <LoadingButton
            onClick={handleClick}
            loading={loading}
            loadingIndicator="Loading…"
            variant="outlined"
          >
            <span>Fetch data</span>
          </LoadingButton>
        </Grid>
        <Grid item xs={2}>
          <LoadingButton
            onClick={handleClick}
            endIcon={<SendIcon />}
            loading={loading}
            loadingPosition="end"
            variant="contained"
          >
            <span>Send</span>
          </LoadingButton>
        </Grid>
        <Grid item xs={2}>
          <LoadingButton
            color="secondary"
            onClick={handleClick}
            loading={loading}
            loadingPosition="start"
            startIcon={<SaveIcon />}
            variant="contained"
          >
            <span>Save</span>
          </LoadingButton>
        </Grid>
      </Grid>

      <Typography variant="h6" sx={{ mt: 2 }}>
        Small
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={2}>
          <Button size="small" variant="text">
            Text
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button size="small" variant="contained">
            Contained
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button size="small" variant="outlined">
            Outlined
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button size="small" variant="contained" disabled>
            Disabled
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button size="small" variant="contained" disableElevation>
            Contained
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button size="small" variant="outlined" disabled>
            Outlined
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={4} sx={{ mt: 1 }}>
        <Grid item xs={2}>
          <Button size="small" variant="outlined" startIcon={<DeleteIcon />}>
            Delete
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button size="small" variant="contained" endIcon={<SendIcon />}>
            Send
          </Button>
        </Grid>
        <Grid item xs={2}>
          <LoadingButton
            size="small"
            onClick={handleClick}
            loading={loading}
            variant="outlined"
            disabled
          >
            <span>disabled</span>
          </LoadingButton>
        </Grid>
        <Grid item xs={2}>
          <LoadingButton
            size="small"
            onClick={handleClick}
            loading={loading}
            loadingIndicator="Loading…"
            variant="outlined"
          >
            <span>Fetch data</span>
          </LoadingButton>
        </Grid>
        <Grid item xs={2}>
          <LoadingButton
            size="small"
            onClick={handleClick}
            endIcon={<SendIcon />}
            loading={loading}
            loadingPosition="end"
            variant="contained"
          >
            <span>Send</span>
          </LoadingButton>
        </Grid>
        <Grid item xs={2}>
          <LoadingButton
            size="small"
            color="secondary"
            onClick={handleClick}
            loading={loading}
            loadingPosition="start"
            startIcon={<SaveIcon />}
            variant="contained"
          >
            <span>Save</span>
          </LoadingButton>
        </Grid>
      </Grid>

      <Typography variant="h6" sx={{ mt: 2 }}>
        Large
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={2}>
          <Button size="large" variant="text">
            Text
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button size="large" variant="contained">
            Contained
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button size="large" variant="outlined">
            Outlined
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button size="large" variant="contained" disabled>
            Disabled
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button size="large" variant="contained" disableElevation>
            Contained
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button size="large" variant="outlined" disabled>
            Outlined
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={4} sx={{ mt: 1 }}>
        <Grid item xs={2}>
          <Button size="large" variant="outlined" startIcon={<DeleteIcon />}>
            Delete
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button size="large" variant="contained" endIcon={<SendIcon />}>
            Send
          </Button>
        </Grid>
        <Grid item xs={2}>
          <LoadingButton
            size="large"
            onClick={handleClick}
            loading={loading}
            variant="outlined"
            disabled
          >
            <span>disabled</span>
          </LoadingButton>
        </Grid>
        <Grid item xs={2}>
          <LoadingButton
            size="large"
            onClick={handleClick}
            loading={loading}
            loadingIndicator="Loading…"
            variant="outlined"
          >
            <span>Fetch data</span>
          </LoadingButton>
        </Grid>
        <Grid item xs={2}>
          <LoadingButton
            size="large"
            onClick={handleClick}
            endIcon={<SendIcon />}
            loading={loading}
            loadingPosition="end"
            variant="contained"
          >
            <span>Send</span>
          </LoadingButton>
        </Grid>
        <Grid item xs={2}>
          <LoadingButton
            size="large"
            color="secondary"
            onClick={handleClick}
            loading={loading}
            loadingPosition="start"
            startIcon={<SaveIcon />}
            variant="contained"
          >
            <span>Save</span>
          </LoadingButton>
        </Grid>
      </Grid>
      <Typography variant="h6" sx={{ mt: 2, mb: 2 }}>
        Color
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={2}>
          <Button color="primary" variant="contained">
            Primary
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button color="success" variant="contained">
            Success
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button color="warning" variant="contained">
            Warning
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button color="info" variant="contained">
            Info
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button color="error" variant="contained">
            Error
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button variant="outlined">Grey</Button>
        </Grid>
      </Grid>
    </>
  );
};

export default ButtonComponents;

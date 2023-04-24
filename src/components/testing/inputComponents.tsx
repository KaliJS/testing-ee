import Input from 'core/components/formFields/input';
import { Divider, Grid, Typography } from '@mui/material';

const InputComponents = () => {
  return (
    <>
      <Typography variant="h4" sx={{ mb: 1 }}>
        Input
      </Typography>
      <Divider light />
      <Grid container spacing={4} sx={{ mt: 1 }}>
        <Grid item xs={4}>
          <Input
            name="name"
            label="( small & autoFocused )"
            placeholder="Enter name"
            value=""
            autoFocus={true}
            size="small"
            handleChange={(value: string): void => {
              console.log(value);
            }}
            actionButton
          />
        </Grid>
        <Grid item xs={4}>
          <Input
            name="name"
            label="( small filled )"
            value="John Duo"
            size="small"
            handleChange={(value: string): void => {
              console.log(value);
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <Input
            name="name"
            label="( small Error )"
            value=""
            size="small"
            showError={true}
            errorMessage={'Field is required'}
            handleChange={(value: string): void => {
              console.log(value);
            }}
          />
        </Grid>
      </Grid>
      <Grid container spacing={4} sx={{ mt: 1 }}>
        <Grid item xs={4}>
          <Input
            name="name"
            label="( default )"
            placeholder="Enter name"
            value=""
            handleChange={(value: string): void => {
              console.log(value);
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <Input
            name="name"
            label="( filled )"
            value="John Duo"
            handleChange={(value: string): void => {
              console.log(value);
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <Input
            name="name"
            label="( Error )"
            value=""
            showError={true}
            errorMessage={'Field is required'}
            handleChange={(value: string): void => {
              console.log(value);
            }}
          />
        </Grid>
      </Grid>
      <Grid container spacing={4} sx={{ mt: 1 }}>
        <Grid item xs={4}>
          <Input
            name="name"
            label="( caption )"
            placeholder="Enter name"
            value="John Duo"
            captionMessage="This is caption"
            handleChange={(value: string): void => {
              console.log(value);
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <Input
            name="name"
            label="( caption success )"
            value="John Duo"
            success={true}
            captionMessage="This is caption"
            handleChange={(value: string): void => {
              console.log(value);
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <Input
            name="name"
            label="( multi line )"
            value=""
            multiline={true}
            rows={4}
            handleChange={(value: string): void => {
              console.log(value);
            }}
            actionButton
          />
        </Grid>
      </Grid>
      <Grid container spacing={4} sx={{ mt: 1 }}>
        <Grid item xs={4}>
          <Input
            name="name"
            label="( ReadOnly )"
            readOnly={true}
            placeholder="Enter name"
            value="John Duo"
            handleChange={(value: string): void => {
              console.log(value);
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <Input
            name="name"
            label="( disabled )"
            value="John Duo"
            disabled
            handleChange={(value: string): void => {
              console.log(value);
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <Input
            name="name"
            label="( multi line )"
            value=""
            multiline={true}
            rows={4}
            success={true}
            captionMessage="This is caption"
            handleChange={(value: string): void => {
              console.log(value);
            }}
          />
        </Grid>
      </Grid>
      <Grid container spacing={4} sx={{ mt: 1 }}>
        <Grid item xs={4}>
          <Input
            name="name"
            label="Search ( default )"
            placeholder="Search for..."
            value=""
            showIcon={true}
            handleChange={(value: string): void => {
              console.log(value);
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <Input
            name="name"
            label="( end Icon )"
            value="John Duo"
            showIcon={true}
            iconPosition={'end'}
            placeholder="Search for..."
            handleChange={(value: string): void => {
              console.log(value);
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <Input
            name="name"
            label="( different icon )"
            value=""
            showIcon={true}
            iconPosition={'end'}
            icon={'account'}
            captionMessage="This is caption"
            handleChange={(value: string): void => {
              console.log(value);
            }}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default InputComponents;

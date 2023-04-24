import { Divider, Grid, Typography } from '@mui/material';
import Select from 'core/components/formFields/select';

const SelectComponents = () => {
  return (
    <>
      <Typography variant="h4" sx={{ mb: 1 }}>
        Select
      </Typography>
      <Divider light />
      <Grid container spacing={4} sx={{ mt: 1 }}>
        <Grid item xs={4}>
          <Select
            name="name"
            label="( Select )"
            size="small"
            placeholder="Search for..."
            options={[
              { id: 1, title: 'Option 1' },
              { id: 2, title: 'Option 2' },
              { id: 3, title: 'Option 3' },
              { id: 4, title: 'Option 4' },
            ]}
            value={null}
            handleChange={(value) => {
              console.log(value);
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <Select
            name="name"
            label="( Select selected )"
            placeholder="Search for..."
            size="small"
            options={[
              { id: 1, title: 'Option 1' },
              { id: 2, title: 'Option 2' },
              { id: 3, title: 'Option 3' },
              { id: 4, title: 'Option 4' },
            ]}
            value={{ id: 2, title: 'Option 2' }}
            handleChange={(value) => {
              console.log(value);
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <Select
            name="name"
            label="( readonly )"
            placeholder="Search for..."
            size="small"
            options={[
              { id: 1, title: 'Option 1' },
              { id: 2, title: 'Option 2' },
              { id: 3, title: 'Option 3' },
              { id: 4, title: 'Option 4' },
            ]}
            value={{ id: 2, title: 'Option 2' }}
            readOnly={true}
            handleChange={(value) => {
              console.log(value);
            }}
          />
        </Grid>
      </Grid>
      <Grid container spacing={4} sx={{ mt: 1 }}>
        <Grid item xs={4}>
          <Select
            name="name"
            label="( Select )"
            placeholder="Search for..."
            options={[
              { id: 1, title: 'Option 1' },
              { id: 2, title: 'Option 2' },
              { id: 3, title: 'Option 3' },
              { id: 4, title: 'Option 4' },
            ]}
            value={null}
            handleChange={(value) => {
              console.log(value);
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <Select
            name="name"
            label="( Select selected )"
            placeholder="Search for..."
            options={[
              { id: 1, title: 'Option 1' },
              { id: 2, title: 'Option 2' },
              { id: 3, title: 'Option 3' },
              { id: 4, title: 'Option 4' },
            ]}
            value={{ id: 2, title: 'Option 2' }}
            handleChange={(value) => {
              console.log(value);
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <Select
            name="name"
            label="( readonly )"
            placeholder="Search for..."
            options={[
              { id: 1, title: 'Option 1' },
              { id: 2, title: 'Option 2' },
              { id: 3, title: 'Option 3' },
              { id: 4, title: 'Option 4' },
            ]}
            value={{ id: 2, title: 'Option 2' }}
            readOnly={true}
            handleChange={(value) => {
              console.log(value);
            }}
          />
        </Grid>
      </Grid>
      <Grid container spacing={4} sx={{ mt: 1 }}>
        <Grid item xs={4}>
          <Select
            name="name"
            label="( Select multiple )"
            placeholder="Search for..."
            multiple={true}
            options={[
              { id: 1, title: 'Option 1' },
              { id: 2, title: 'Option 2' },
              { id: 3, title: 'Option 3' },
              { id: 4, title: 'Option 4' },
            ]}
            value={[]}
            handleChange={(value) => {
              console.log(value);
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <Select
            name="name"
            label="( Select multiple selected )"
            placeholder="Search for..."
            multiple={true}
            options={[
              { id: 1, title: 'Option 1' },
              { id: 2, title: 'Option 2' },
              { id: 3, title: 'Option 3' },
              { id: 4, title: 'Option 4' },
            ]}
            value={[{ id: 2, title: 'Option 2' }]}
            handleChange={(value) => {
              console.log(value);
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <Select
            name="name"
            label="( multiple readonly )"
            placeholder="Search for..."
            multiple={true}
            options={[
              { id: 1, title: 'Option 1' },
              { id: 2, title: 'Option 2' },
              { id: 3, title: 'Option 3' },
              { id: 4, title: 'Option 4' },
            ]}
            value={[{ id: 2, title: 'Option 2' }]}
            readOnly={true}
            handleChange={(value) => {
              console.log(value);
            }}
          />
        </Grid>
      </Grid>
      <Grid container spacing={4} sx={{ mt: 1 }}>
        <Grid item xs={4}>
          <Select
            name="name"
            label="( Select multiple disabled )"
            placeholder="Search for..."
            multiple={true}
            disabled={true}
            options={[
              { id: 1, title: 'Option 1' },
              { id: 2, title: 'Option 2' },
              { id: 3, title: 'Option 3' },
              { id: 4, title: 'Option 4' },
            ]}
            value={[{ id: 2, title: 'Option 2' }]}
            handleChange={(value) => {
              console.log(value);
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <Select
            name="name"
            label="( Select multiple selected )"
            placeholder="Search for..."
            multiple={true}
            loading={true}
            options={[
              { id: 1, title: 'Option 1' },
              { id: 2, title: 'Option 2' },
              { id: 3, title: 'Option 3' },
              { id: 4, title: 'Option 4' },
            ]}
            value={[]}
            handleChange={(value) => {
              console.log(value);
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <Select
            name="name"
            label="( multiple readonly )"
            placeholder="Search for..."
            multiple={true}
            captionMessage="This is caption"
            options={[
              { id: 1, title: 'Option 1' },
              { id: 2, title: 'Option 2' },
              { id: 3, title: 'Option 3' },
              { id: 4, title: 'Option 4' },
            ]}
            value={[{ id: 2, title: 'Option 2' }]}
            readOnly={true}
            handleChange={(value) => {
              console.log(value);
            }}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default SelectComponents;

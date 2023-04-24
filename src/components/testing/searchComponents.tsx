import { Divider, Grid, Typography } from '@mui/material';
import Search from 'core/components/formFields/search';

interface Option {
  id: string | number;
  title: string;
}

const SearchComponents = () => {
  return (
    <>
      <Typography variant="h4" sx={{ mb: 1 }}>
        Search
      </Typography>
      <Divider light />
      <Grid container spacing={4} sx={{ mt: 1 }}>
        <Grid item xs={4}>
          <Search
            name="name"
            label="( Search )"
            size="small"
            placeholder="Search for..."
            options={[
              { id: 1, title: 'Option 1' },
              { id: 2, title: 'Option 2' },
              { id: 3, title: 'Option 3' },
              { id: 4, title: 'Option 4' },
            ]}
            value={null}
            handleChange={(value: Option | Option[] | null): void => {
              console.log(value);
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <Search
            name="name"
            label="( Search selected )"
            placeholder="Search for..."
            size="small"
            options={[
              { id: 1, title: 'Option 1' },
              { id: 2, title: 'Option 2' },
              { id: 3, title: 'Option 3' },
              { id: 4, title: 'Option 4' },
            ]}
            value={{ id: 2, title: 'Option 2' }}
            handleChange={(value: Option | Option[] | null): void => {
              console.log(value);
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <Search
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
            handleChange={(value: Option | Option[] | null): void => {
              console.log(value);
            }}
          />
        </Grid>
      </Grid>
      <Grid container spacing={4} sx={{ mt: 1 }}>
        <Grid item xs={4}>
          <Search
            name="name"
            label="( Search )"
            placeholder="Search for..."
            options={[
              { id: 1, title: 'Option 1' },
              { id: 2, title: 'Option 2' },
              { id: 3, title: 'Option 3' },
              { id: 4, title: 'Option 4' },
            ]}
            value={null}
            handleChange={(value: Option | Option[] | null): void => {
              console.log(value);
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <Search
            name="name"
            label="( Search selected )"
            placeholder="Search for..."
            options={[
              { id: 1, title: 'Option 1' },
              { id: 2, title: 'Option 2' },
              { id: 3, title: 'Option 3' },
              { id: 4, title: 'Option 4' },
            ]}
            value={{ id: 2, title: 'Option 2' }}
            handleChange={(value: Option | Option[] | null): void => {
              console.log(value);
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <Search
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
            handleChange={(value: Option | Option[] | null): void => {
              console.log(value);
            }}
          />
        </Grid>
      </Grid>
      <Grid container spacing={4} sx={{ mt: 1 }}>
        <Grid item xs={4}>
          <Search
            name="name"
            label="( Search multiple )"
            placeholder="Search for..."
            multiple={true}
            options={[
              { id: 1, title: 'Option 1' },
              { id: 2, title: 'Option 2' },
              { id: 3, title: 'Option 3' },
              { id: 4, title: 'Option 4' },
            ]}
            value={[]}
            handleChange={(value: Option | Option[] | null): void => {
              console.log(value);
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <Search
            name="name"
            label="( Search multiple selected )"
            placeholder="Search for..."
            multiple={true}
            options={[
              { id: 1, title: 'Option 1' },
              { id: 2, title: 'Option 2' },
              { id: 3, title: 'Option 3' },
              { id: 4, title: 'Option 4' },
            ]}
            value={[{ id: 2, title: 'Option 2' }]}
            handleChange={(value: Option | Option[] | null): void => {
              console.log(value);
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <Search
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
            handleChange={(value: Option | Option[] | null): void => {
              console.log(value);
            }}
          />
        </Grid>
      </Grid>
      <Grid container spacing={4} sx={{ mt: 1 }}>
        <Grid item xs={4}>
          <Search
            name="name"
            label="( Search multiple disabled )"
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
            handleChange={(value: Option | Option[] | null): void => {
              console.log(value);
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <Search
            name="name"
            label="( Search multiple selected )"
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
            handleChange={(value: Option | Option[] | null): void => {
              console.log(value);
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <Search
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
            handleChange={(value: Option | Option[] | null): void => {
              console.log(value);
            }}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default SearchComponents;

import DeleteIcon from '@mui/icons-material/Delete';
import { Divider, Grid, Paper, PaperProps, Stack } from '@mui/material';
import AccordionComponent from 'core/components/accordions/Accordion';
import { AvatarComponent } from 'core/components/avatars/avatar';
import { ButtonComponent } from 'core/components/buttons/button';
import { InfoOutlined } from '@mui/icons-material';
import DefaultPalette from 'core/theme/palette';

import { styled } from '@mui/material/styles';

const Detail = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  color: theme.palette.commonColor.dark,
  backgroundColor: 'transparent',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: theme.palette.commonColor.light,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderRight: `2px solid ${DefaultPalette().primary.main}`,
  },
}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Home() {
  const users = [
    { letter: 'J', bgcolor: '#2196f3' },
    { letter: 'J', bgcolor: '#4caf50' },
    { letter: 'BA', bgcolor: '#f44336' },
  ];

  const accordions = [
    { header: 'Vendor Profile', details: ['Overview', 'Partners', 'Tracking'] },
    { header: 'Vendor Profile', details: ['Overview', 'Partners', 'Tracking'] },
  ];
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <ButtonComponent
            label="Button"
            variants="contained"
            size="medium"
            startIcon={<DeleteIcon />}
            onClick={() => console.log('delete button clicked')}
          />
        </Grid>
        <Grid item xs={12}>
          <AvatarComponent type="group" avatars={users} />
          <Divider />
          <AvatarComponent type="single" avatars={users} />
        </Grid>
        <Grid item xs={12} lg={3}>
          {accordions.map((accordion, i) => {
            return (
              <AccordionComponent
                key={i}
                title={accordion.header.toUpperCase()}
                icon={<InfoOutlined color="warning" sx={{ transform: 'rotate(180deg)' }} />}
                onIconClick={() => {}}
              >
                <Stack direction={'column'} spacing={{ xs: 1, sm: 1, md: 1 }}>
                  {accordion.details.map((detail, j) => {
                    return (
                      <Detail key={j} elevation={0}>
                        {detail}
                      </Detail>
                    );
                  })}
                </Stack>
              </AccordionComponent>
            );
          })}
        </Grid>
        {/* <Grid item xs={12}></Grid> */}
      </Grid>
    </>
  );
}

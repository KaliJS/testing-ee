import { Divider, Chip, Typography, useTheme, Avatar } from '@mui/material';
import Stack from '@mui/material/Stack';

const ChipComponents = () => {
  const theme = useTheme();
  return (
    <>
      <Typography variant="h4" sx={{ mb: 1, mt: 2 }}>
        Chip
      </Typography>
      <Divider light />

      <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
        <Chip onClick={() => {}} variant={'outlined'} label="Avatar" />
        <Chip
          onClick={() => {}}
          sx={{ borderRadius: 40 }}
          variant={'outlined'}
          avatar={<Avatar sx={{ bgcolor: theme.palette.warning.main }}>M</Avatar>}
          label="Avatar"
        />
        <Chip
          onClick={() => {}}
          size={'small'}
          sx={{ borderRadius: 40 }}
          variant={'outlined'}
          avatar={
            <Avatar sizes={'small'} sx={{ bgcolor: theme.palette.info.main }}>
              M
            </Avatar>
          }
          label="Avatar"
        />
        <Chip
          onClick={() => {}}
          sx={{ borderRadius: 40 }}
          variant={'outlined'}
          avatar={<Avatar sx={{ bgcolor: theme.palette.success.main }}>M</Avatar>}
          label="Avatar"
        />
        <Chip
          onClick={() => {}}
          sx={{ borderRadius: 40 }}
          variant={'outlined'}
          avatar={<Avatar sx={{ bgcolor: theme.palette.error.main }}>M</Avatar>}
          label="Avatar"
        />
        <Chip label="Clickable" onClick={() => {}} />
        <Chip label="Clickable" onClick={() => {}} />
        <Chip label="Clickable" onClick={() => {}} />
      </Stack>
    </>
  );
};

export default ChipComponents;

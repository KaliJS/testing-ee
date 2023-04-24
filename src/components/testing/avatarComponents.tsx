import { Divider, Avatar, Grid, Typography, useTheme, AvatarGroup } from '@mui/material';

const AvatarComponents = () => {
  const theme = useTheme();
  return (
    <>
      <Typography variant="h4" sx={{ mb: 1 }}>
        Avatar
      </Typography>
      <Divider light />

      <Grid container spacing={4} sx={{ mt: 2 }}>
        <Grid item xs={3}>
          <Avatar sx={{ bgcolor: theme.palette.warning.main }}>P</Avatar>
          <Avatar sx={{ bgcolor: theme.palette.success.main }}>G</Avatar>
          <Avatar sx={{ bgcolor: theme.palette.info.main }}>I</Avatar>
        </Grid>
        <Grid item xs={3}>
          <AvatarGroup max={4}>
            <Avatar sx={{ bgcolor: theme.palette.warning.main }}>P</Avatar>
            <Avatar sx={{ bgcolor: theme.palette.success.main }}>G</Avatar>
            <Avatar sx={{ bgcolor: theme.palette.info.main }}>I</Avatar>
            <Avatar sx={{ bgcolor: theme.palette.info.main }}>I</Avatar>
            <Avatar sx={{ bgcolor: theme.palette.info.main }}>I</Avatar>
          </AvatarGroup>
        </Grid>
        <Grid item xs={3}>
          <AvatarGroup
            max={4}
            sx={{
              '.MuiAvatar-root': {
                fontSize: 10,
                width: 24,
                height: 24,
              },
            }}
          >
            <Avatar sx={{ bgcolor: theme.palette.warning.main }}>P</Avatar>
            <Avatar sx={{ bgcolor: theme.palette.success.main }}>G</Avatar>
            <Avatar sx={{ bgcolor: theme.palette.info.main }}>I</Avatar>
            <Avatar sx={{ bgcolor: theme.palette.info.main }}>I</Avatar>
            <Avatar sx={{ bgcolor: theme.palette.info.main }}>I</Avatar>
          </AvatarGroup>
        </Grid>
      </Grid>
    </>
  );
};

export default AvatarComponents;

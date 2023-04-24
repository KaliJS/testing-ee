import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers, addUsers, deleteUsers, showDialog, hideDialog } from 'store/user';
import { STATUSES } from 'store/common';
import { RootState, AppDispatch } from 'store';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@mui/material';
import { useApiStatusChangeEffect } from 'core/hooks/apiStatusChange';

const User = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { users, fetchStatus, addStatus, deleteStatus, openDialog } = useSelector(
    (state: RootState) => state.user
  );

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    dispatch(fetchUsers({}));
  }, [dispatch]);

  useApiStatusChangeEffect(deleteStatus, () => {
    if (deleteStatus !== STATUSES.ERROR) {
      dispatch(fetchUsers({}));
    }
  });

  useApiStatusChangeEffect(addStatus, () => {
    if (addStatus !== STATUSES.ERROR) {
      dispatch(fetchUsers({}));
    }
  });

  const handleAddUser = () => {
    dispatch(addUsers({ name, email }));
    handleClose();
  };

  const handleDeleteUser = (id: string) => {
    dispatch(deleteUsers(id));
  };

  const handleClickOpen = () => {
    dispatch(showDialog({}));
  };

  const handleClose = () => {
    dispatch(hideDialog());
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Add User
      </Button>
      <Dialog open={openDialog} onClose={handleClose}>
        <DialogTitle>Add New User</DialogTitle>
        <DialogContent>
          <DialogContentText>Enter the user name and email address.</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            variant="contained"
            onClick={handleAddUser}
            disabled={addStatus === STATUSES.LOADING}
          >
            Add User
          </Button>
        </DialogActions>
      </Dialog>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {[fetchStatus, addStatus, deleteStatus].includes(STATUSES.LOADING) && (
              <TableRow>
                <TableCell colSpan={4}>Loading...</TableCell>
              </TableRow>
            )}
            {[fetchStatus, addStatus, deleteStatus].includes(STATUSES.ERROR) && (
              <TableRow>
                <TableCell colSpan={4}>Error...</TableCell>
              </TableRow>
            )}
            {![fetchStatus, addStatus, deleteStatus].includes(STATUSES.LOADING) &&
              users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    <Button
                      variant="outlined"
                      color="secondary"
                      onClick={() => handleDeleteUser(user.id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default User;

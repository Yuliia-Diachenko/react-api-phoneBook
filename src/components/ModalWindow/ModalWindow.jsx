import * as React from 'react';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import css from "./ModalWindow.module.css";
import { deleteContact } from "../../redux/contacts/operations";
import { useDispatch } from "react-redux";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ModalWindow({id}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id));
       };

  return (
    <div >
      
      <button className={css.button} onClick={handleOpen} >Delete</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className={css.container}>
          <button onClick={handleClose} className={css.iconClose}>x</button>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          WARNING!
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>        
          Are you sure you want to delete this contact?
          </Typography>
          <div className={css.buttonGroop}><button className={css.button} onClick={handleDelete}>Yes</button>
          <button className={css.button} onClick={handleClose}>No</button></div>
        </Box>
      </Modal>
    </div>
  );
}
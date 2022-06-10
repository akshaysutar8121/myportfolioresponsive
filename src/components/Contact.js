import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
//import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import Modal from '@mui/material/Modal';

import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
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

const ContactUs = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current);

    emailjs
      .sendForm(
        'service_hi0of1h',
        'template_1jswoaa',
        form.current,
        'tbn4Wf_3ddu9i-O0u'
      )
      .then(
        (result) => {
          setOpen(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div class="block p-6 rounded-lg shadow-lg bg-white max-w-md m-auto mt-20">
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className=" justify-center items-center ml-20 mr-20 text-indigo-400 p-5">
              <ThumbUpAltIcon sx={{ fontSize: 50, margin: 'auto' }} />
            </div>
            <p className="p-10 text-indigo-700 capitalize">
              thanks for cotacting Akshay sutar..you wil get reply from him soon{' '}
            </p>
          </Box>
        </Modal>
      </div>
      <form ref={form} onSubmit={sendEmail} autocomplete="off">
        <div class="form-group mb-6">
          <input
            type="text"
            class="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleInput7"
            placeholder="Name"
            name="user_name"
          />
        </div>
        <div class="form-group mb-6">
          <input
            type="email"
            class="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleInput8"
            placeholder="Email address"
            name="user_email"
          />
        </div>
        <div class="form-group mb-6">
          <textarea
            class="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
            id="exampleFormControlTextarea13"
            rows="3"
            placeholder="Message"
            name="message"
          ></textarea>
        </div>

        <button
          type="submit"
          class="
      w-full
      px-6
      py-2.5
      bg-indigo-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
        >
          Send
        </button>
      </form>
    </div>
  );
};
export default ContactUs;

import React from 'react';
import { toast, ToastOptions } from 'react-toastify';
import { Button } from '@mui/material';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/toastStyles.css';

export const useToast = () => {

  const toastOptions: ToastOptions = {
    position: 'bottom-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    className: 'custom-toast-container custom-toast custom-toast-body',
  };

  const showToastWithUndo = (
    message: string,
    action: () => void,
    timeout: number
  ) => {
    let toastId: React.ReactText;

    const performAction = () => action();

    // Display toast with Undo option
    toastId = toast(
      <div>
        {message}
        <Button
          sx={{
            marginLeft: 2,
            color: '#0a73ff',
            textDecoration: 'underline',
            fontWeight: 'bold',
          }}
          onClick={() => toast.dismiss(toastId)} // Dismiss toast on Undo click
        >
          Undo
        </Button>
      </div>,
      {
        ...toastOptions,
        autoClose: timeout,
        onClose: () => {
          if (toast.isActive(toastId)) {
            // If toast is still active, no need to perform action
            return;
          }
          performAction(); // Perform action if toast was not dismissed manually
        },
        closeOnClick: false,
      }
    );
  };

  return { showToastWithUndo };
};

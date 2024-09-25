import React, { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { CircularProgress, Box } from '@mui/material';
import router from './router';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <Suspense
      fallback={
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
          }}
        >
          <CircularProgress />
        </Box>
      }
    >
      <ToastContainer
        position="bottom-right"
        autoClose={import.meta.env.VITE_TOAST_TIMEOUT}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        className="custom-toast-container"
        toastClassName="custom-toast"
        bodyClassName="custom-toast-body"
      />

      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;

import Swal from 'sweetalert2';

// error alert

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer);
    toast.addEventListener('mouseleave', Swal.resumeTimer);
  },
});
export const AlertError = (status, message) => {
  return Toast.fire({
    icon: 'error',
    text: `${message}- status: ${status}`,
  });
};

// confirm alert

const Confirm = Swal.mixin({
  position: 'center',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
});
export const ConfirmAlert = () => {
  return Confirm.fire({ icon: 'success' });
};

// info alert

const Info = Swal.mixin({
  position: 'center',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
});
export const InfoAlert = (info) => {
  return Confirm.fire({ icon: 'info', text: `${info}` });
};

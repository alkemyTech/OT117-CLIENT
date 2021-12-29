import Swal from 'sweetalert2';

// error alert

const Toast = Swal.mixin({
  toast: true,
  position: 'bottom',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer);
    toast.addEventListener('mouseleave', Swal.resumeTimer);
  },
});
export const AlertError = (message,status) => {
  return Toast.fire({
    icon: 'error',
    text: status ? `${message} - status: ${status}` : message
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
  return Info.fire({ icon: 'info', text: `${info}` });
};

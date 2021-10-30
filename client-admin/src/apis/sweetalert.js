/* eslint-disable */
import Swal from "sweetalert2";
import "@sweetalert2/theme-dark/dark.min.css";

function swalSuccess(title, text) {
  const data = {
    title,
    text,
    icon: "success",
  };

  return Swal.fire(data);
}

function swalError(title, text) {
  const data = {
    title,
    text,
    icon: "error",
  };

  return Swal.fire(data);
}

function swalLoading(data = "") {
  Swal.fire({
    title: `<i class="fab fa-neos fa-5x fa-spin text-danger mb-3"></i>`,
    html: "Loading, please wait ...",
    showConfirmButton: false,
    allowOutsideClick: false,
    didOpen: () => {
      data;
    },
  });
}

export { swalSuccess, swalError, swalLoading };

// window.onload = () => {
//   print();
// }

document.querySelector('#print-button').addEventListener('click', () => {
  printTicket();
});

function printTicket() {
  window.print();
}

// window.addEventListener('afterprint', () => {
//   close();
// });

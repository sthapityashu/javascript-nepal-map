// Function to close the modal on click
function closeModal(modal, span) {
  modal.style.display = 'none';
}

// Function to open the modal on click
function displayModal(modal, span, index) {
  modal.style.display = 'block';
  span.onclick = function() {
    closeModal(modal, span);
  }
  window.onclick = function(event) {
    if (event.target == modal) {
      closeModal(modal, span);
    }
  }
}

// Get the id of particular id
document.getElementById('dolpa').addEventListener('click', function () {
  var modal = document.getElementById('dolpamodal');
  var span = document.getElementsByClassName('close')[0];
  displayModal(modal, span, 0);
});

document.getElementById('everest').addEventListener('click', function () {
  var modal = document.getElementById('everestmodal');
  var span = document.getElementsByClassName('close')[1];
  displayModal(modal, span, 1);
});

document.getElementById('annapurna').addEventListener('click', function () {
  var modal = document.getElementById('annapurnamodal');
  var span = document.getElementsByClassName('close')[2];
  displayModal(modal, span, 2);
});

document.getElementById('langtang').addEventListener('click', function () {
  var modal = document.getElementById('langtangmodal');
  var span = document.getElementsByClassName('close')[3];
  displayModal(modal, span, 3);
});

document.getElementById('manaslu').addEventListener('click', function () {
  var modal = document.getElementById('manaslumodal');
  var span = document.getElementsByClassName('close')[4];
  displayModal(modal, span, 4);
});

document.getElementById('makalu').addEventListener('click', function () {
  var modal = document.getElementById('makalumodal');
  var span = document.getElementsByClassName('close')[5];
  displayModal(modal, span, 5);
});

document.getElementById('mustang').addEventListener('click', function () {
  var modal = document.getElementById('mustangamodal');
  var span = document.getElementsByClassName('close')[6];
  displayModal(modal, span, 6);
});

document.getElementById('kanchangunga').addEventListener('click', function () {
  var modal = document.getElementById('kanchangungamodal');
  var span = document.getElementsByClassName('close')[7];
  displayModal(modal, span, 7);
});
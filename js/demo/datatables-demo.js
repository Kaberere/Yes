// Call the dataTables jQuery plugin
//$(document).ready(function() {
  //$('#dataTable').DataTable();
//});
$(document).ready(function () {
  $('#dataTable').DataTable({
    "pagingType": "simple_numbers" // "simple" option for 'Previous' and 'Next' buttons only
  });
  $('.dataTables_length').addClass('bs-select');
});


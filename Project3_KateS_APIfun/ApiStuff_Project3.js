
$(function(){



var nasa = {};


nasa.getData = function() {
  $.ajax({
    url: `https://api.nasa.gov/planetary/apod?api_key=58TzVzL1HqJNz0CY60eWqPDnqZ40hVs9gtA8GjFe`,
    type: 'GET',
    dataType: 'json'
  }).then(function(res) {
      console.log(res);
      nasa.showData(res);
  });
}

nasa.showData = function(data) {
  $('.title').text(data.title);
  $('img').attr('src', data.hdurl);
  $('.info').on('click', function() {
        $('.info2').text(data.explanation);
    });
    }

nasa.getData();


});

var content = document.querySelector('body');

function changeBgColor(color) {
  content.style.backgroundColor = color;
}

Router.route('/', function() {
  changeBgColor('red');
});

Router.route('/blue', function() {
  changeBgColor('blue');
});

Router.route('/green', function() {
  changeBgColor('green');
});
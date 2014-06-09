var calculator = (function () {
  function calculate(text) {
    var pattern = /\d+|[+\-*/()]/g;
    var tokens = text.match(pattern);
    return JSON.stringify(tokens);
  }
  
  function setup(div) {
    var input = $('<input></input>',{type: 'text', size: 50});
    var output = $('<div></div>');
    var button = $('<button>Calculate</button>');
    $(div).append(input,button,output);
    
    button.on('click',function (event) {
      output.text(calculate(input.val()));
    });
  }
  
  return {
    calculate: calculate,
    setup: setup
  };
})();

$(document).ready(function () {
  $('.calc').each(function () {
    calculator.setup(this);
  });
});



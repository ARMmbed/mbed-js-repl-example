var repl = new JSRepl();

var led = new DigitalOut(LED1);
var iv = setInterval(function() {
  led.write(led.read() ? 0 : 1);
}, 500);

// in the REPL run: `clearInterval(iv)` to stop LED1 from blinking

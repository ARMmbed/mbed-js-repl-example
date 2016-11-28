var repl = new JSRepl();

var led = new DigitalOut(LED1);
setInterval(function() {
  led.write(led.read() ? 0 : 1);
}, 500);

var led = new DigitalOut(LED1);
var iv = setInterval(function() {
  led.write(led.read() ? 0 : 1);
}, 500);

print("To stop LED1 from blinking, call `clearInterval(" + iv + ")`");

var repl = new JSRepl();

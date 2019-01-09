mouseX = 0;
mouseY = 0;
mouseDown = false;

function main() {
  // Create engine
  var engine = new Engine();

  // Create graphics
  var graphics = new Graphics();

  // Create graph
  var graph = new Graph();

  // Clear screen
  graphics.Clear();

  // Add curve functions here
  JSGraph.AddCurveFunction("Test", TestCurve, 1, 10, false);

  // JSGraph.SetShellFunction(Shells);
  // JSGraph.SetKnotFunction(Knots);
}
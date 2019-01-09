Math 300 Framework
===

This is a small curve drawing framework that is intended to be a testbed for implementing bezier curve functions or similar. It takes care of letting users place points with the mouse, and drawing the resultant sequences of points, so that a student may just focus on implementing a single function that transforms a list of control points into a list of points on a curve. 

Getting Started
---
Download or clone the repository somewhere on your computer. To see what you have so far, just open `framework.html` in any HTMl5 compliant browser, such as Chrome, Safari, or Firefox. While writing code, you can refresh to page to see changes. Use the developer console of whatever browser you are using to see javascript errors and debug.

Adding files
---
To add a file to the project, just create `yourfile.js` in the js folder, and include it in `framework.html` like this:

    <!-- Include your files here -->
    <script type="text/javascript" src="js/yourfile.js"></script>

Creating a curve function
---
All curve functions should be defined in this manner:

    function CurveFunctionName(controlPoints, curvePoints)

`controlPoints` is an `Array` of objects that have `x` and `y` properties. So you can access each control point's x position like this: `controlPoints[0].x`. The control points are the points that the user places on the screen.

`curvePoints` is an `Array` of objects in the same format. It is an output parameter which you must fill with the points defining the curve. The resolution of the curve depends on how many points you fill this array with. The points in this array will be connected with lines by the framework automatically. You could add a point to this array like this:

    curvePoints.push({x: 10, y:10});

Adding your curve function to the list
---
In order to see your curve function show up in the drop down list, you must add it yourself. To do this, edit `main.js` and add the following:

    JSGraph.AddCurveFunction("Curve Function Name", CurveFunctionName, minimumIterations, maximumIterations, showShells);

  The first parameter is the string name to show in the drop down list. The second parameter is the function you want to be called in order to calculate that curve. `minimumIterations` and `maximumIterations` define the range of the iteration slider. It's up to you to figure out a good range for the curve you are using. It will take some experimentation. By default the graph will use the mean value of min and max. `showShells` defines whether or not the shells should be drawn for this curve. Some of the curve functions don't have shells, so this should be set to false in those cases. It is true by default.

Shells and Knots
---
  The `JSGraph` has two other custom functions that can be defined, using `JSGraph.SetShellFunction(func)` and `JSGraph.SetKnotFunction(func)` respectively. Each takes as a parameter the function object to call when each item needs to be recalculated. The shell function takes these parameters:

    function Shells(controlPoints, shellPoints, t)

Where `controlPoints` is the same `Array` as with the curve functions, and `shellPoints` is the same as `curvePoints` but is used for drawing the shells. `t` is the current value of the T slider in the UI. The knot function looks like this:

    function Knots(controlPoints, knotValues)

Where `controlPoints` is the same `Array` as before, and `knotValues` is an `Array` of values representing the knot sequence. `knotValues` is an output parameter.

Math
===
The framework comes with a few linear algebra functions that you may find useful.


Row Add
---
    function RowAdd(matrix, toRow, fromRow, fromRowScale)

`matrix` - A 2d array of values

`toRow` - The 0-based index of the row to add to

`fromRow` - The 0-based index of hte row to add from

`fromRowScale` - The scale to apply to `fromRow` before adding (does not affect `fromRow`)


Row Multiply
---
    function RowMultiply(matrix, row, scalar)

`matrix` - A 2d array of values

`row` - The 0-based index of the row to scale

`scalar` - The scalar to apply to the given row

Row Reduce
---
    function RowReduce(matrix)

`matrix` - A 2d array of values

Rref's the given matrix in place.

Configuration
---

Many things about the framework can be configured via `config.js`, including colors and line widths. It also allows you to enable the iteration slider, which is disabled by default.

Conclusion
---
That's it! If you have further questions about using the framework (not about the assignment!), email me at `david0evans@gmail.com`.





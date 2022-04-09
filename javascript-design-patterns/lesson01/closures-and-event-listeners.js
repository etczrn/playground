// clear the screen for testing
document.body.innerHTML = "";

var nums = [1, 2, 3];

// Let's loop over the numbers in our array
for (var i = 0; i < nums.length; i++) {
  // This is the number we're on...
  var num = nums[i];

  // We're creating a DOM element for the number
  var elem = document.createElement("div");
  elem.textContent = num;

  // ... and when we click, alert the value of `num`
  elem.addEventListener(
    "click",
    // The solution involves utilizing closures.
    // We're going to create an inner scope
    // to hold the value of num
    // at the exact moment we add the event listener.
    (function (numCopy) {
      return function () {
        alert(numCopy);
      };
    })(num)
  );
  // We're passing the value of num into our outer function.
  // Inside that outer function, the value is known as numCopy
  // -- aptly named, since it's a copy of num in that instant.
  // Now it doesn't matter that num changes later down the line.
  // We stored the value of num in numCopy inside our outer function.
  // Lastly, the outer function returns the inner function
  // to the event listener. Because of the way JavaScript scope works,
  // that inner function has access to numCopy.
  // In the near future, num will increment, but that doesn't matter.
  // The inner function has access to numCopy, which will never change.

  document.body.appendChild(elem);
}

/* the problem:
// clear the screen for testing
document.body.innerHTML = '';
document.body.style.background="white";

var nums = [1,2,3];

// Let's loop over the numbers in our array
for (var i = 0; i < nums.length; i++) {

    // This is the number we're on...
    var num = nums[i];
    // This variable keeps changing every time we iterate!
    //  It's first value is 1, then 2, then finally 3.


    // We're creating a DOM element for the number
    var elem = document.createElement('div');
    elem.textContent = num;

    // ... and when we click, alert the value of `num`
    elem.addEventListener('click', function() {
        alert(num);
    });
    // ... alert num's value at the moment of the click!
    // Specifically, we're alerting the num variable 
    // that's defined outside of this inner function.
    // Each of these inner functions are pointing to the
    // same `num` variable... the one that changes on
    // each iteration, and which equals 3 at the end of 
    // the for loop.  Whenever the anonymous function is
    // called on the click event, the function will
    //  reference the same `num` (which now equals 3).

    // finally, let's add this element to the document
    document.body.appendChild(elem);
};
*/

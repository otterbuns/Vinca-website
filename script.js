window.dispatchEvent(new Event('resize'));

// Store items at percentage positions
function setFixedPercentagePositions() {
  const items = document.querySelectorAll('.property-1-equipment-1 img');
  const percentagePositions = [
    { left: '15%', top: '15%' },   // raincoat
    { left: '25%', top: '70%' },   // grappling-hook
    { left: '70%', top: '20%' },   // first-aid-kit
    { left: '80%', top: '60%' },   // compass
    { left: '10%', top: '50%' },   // knife
    { left: '85%', top: '85%' },   // swiss-knife
    { left: '30%', top: '25%' },   // flashlight
    { left: '60%', top: '75%' },   // folding
    { left: '45%', top: '15%' },   // lighter
    { left: '20%', top: '80%' },   // backpack
    { left: '75%', top: '35%' },   // matches
    { left: '50%', top: '55%' },   // keys
    { left: '40%', top: '90%' }    // cap
  ];
  
  items.forEach((item, index) => {
    if (percentagePositions[index]) {
      item.style.left = percentagePositions[index].left;
      item.style.top = percentagePositions[index].top;
      // Store the percentage position for later
      item.dataset.posLeft = percentagePositions[index].left;
      item.dataset.posTop = percentagePositions[index].top;
    }
  });
}

// Reset to fixed positions on resize
window.addEventListener('resize', setFixedPercentagePositions);

// Also set positions on page load
window.addEventListener('load', setFixedPercentagePositions);

// Optional: Reset positions with a button or keypress
document.addEventListener('keydown', function(e) {
  if (e.key === 'r' || e.key === 'R') {
    setFixedPercentagePositions();
  }
});

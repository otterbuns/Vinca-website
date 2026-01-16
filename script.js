window.dispatchEvent(new Event('resize'));

// Store items at percentage positions
function setFixedPercentagePositions() {
  const items = document.querySelectorAll('.property-1-equipment-1 img');
  const percentagePositions = [
    { left: '60%', top: '40%' },   // raincoat
    { left: '20%', top: '30%' },   // grappling-hook
    { left: '30%', top: '50%' },   // first-aid-kit
    { left: '60%', top: '25%' },   // compass
    { left: '30%', top: '10%' },   // knife
    { left: '40%', top: '35%' },   // swiss-knife
    { left: '57%', top: '15%' },   // flashlight
    { left: '70%', top: '10%' },   // folding knife
    { left: '75%', top: '40%' },   // lighter
    { left: '05%', top: '50%' },   // backpack
    { left: '60%', top: '50%' },   // matches
    { left: '00%', top: '20%' },   // keys
    { left: '10%', top: '15%' }    // cap
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

document.addEventListener('DOMContentLoaded', function() {
  const searchBtn = document.getElementById('search-btn');
  const searchContainer = document.getElementById('search-container');
  const searchInput = document.getElementById('search-input');
  
  searchBtn.addEventListener('click', function() {
    searchContainer.classList.toggle('active');
    if (searchContainer.classList.contains('active')) {
      searchInput.focus();
    }
  });
  
  // Close search when clicking outside
  document.addEventListener('click', function(event) {
    if (!searchContainer.contains(event.target) && event.target !== searchBtn) {
      searchContainer.classList.remove('active');
    }
  });
});

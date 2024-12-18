//your JS code here. If required.
// Get the button and select element
const removeBtn = document.querySelector('input[type="button"]');
const colorSelect = document.getElementById('colorSelect');

// Function to remove the selected color
const removeColor = () => {
  // Get the selected option from the dropdown
  const selectedOption = colorSelect.options[colorSelect.selectedIndex];

  // Check if a valid option is selected
  if (selectedOption) {
    // Remove the selected option from the dropdown
    colorSelect.removeChild(selectedOption);
  }
};

// Attach event listener to the button
removeBtn.addEventListener('click', removeColor);

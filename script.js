const tiles = document.querySelectorAll('.tile');

// Add hover effect
tiles.forEach(tile => {
  tile.addEventListener('mouseover', () => {
    tile.style.transform = 'translateY(-5px) scale(1.05)'; // Slight zoom on hover
  });

  tile.addEventListener('mouseout', () => {
    tile.style.transform = 'translateY(0) scale(1)'; // Reset on mouse out
  });
});

// Add click event
tiles.forEach(tile => {
  tile.addEventListener('click', () => {
    // Get the link from the tile
    const link = tile.querySelector('a').href;

    // Open the link in a new tab (optional - for better UX)
    window.open(link, '_blank');

    // You could also add additional logic here, like:
    // - Displaying a message 
    // - Changing the tile's appearance
    // - Sending data to a server
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const changeBtn = document.getElementById("change_button");
  const resetBtn = document.getElementById("reset_button");
  const blocks = document.querySelectorAll(".grid-item");

  // Change Color
  changeBtn.addEventListener("click", () => {
    const blockId = document.getElementById("block_id").value;
    const color = document.getElementById("colour_id").value;

    // Reset all first
    blocks.forEach(block => {
      block.style.backgroundColor = "transparent";
    });

    // Apply new color
    if (blockId >= 1 && blockId <= 9) {
      document.getElementById(blockId).style.backgroundColor = color;
    }
  });

  // Reset Button
  resetBtn.addEventListener("click", () => {
    blocks.forEach(block => {
      block.style.backgroundColor = "transparent";
    });
  });
});

const changeBtn = document.getElementById("change_button");
    const resetBtn = document.getElementById("Reset");
    const blocks = document.querySelectorAll(".grid-item");

    
    changeBtn.addEventListener("click", () => {
      const blockId = document.getElementById("block_id").value;
      const color = document.getElementById("colour_id").value;
      
    blocks.forEach(block => {
        block.style.backgroundColor = "transparent";
    });

    if (blockId >= 1 && blockId <= 9) {
	    document.getElementById(blockId).style.backgroundColor = color;
    }
});

resetBtn.addEventListener("click", () => {
      blocks.forEach(block => {
        block.style.backgroundColor = "transparent";
      });
    });



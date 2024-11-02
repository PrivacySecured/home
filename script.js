document.addEventListener("DOMContentLoaded", (event) => {
    const container = document.getElementById("c");

    const colors = [
        "#650b0e", "#84151a", "#8e151a", "#330f10", "#361018",
        "#361018", "#330f10", "#8e151a", "#84151a", "#650b0e"
    ];
    
    let colorIndex = 0;

    setInterval(() => {
        c.style.border = `2px solid ${colors[colorIndex]}`;
        colorIndex = (colorIndex + 1) % colors.length;
    }, 100);
});
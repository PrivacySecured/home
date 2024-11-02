document.addEventListener("DOMContentLoaded", (event) => {
    const container = document.getElementById("c");

    const colors = [
        "#663399", "#e95d0d"
    ];
    
    let colorIndex = 0;

    setInterval(() => {
        c.style.border = `2px solid ${colors[colorIndex]}`;
        colorIndex = (colorIndex + 1) % colors.length;
    }, 1000);
});
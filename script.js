document.addEventListener("DOMContentLoaded", (event) => {
    const container = document.getElementById("c");

    const colors = [
        "#663399", "#e95d0d", "#2a6df3", "#2a69b1", "#33b293"
    ];
    
    let colorIndex = 0;

    setInterval(() => {
        c.style.border = `2px solid ${colors[colorIndex]}`;
        colorIndex = (colorIndex + 1) % colors.length;
    }, 1000);
});
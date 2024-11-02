document.addEventListener("DOMContentLoaded", (event) => {

    const container = document.getElementById("c");

    const tools = [
        { elementId: "Monero", desc: "Monero" },
        { elementId: "Tor", desc: "Tor Browser" },
        { elementId: "Firefox", desc: "Firefox" },
        { elementId: "Tails", desc: "Tails OS" },
        { elementId: "Signal", desc: "Signal Messenger" },
        { elementId: "VeraCrypt", desc: "VeraCrypt" },
        { elementId: "uBlock", desc: "uBlock Origin" },
        { elementId: "NoScript", desc: "NoScript" },
    ];

    const txt = document.getElementById("desc");

    tools.forEach(tool => {
        const element = document.getElementById(tool.elementId);

        if (element) {
            element.addEventListener("mouseenter", () => {
                txt.innerText = tool.desc;
            });

            element.addEventListener("mouseleave", () => {
                txt.innerText = "Secure Your Privacy Today";
            });
        }
    });

    const colors = [
        "#663399", "#e95d0d", "#2a6df3", "#2a69b1", "#33b293"
    ];

    let colorIndex = 0;

    setInterval(() => {
        c.style.border = `2px solid ${colors[colorIndex]}`;
        colorIndex = (colorIndex + 1) % colors.length;
    }, 1000);

});
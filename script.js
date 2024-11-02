document.addEventListener("DOMContentLoaded", (event) => {

    const container = document.getElementById("c");

    const tools = [
        { elementId: "Monero", desc: "Monero", url: "https://www.getmonero.org/" },
        { elementId: "Tor", desc: "Tor Browser", url: "https://www.torproject.org/download/" },
        { elementId: "Firefox", desc: "Firefox", url: "https://www.mozilla.org/en-US/firefox/new/" },
        { elementId: "Tails", desc: "Tails OS", url: "https://tails.net/" },
        { elementId: "Signal", desc: "Signal Messenger", url: "https://signal.org/download/" },
        { elementId: "VeraCrypt", desc: "VeraCrypt", url: "https://www.veracrypt.fr/code/VeraCrypt/" },
        { elementId: "uBlock", desc: "uBlock Origin", url: "https://ublockorigin.com/" },
        { elementId: "NoScript", desc: "NoScript", url: "https://noscript.net/" },
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
    
            element.addEventListener("click", () => {
                window.location.href = tool.url;
            });
        }
    });
    

    const colors = [
        "#ff6600", "#9c3aea", "#ff4b3a", "#56347c", "#2c6ef3", "#0d657a", "#800000", "#d12027"
    ];

    let colorIndex = 0;

    setInterval(() => {
        c.style.border = `2px solid ${colors[colorIndex]}`;
        colorIndex = (colorIndex + 1) % colors.length;
    }, 1000);

});
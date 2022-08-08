class MeuRelogioElement extends HTMLElement {
    constructor() {
        super();
        console.log("constructor");
        this.attachShadow({mode: "open"});
        this.spanEl = document.createElement("span");
        this.spanEl.textContent = getHMS();
        this.shadowRoot.append(this.spanEl);
    }
    connectedCallback() {
        this.spanEl.textContent = getHMS();
        this.timer = setInterval(() => {
            this.spanEl.textContent = getHMS();
        }, 1000);
    }

    disconnectedCallback() {
        clearInterval(this.timer);
    }
}

function getHMS() {
    const dh = new Date();
    const horas =  formatNumber(dh.getHours());
    const minutos = formatNumber(dh.getMinutes());
    const segundos = formatNumber(dh.getSeconds());
    return `${horas}:${minutos}:${segundos}`;
}

function formatNumber(n) {
    return String(n).padStart(2,0);
}

customElements.define("meu-relogio", MeuRelogioElement);
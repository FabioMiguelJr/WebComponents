class ContadorElement extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});

        let counter = 0;
        const spanEl = document.createElement("span");
        spanEl.textContent = 0;

        const controlEl = document.createElement("div");

        //const buttonEl = document.createElement("button");
        //buttonEl.textContent = "Incrementar";
        //buttonEl.addEventListener("click", () => {
        //    counter++;
        //    spanEl.textContent = counter;
        //})

        const incrementEl = document.createElement("button");
        incrementEl.textContent = "Incrementar";
        incrementEl.addEventListener("click", () => {
            counter++;
            spanEl.textContent = counter;
        })

        const decrementEl = document.createElement("button");
        decrementEl.textContent = "Decrementar";
        decrementEl.addEventListener("click", () => {
            counter--;
            spanEl.textContent = counter;
        })

        controlEl.append(incrementEl, decrementEl)

        const linkEl = document.createElement("link");
        linkEl.setAttribute("href", "estilos.css");
        linkEl.setAttribute("rel", "stylesheet");

        //const styleEl = document.createElement("style");
        //styleEl.textContent = `
        //    button {
        //        margin-left: 1em;
        //    }`;
        
        //this.shadowRoot.append(styleEl, spanEl, buttonEl);
        this.shadowRoot.append(linkEl, spanEl, controlEl);
    }
}

customElements.define("meu-contador", ContadorElement);
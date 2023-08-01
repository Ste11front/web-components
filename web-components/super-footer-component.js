class SuperFooterComponent extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.shadowRoot.innerHTML = '<p>@Game Platform 2023</p>'
        fetch('./games-data.json');
    }
}

customElements.define('super-footer', SuperFooterComponent);
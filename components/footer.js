class Footer extends HTMLElement {
  constructor() {
    super();
  }

connectedCallback() {
    this.innerHTML = 
    `
<div class ="bottom">
	<a href="#top"> Top </a>  /	<a href="index.html"> Home </a> 
	<p> Copyright Lilia Amundsen (c) </p>
</div>
    `
	}
}

customElements.define('footer-component', Footer);
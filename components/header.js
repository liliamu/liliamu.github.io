class Header extends HTMLElement {
  constructor() {
    super();
  }

connectedCallback() {
    this.innerHTML = 
    `
    <div id="header">
		<div class="top">
			<h5> <a href="index.html" id="headertext"> LILIA  K.  AMUNDSEN </a> </h5>
			<div id="contact"> 
				<ul>
					<li> <p> computation + creativity </p> </li>
					<li> <p> <a href= "mailto:liliakarimova@protonmail.com"> email me </a> </p> </li>
					<li> <p> text me: +47 905 28 506 </p> </li>
					<li> <p> <a href= "http://vsco.co/liliaamu" target="_blank"> photogrid </a> / <a href= "https://www.linkedin.com/in/liliamu/" target="_blank"> CV </a> </p> </li>
				</ul> 
			</div>
			<div id="logodiv">
				<a href="index.html"> <img src="frontfiles/logohvit.png" id="logo" alt="liliamu logo"> </a>
			</div>
		</div>
		<div class="menudiv">
			<ul class="menu">
				<li class="nav-header"> <a href ="./index.html#top_work"> <h5 id="work"> WORK </h5> </a> </li>
				<li class="nav-header"> <h5 id ="button"> CONTACT </h5> </li>
			</ul>
		</div>
	</div>
    `
	}
}

customElements.define('header-component', Header);
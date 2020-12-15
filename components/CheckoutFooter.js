const footerTemplate = document.createElement('template')
footerTemplate.innerHTML = `
	<style>
		#checkout-footer {
			width: 100%;
			height: 35.4rem;
			margin-top: 10rem;
			background: #000000;
			padding-top: 1.9rem;
		}

		#checkout-footer > img {
			width: 9.4rem;
			height: 3.8rem;
			display: block;
			margin: 0 auto;
		}
	</style>
	<footer id="checkout-footer">
		<img src="assets/images/disney_logo.svg"/>
	</footer>
`

class CheckoutFooter extends HTMLElement {
	constructor () {
		super()

		this.attachShadow({ mode: 'open' })
		this.shadowRoot.appendChild(footerTemplate.content.cloneNode(true))
	}
}

window.customElements.define('checkout-footer', CheckoutFooter)
const headerTemplate = document.createElement('template')
headerTemplate.innerHTML = `
	<style>
		#checkout-header {
			width: 100vw;
			display: flex;
			flex-direction: column;
			align-items: stretch;
			overflow-x: hidden;
		}

		#checkout-header > section:first-child {
			font-size: 1.5rem;
			font-weight: bold;
			color: #CACACA;
			text-align: end;
			padding: 1.5rem 3rem;
		}

		#checkout-header > section > img {
			width: 14.8rem;
			height: 9rem;
			display: block;
			margin: 0 auto;
			margin-top: -2rem;
		}

		#checkout-header > p {
			display: inline-block;
			width: 34.5rem;
			color: #CACACA;
			font-size: 1rem;
			letter-spacing: .1rem;
			margin: 0 auto;
			margin-top: 2.5rem;
			margin-bottom: 1rem;
		}

		@media (min-width: 860px) {
			#checkout-header > section:first-child {
				margin-right: 5rem;
				padding-top: 2rem;
				align-self: flex-end;
			}	

			#checkout-header > section:first-child > p {
				border: 1px solid #FFF;
				padding: .5rem;
				color: #FFF;
				font-weight: bold;
				border-radius: .4rem;
			}
		}	
	</style>
		
	<header id="checkout-header">
		<section><p>Entrar</p></section>
		<section><img src="assets/images/disney_logo.svg"/></section>
		<p>PASSO 1 DE 4</p>
	</header>
`

class CheckoutHeader extends HTMLElement {
	constructor () {
		super()

		this.attachShadow({ mode: 'open' })
		this.shadowRoot.appendChild(headerTemplate.content.cloneNode(true))
	}
}

window.customElements.define('checkout-header', CheckoutHeader)
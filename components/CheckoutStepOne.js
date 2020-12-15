const stepOneTemplate = document.createElement('template')
stepOneTemplate.innerHTML = `
	<style>
		#checkout-main {
			color: #CACACA;
			padding: 0 1.5rem;
			width: 33.5rem;
			margin: 0rem auto;
			display: flex;
			flex-direction: column;
		}

		#checkout-main > h3 {
			color: #FFF;
			font-size: 2.4rem;
			margin-top: -.2rem;
		}

		#checkout-main > input {
			width: 30.9rem;
			height: 3.2rem;
			padding: .9rem 1.2rem;
			border: .1rem;
			border-radius: .2rem;
			background: #31343e;
		}

		#checkout-main > section {
			margin-top: 2rem;
			width: 33rem;
			display: flex;
			font-size: 1.1rem;
			line-height: 1.8rem;
		}

		#checkout-main > section > input[type="checkbox"] {
			width: 4.5rem;
			height: 4.5rem;
			margin-right: 1rem 
		}

		#checkout-main > section > p {
			margin-top: 2.2rem; 
		}

		#checkout-article {
			width: 33.5rem;
			height: 22.7rem;
			background: #31343f;
			margin: 0 auto;
			padding: .8rem;
			border-radius: 1rem;
		}

		#checkout-article > p {
			color: #CACACA;
			font-size: 1rem;
			letter-spacing: .1rem;
			line-height: 1.8rem;
			margin: .8rem;
		}

		#checkout-article > p > a {
			color: #67DBFF;
			text-decoration: underline;
		}

		#checkout-article > button {
			width: 33.5rem;
			height: 4.8rem;
			color: #F9F9F9;
			font-size: 1.5rem;
			background: #0072d2;
			padding: 0 2.4rem;
			font-weight: bold;
			letter-spacing: .2rem;
			border-radius: .3rem;
			border: none
		}
	</style>
	<main id="checkout-main">
		<h3>Digite o seu e-mail (Clone)</h3>
		<input placeholder="E-mail" />
		<section>
			<input type="checkbox" />
			<p>
			Sim! Quero receber notícias, ofertas especiais e outras
			informações do Disney+ e das empresas do grupo Walt Disney. 
			</p>
		</section>
	</main>
	<article id="checkout-article">
		<p>A Disney usará os seus dados para oferecer e dar suporte aos
		serviços, personalizar e melhorar a sua experiência no Disney+ e 
		para enviar informações. Você pode alterar as preferências de 
		comunicação quando quiser. Podemos usar esses dados conforme explica a nossa <a href="#">Política de Privacidade</a>,
		inclusive compartilhá-los com as Empresas do grupo Walt Disney.
		Ao clicar em "Continuar", você confirma que leu a nossa 
		<a href="#">Política de Privacidade</a> e os termos específicos
		aplicáveis ao Brasil.
		</p>
		<button>CONTINUAR</button>
	</article>
`

class CheckoutStepOne extends HTMLElement {
	constructor() {
		super()
		this.attachShadow({ mode: 'open' })
		this.shadowRoot.appendChild(stepOneTemplate.content.cloneNode(true))
	}
}

window.customElements.define('checkout-step-one', CheckoutStepOne)
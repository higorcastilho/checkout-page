const privacyPolicyTemplate = document.createElement('template')
privacyPolicyTemplate.innerHTML = `
	<style>
		
		#checkout-article {
			width: 35.1rem;
			height: 24.3rem;
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
		}
	</style>
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

class CheckoutPrivacyPolicy extends HTMLElement {
	constructor() {
		super()
		this.attachShadow({ mode: 'open' })
		this.shadowRoot.appendChild(privacyPolicyTemplate.content.cloneNode(true))
	}
}

window.customElements.define('checkout-privacy-policy', CheckoutPrivacyPolicy)
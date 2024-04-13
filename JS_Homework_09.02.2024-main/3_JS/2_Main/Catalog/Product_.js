class Products {

	#BASE_URL = 'https://fakestoreapi.com'

	async getAllProducts() {
		console.log('Start fetching data')

		// 1 Method

		// await fetch('https://fakestoreapi.com/products?limit=5')
		// 	.then(res=>res.json())
		// 	.then(json=>console.log(json))


		// 2 Method

		// let products = await fetch('https://fakestoreapi.com/products?limit=5')
		// products = await products.json()
		// console.log(products)


		// Method to get all products

		let products = await fetch('https://fakestoreapi.com/products?limit=9')
			.then(res => res.json())
			.then(json => {
				return json
			})
		console.log('Finish fetching data')

		return products
	}

	async addNewProduct() {
		await fetch(`${this.#BASE_URL}/products`, {
			method: 'POST',
			body: JSON.stringify(
				{
					title: 'test product',
					price: 13.5,
					description: 'lorem ipsum set',
					image: 'https://i.pravatar.cc',
					category: 'electronic'
				}
			)
		})
			.then(res => res.json())
			.then(json => console.log('Add new Product', json))
	}

	async updateProduct(id = 7) {
		await fetch(`${this.#BASE_URL}/products/${id}`, {
			method: 'PUT',
			body: JSON.stringify(
				{
					title: 'test product',
					price: 13.5,
					description: 'lorem ipsum set',
					image: 'https://i.pravatar.cc',
					category: 'electronic'
				}
			)
		})
			.then(res => res.json())
			.then(json => console.log('Updated information', json))
	}

	async deleteProduct(id = 6) {
		fetch(`https://fakestoreapi.com/products/${id}`, {
			method: 'DELETE'
		})
			.then(res => res.json())
			.then(json => console.log(json))
	}

	displayProducts(products) {
		console.log('PRODUCTS FOR DISPLAY', products)
		let singleProductItem = `
			<div class="grid-item">
      	<div class="product">
       		<div class="product_heading">
        		<div class="product_new">
							<span class="span_prod_new">
								НОВЕ
							</span>
        		</div>
        	<div class="product_heart">
							<span class="span_prod_heart">
								<img src="/IMAGES/2_Main/Catalog_images/Prod_Heart.png" alt="Product heart">
							</span>
        		</div>
       		</div>

       		<div class="product_box">
						<!--img-->
						<div class="product_img">
							<img src="/IMAGES/2_Main/Catalog_images/SingleWash.png" alt="">
						</div>

						<!--content-->
						<div class="product-cont">
							<!--name producer model-->
							<div class="product_label_main_info">
							<!--wash name-->
								<span class="product_wash_name">
									Гранітна мийка з однією чашею
								</span>

								<!--product producer-->
								<span class="product_producer_name">
									_MAESTRO
								</span>

								<!--product model-->
								<span class="product_model_name">
									Radea R10 40.40 M-TG
								</span>
         			</div>

							<!--price-->
							<div class="product_buy_info">
								<div class="product_label_buy_info">
									<span class="price">
										5 999 грн
									</span>
									<span class="inStock">
										В наявності
									</span>
								</div>

								<div class="add_to_cart">
									<button class="add_product_to_cart">
										<img src="/IMAGES/2_Main/Catalog_images/CartBtn.png"
										alt="add to cart button with image inside">
								 </button>
								</div>
							</div>
						</div>
     			</div>
    	</div>
    </div>`

		let html = ''
		products.forEach((e) => {
			html += `
			<div class="grid-item">
				<div class="product">
					<div class="product_heading">
						<div class="product_new">
							<span class="span_prod_new">
								НОВЕ
							</span>
						</div>
						<div class="product_heart">
							<span class="span_prod_heart">
								<img src="/IMAGES/2_Main/Catalog_images/Prod_Heart.png" alt="Product heart">
							</span>
						</div>
					</div>
				
					<div class="product_box">
						<!--img-->
						<div class="product_img">
							<img src="${e.image}" alt="">
						</div>
				
						<!--content-->
						<div class="product-cont">
							<!--name producer model-->
							<div class="product_label_main_info">
								<!--wash name-->
								<span class="product_wash_name">
									 Гранітна мийка з однією чашею
								</span>
				
								<!--product producer-->
								<span class="product_producer_name">
									${e.title}
								</span>
				
								<!--product model-->
								<span class="product_model_name">
								 ${e.id}
								</span>
							</div>
				
							<!--price-->
							<div class="product_buy_info">
								<div class="product_label_buy_info">
									<span class="price">
										5 999 грн
									</span>
									<span class="inStock">
									 В наявності
									</span>
								</div>
				
								<div class="add_to_cart">
									<button class="add_product_to_cart">
										<img src="/IMAGES/2_Main/Catalog_images/CartBtn.png"
											alt="add to cart button with image inside">
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>`


			// get area for products
			let productArea = document.querySelector('#products_area')

			// set HTML in area
			productArea.innerHTML = html
		})
	}
}


// start point
document.addEventListener('DOMContentLoaded', async () => {
	// init
	const p = new Products() // p - products

	// use
	const products = await p.getAllProducts()
	p.displayProducts(products)
	await p.addNewProduct()
	await p.updateProduct()
	await p.deleteProduct()
})
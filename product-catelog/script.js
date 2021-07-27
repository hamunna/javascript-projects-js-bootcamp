// Selecting HTML Elements

const filterInput = document.querySelector('#filter-input');
const listCollection = document.querySelector('#list-collection');
const productNameInput = document.querySelector('#product-name-input');
const productPriceInput = document.querySelector('#product-price-input');
const addProductBtn = document.querySelector('#add-product-btn');
const deleteProduct = document.querySelector('#delete-product');
const blankItem = document.querySelector('#blank-item');

// Dat / State

const productData = [
	// {
	// 	id: 0,
	// 	name: 'Microphone',
	// 	price: 89
	// },

	// {
	// 	id: 1,
	// 	name: 'Mouse',
	// 	price: 56
	// }
];

// Populating Items

function getData(productList) {
	let li = '';
	if (productData.length > 0) {
		blankItem.innerText = '';
		
		productList.forEach(product => {

			li = document.createElement('li');
			li.className = 'border border-green-600 px-4 py-2 rounded my-8';
			li.id = `product-${product.id}`;
			li.innerHTML = `
			<span id="productName" class="font-bold">${product.id}) </span>
			<span id="productName" class="font-bold">${product.name}</span>
			-
			<span id="productPrice"  class="font-bold text-green-600">&dollar;${product.price}</span>
		
			<i id="delete-product" class="fas fa-trash-alt float-right text-red-700"></i>`
		
			listCollection.appendChild(li);
		});
	} else {
		blankItem.innerText = 'No item/s to show!';
	}
}
getData(productData);

// Adding Item Validation

addProductBtn.addEventListener('click', e => {
	e.preventDefault();
	
	const name = productNameInput.value;
	const price = productPriceInput.value;
	let id;
	if (productData.length === 0) {
		id = 1;
	} else {
		id = productData[productData.length - 1].id + 1;
	}

	if (name === '' || price === '' || !(!isNaN(parseFloat(price)) && isFinite(price))) {
		alert('Please Input the Necessary Information!');
	} else {
		productData.push({
			id,
			name,
			price
		})
		// console.log(productData);
		listCollection.innerHTML = '';
		getData(productData);
		productNameInput.value = '';
		productPriceInput.value = '';
	}
});
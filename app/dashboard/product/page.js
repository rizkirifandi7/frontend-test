"use client";

import React, { useState, useEffect } from "react";
import { getProducts } from "../../../services/fetch/product";

export default function Products() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const fetchProducts = async () => {
			const products = await getProducts();
			setProducts(products);
		};

		fetchProducts();
	}, []);

	return (
		<div>
			<h1>Products</h1>
			{products.map((product) => (
				<div key={product.id}>
					<h2>{product.name_product}</h2>
					<p>{product.description_product}</p>
				</div>
			))}
		</div>
	);
}

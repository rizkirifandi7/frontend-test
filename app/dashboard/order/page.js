"use client";

import React, { useState, useEffect } from "react";
import { getOrders } from "../../../services/fetch/order";

export default function Order() {
	const [order, setOrder] = useState([]);

	useEffect(() => {
		const fetchOrder = async () => {
			const order = await getOrders();
			setOrder(order);
		};

		fetchOrder();
	}, []);

	return (
		<div>
			<h1>Order</h1>
			{Array.isArray(order) &&
				order.map((order) => (
					<div key={order.id}>
						<h2>{order.code_order}</h2>
					</div>
				))}
		</div>
	);
}

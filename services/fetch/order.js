import { instance } from "../axios/api";

// Function for get all books endpoint
export const getOrders = async () => {
	try {
		const response = await instance.get("/order");
		return response.data;
	} catch (error) {
		throw new Error(error.response.data.message || "Something went wrong");
	}
};

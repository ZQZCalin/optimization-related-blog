import { createContext, useEffect, useState } from "react";
import { database } from "../blogs/AllPosts";

export const BlogContext = createContext();

function useBlogData() {
	// direct copy of database
	const [rawData, setRawData] = useState({});
	// abbreviated array of blog data, excluding main content
	const [blogData, setBlogData] = useState([]);
	useEffect(() => {
		// console.log("loading database");
		setRawData(database);
		setBlogData(Object.entries(database).map(([id, {title, author, date}]) => {
			return {
				id: id, title: title, author: author, date: date,
			};
		}));
	}, []);
	return [rawData, blogData];
}

export default function BlogContextProvider(props) {
	const [rawData, blogData] = useBlogData();
	const getBlogById = (id) => rawData[id];
	return (
		<BlogContext.Provider value={{
			blogData, getBlogById
		}}>
			{props.children}
		</BlogContext.Provider>
	);
}
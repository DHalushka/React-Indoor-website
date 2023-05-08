import React from "react";

function CategorieTile(props) {
	const { categorie, value, onCategorieClick } = props;
	const categories = ["Adventure", "Puzzels", "Arcade", "Sports"];
	return (
		<div className="categories-items">
			{categories.map((categorieName, i) => (
				<div
					className={value === i ? 'categories-item active' : 'categories-item'} 
					key={i}
					onClick={() => onCategorieClick(i)}
				>
					{categorieName}
				</div>
			))}
		</div>
	);
}

export default CategorieTile;

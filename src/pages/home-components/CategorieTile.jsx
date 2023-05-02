import React from "react";

function CategorieTile(props) {
    const { categorie } = props;
	return (
		<div className="categories-item">
            <a href="/">{categorie}</a>
		</div>
	);
}

export default CategorieTile;

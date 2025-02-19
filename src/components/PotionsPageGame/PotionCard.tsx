import { IngredientProps } from "../../interfaces/interfaces";

const PotionsCard = ({
	id,
	src,
	alt,
	name,
	clicked,
	toggleCard,
}: IngredientProps) => {
	return (
		<div
			className={clicked ? "ingredient-card active" : "ingredient-card"}
			id={id}
			onClick={() => toggleCard(id)}
		>
			<img
				className="ingredient-image"
				loading="lazy"
				id={id}
				src={src}
				alt={alt}
			/>
			<p className="ingredient-name">{name}</p>
		</div>
	);
};

export default PotionsCard;

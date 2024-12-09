interface PotionsCardProps {
	id: string;
	src: string;
	alt: string;
	name: string;
	clicked: boolean;
	toggleCard: (id: string) => void;
}

const PotionsCard = ({
	id,
	src,
	alt,
	name,
	clicked,
	toggleCard,
}: PotionsCardProps) => {
	return (
		<div
			className={clicked ? "ingredient-card active" : "ingredient-card"}
			id={id}
			onClick={() => toggleCard(id)}
		>
			<img className="ingredient-image" id={id} src={src} alt={alt} />
			<p className="ingredient-name">{name}</p>
		</div>
	);
};

export default PotionsCard;

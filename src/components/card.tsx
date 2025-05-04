interface CardProps {
  card: {
    url: string;
  };
  idx: number;
}

export const Card = ({ card, idx }: CardProps) => {
  return (
    <div
      key={idx}
      className="gorup relative w-[10rem] h-[10rem] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transform transition-transform duration-200 hover:scale-110"
      ></div>
    </div>
  );
};

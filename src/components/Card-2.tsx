interface CardProps {
  title: string;
  desc: string;
  imageURL: string;
}

export const Card = ({ desc, imageURL, title }: CardProps) => {
  return (
    <div className="flex flex-col m-5 bg-white rounded-lg shadow-lg overflow-hidden">
      <img src={imageURL} alt={title} className="w-full h-32 object-cover" />

      <div className="p-5">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-gray-700 mt-2">{desc}</p>

        <button className="px-4 py-2 text-white bg-black rounded-lg mt-4">
          Learn More.
        </button>
      </div>
    </div>
  );
};

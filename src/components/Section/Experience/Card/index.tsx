type Props = {
  title: string;
  subtitle?: string;
  duration?: string;
  desc?: string[];
  image: string;
  grid?: boolean;
};

const Card = ({
  title,
  subtitle,
  duration,
  desc,
  image,
  grid = false,
}: Props) => {
  return (
    <div className="w-full px-4 mb-12">
      <div
        className={`bg-white p-8 gap-4 rounded-xl shadow-md flex justify-between items-center flex-col-reverse ${grid ? 'text-center' : 'md:flex-row'}`}
      >
        <div>
          <h3 className="text-2xl text-blue-800 mb-4 font-bold font-heading">
            {title}
          </h3>
          <p className="text-yellow-500 font-semibold mb-2">
            {subtitle} {duration && `| ${duration}`}
          </p>
          <ul>
            {desc?.map((i) => {
              return (
                <li
                  key={i}
                  className="text-lg text-gray-500 list-inside list-disc"
                >
                  {i}
                </li>
              );
            })}
          </ul>
        </div>
        <img src={image} alt={subtitle} className="w-50 h-50 object-contain" />
      </div>
    </div>
  );
};

export default Card;

interface Props {
  count: string;
  title: string;
}

const SomethingInsideCard: React.FC<Props> = ({ count, title }) => {
  return (
    <div className="flex flex-col items-center">
      <p className="text-white text-5xl font-bold">{count}</p>
      <p className="inline-block text-white bg-primary p-1 font-semibold">
        {title}
      </p>
    </div>
  );
};

export default SomethingInsideCard;

interface Props {
    count: string;
    title: string;
  }
  
  const CardContent: React.FC<Props> = ({ count, title }) => {
    return (
      <div className="flex flex-col items-center">
        <p className="text-white text-4xl ">{count}</p>
        <p className="inline-block text-white p-1">
          {title}
        </p>
      </div>
    );
  };
  
  export default CardContent;
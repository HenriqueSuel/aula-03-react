interface Props {
  count: number | undefined;
}

const Card = ({ count }: Props) => {
  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
};

export default Card;

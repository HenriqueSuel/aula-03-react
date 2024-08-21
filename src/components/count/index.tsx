interface Props {
  valor: number;
  hours: string;
}

const Count = ({ valor, hours }: Props) => {
  return (
    <div>
      <h1>{hours}</h1>
      <h1>{valor}</h1>
    </div>
  );
};

export default Count;

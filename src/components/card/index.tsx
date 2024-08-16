interface Props {
  title: string;
  preco: number;
  children: React.ReactNode;
  // formacao: Array<string>; tambem funciona assim === string[]
  formacao: string[];
}

const Card = ({ title, preco, children, formacao }: Props) => {
  return (
    <div>
      <h1>{title}</h1>
      <h3>inclui 3 cursos</h3>

      {children}

      <h1>Formações</h1>

      {formacao.map((item) => {
        return <ul>{item}</ul>;
      })}

      {/* {formacao.map((item) => (
        <ul>{item}</ul>
      ))} */}

      <h5>R$ {preco.toFixed(2)}</h5>
      <button> Ver Curso</button>
    </div>
  );
};

export default Card;

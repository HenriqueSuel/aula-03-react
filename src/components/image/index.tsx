import "./style.css";

interface Props {
  url: string;
}

const Image = ({ url }: Props) => {
  return (
    <img
      className="image"
      src={url}
    />
  );
};

export default Image;

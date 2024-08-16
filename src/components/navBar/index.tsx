interface Props {
  title: string;
  subtitle: string;
}

const NavBar = ({ title, subtitle }: Props) => {
  return <h1>{title} {subtitle}</h1>;
};

export default NavBar;

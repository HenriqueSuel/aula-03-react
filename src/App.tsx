import "./App.css";
import Card from "./components/card";
import Image from "./components/image";
import NavBar from "./components/navBar";

const App = () => {
  return (
    <div>
      <Image url="https://styles.redditmedia.com/t5_5blkvq/styles/communityIcon_t5ji6wuld2z71.jpg?format=pjpg&s=1672be49333cd14749784be8bbc3c968a033d8e0" />
      <Image url="https://media.giphy.com/avatars/coder_house/e62G0PMEAuoU.png" />

      <NavBar title={"Henrique"} subtitle="dasdasdsa" />

      <Card
        title="Curso front end"
        preco={100.0}
        formacao={["cc", "si", "ads", "EC"]}
        children={
          <li>
            <ul>html</ul>
            <ul>css</ul>
            <ul>React</ul>
          </li>
        }
      ></Card>

      <Card
        title="Curso full stack"
        preco={100.0}
        formacao={["cc", "si", "ads", "EC"]}
      >
        <li>
          <ul>html</ul>
          <ul>css</ul>
          <ul>React</ul>
          <ul>Node Js</ul>
        </li>
      </Card>
    </div>
  );
};

export default App;

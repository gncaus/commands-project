import { useHomeStore } from "./store";
import Logo from "../../assets/icons/Logo.svg";
import eat_here from "../../assets/icons/eat_here.svg";
import to_take from "../../assets/icons/to_take.svg";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const {} = useHomeStore();

  const handleOrder = (orderType: string) => {
    if (orderType === "delivery") {
      localStorage.setItem("isDelivery", "true");
    } else {
      localStorage.setItem("isDelivery", "false");
    }
    navigate("/menu");
  };

  return (
    <div className="h-screen pt-[75px] flex flex-col">
      <div className="flex flex-col items-center mb-[97px]">
        <img src={Logo} alt="Logo" className="w-20 h-20" />
        <p className="text-xl font-semibold">FSW Donald’s</p>
      </div>
      <div className="flex flex-col items-center gap-3">
        <p className="text-3xl font-semibold">Seja bem-vindo!</p>
        <p className="text-gray-500 text-md text-center w-82">
          Escolha como prefere aproveitar sua refeição. Estamos aqui para
          oferecer praticidade e sabor em cada detalhe!
        </p>
      </div>
      <div className="flex justify-center items-center mt-20 gap-10">
        <div
          className="flex flex-col items-center justify-center cursor-pointer"
          onClick={() => handleOrder("eat_here")}
        >
          <img src={eat_here} alt="Eat Here" className="w-24 h-24 " />
          <p>Para comer aqui</p>
        </div>
        <div
          className="flex flex-col items-center justify-center cursor-pointer"
          onClick={() => handleOrder("delivery")}
        >
          <img src={to_take} alt="Eat Here" className="w-24 h-24" />
          <p>Para levar</p>
        </div>
      </div>
    </div>
  );
}

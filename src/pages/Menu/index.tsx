import McStore from "../../assets/mcStore.png";
import BigMac from "../../assets/big_mac.png";
import ChickenElite from "../../assets/chicken_elite.png";
import CheddarDuplo from "../../assets/cheddar_duplo.png";
import BraboOnionRings from "../../assets/brabo_onion_rings.png";

const Menu = () => {
  return (
    <div className="max-w-md mx-auto bg-gray-100 min-h-screen">
      {/* Cabeçalho com a imagem da loja */}
      <div className="relative">
        <img
          src={McStore}
          alt="McDonald's Store"
          className="w-full h-40 object-cover"
        />
        <div className="absolute top-4 left-4">
          <button className="bg-gray-200 p-2 rounded-full">
            {/* Ícone de voltar */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Informações do restaurante */}
      <div className="p-4 rounded-t-lg">
        <div className="flex items-center space-x-3">
          <img
            src={McStore}
            alt="McDonald's Logo"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h1 className="text-xl font-bold">FSW Donald's</h1>
            <div className="flex items-center space-x-1">
              <span className="text-yellow-500">★</span>
              <span className="text-sm">5.0</span>
              <span className="text-sm text-green-500">• Aberto</span>
            </div>
          </div>
        </div>

        {/* Categorias */}
        <div className="flex space-x-4 mt-4 overflow-x-auto">
          <button className="bg-orange-500 text-white px-4 py-2 rounded-full">
            Lançamentos
          </button>
          <button className="bg-gray-200 text-black px-4 py-2 rounded-full">
            Lanches
          </button>
          <button className="bg-gray-200 text-black px-4 py-2 rounded-full">
            Fritos
          </button>
          <button className="bg-gray-200 text-black px-4 py-2 rounded-full">
            Bebidas
          </button>
        </div>

        {/* Lista de itens do menu */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-4">Lançamentos</h2>

          {/* Item 1 */}
          <div className="flex space-x-4 mb-6">
            <img src={BigMac} alt="Big Mac" className="w-24 h-24 rounded-lg" />
            <div className="flex-1">
              <h3 className="text-md font-semibold">
                McOferta Média Big Mac Duplo
              </h3>
              <p className="text-sm text-gray-600">
                Quatro hambúrgueres (100% carne bovina), alface americana...
              </p>
              <p className="text-lg font-bold mt-1">R$ 39,90</p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex space-x-4 mb-6">
            <img
              src={BraboOnionRings}
              alt="Onion Rings"
              className="w-24 h-24 rounded-lg"
            />
            <div className="flex-1">
              <h3 className="text-md font-semibold">
                Novo Brabo Melt Onion Rings
              </h3>
              <p className="text-sm text-gray-600">
                Dois hambúrgueres de carne 100% bovina, molho brabo...
              </p>
              <p className="text-lg font-bold mt-1">R$ 41,50</p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex space-x-4 mb-6">
            <img
              src={ChickenElite}
              alt="McCrispy"
              className="w-24 h-24 rounded-lg"
            />
            <div className="flex-1">
              <h3 className="text-md font-semibold">McCrispy Chicken Elite</h3>
              <p className="text-sm text-gray-600">
                Composto por pão tipo brioche com batata, molho Honey&Fire...
              </p>
              <p className="text-lg font-bold mt-1">R$ 39,90</p>
            </div>
          </div>

          {/* Item 4 */}
          <div className="flex space-x-4 mb-6">
            <img
              src={CheddarDuplo}
              alt="Cheddar McMelt"
              className="w-24 h-24 rounded-lg"
            />
            <div className="flex-1">
              <h3 className="text-md font-semibold">Duplo Cheddar McMelt</h3>
              <p className="text-sm text-gray-600">
                Dois hambúrgueres (100% carne bovina), molho lácteo com
                queijo...
              </p>
              <p className="text-lg font-bold mt-1">R$ 36,20</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;

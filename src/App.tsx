import "./App.css";
import { Layout } from "./components/layout/Layout";
import { OrderColumn } from "./components/OrderColumn";

function App() {
  return (
    <div className="App">
      <Layout>
        <div className="flex items-center justify-between mb-[26px]">
          <div className="flex items-center gap-2 p-[5px] rounded-md border border-[#E5E9EB] w-[240px]">
            <img src="/svg/search.svg" alt="search" className="w-6 h-6" />
            <input
              type="text"
              placeholder="Поиск по ID"
              className="outline-none focus:border-transparent w-full"
            />
          </div>
          <div className="flex gap-4">
            <div className="border border-[#E5E9EB] p-[5px] rounded-md flex items-center">
              <img
                src="/svg/shopping-list.svg"
                alt="shopping-list"
                className="w-5 h-5"
              />
              <p className="text-[#303940] text-sm leading-6 font-medium ml-3 mr-1.5">
                Всего: 115
              </p>
              <img
                src="/svg/arrow-down.svg"
                alt="arrow-down"
                className="w-6 h-6"
              />
            </div>
            <div className="border border-[#E5E9EB] p-[5px] rounded-md flex items-center gap-2">
              <img
                src="/svg/clock-outlined.svg"
                alt="clock"
                className="w-5 h-5"
              />
              <p className="text-black text-sm leading-6 font-medium">45:08</p>
            </div>
          </div>
        </div>
        <OrderColumn />
      </Layout>
    </div>
  );
}

export default App;

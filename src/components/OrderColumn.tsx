import { ordersList } from "../data/ordersData";

export const OrderColumn = () => {
  return (
    <div className="flex gap-4 w-full mb-[50px]">
      {ordersList.map((col) => {
        return (
          <div key={col.status} className="bg-[#EEF0F2] rounded-md w-full">
            <p
              className="text-sm leading-6 p-3 text-white  rounded-t-md"
              style={{
                background: `${col.bgColor}`,
              }}
            >
              {col.status} ({col.items.length})
            </p>
            <div className="flex flex-col gap-2 py-3 px-2">
              {col.items.map((item, index) => {
                return (
                  <div key={index} className="bg-white rounded-md">
                    <div className="flex items-center p-3 justify-between border-b border-[#E5E9EB]">
                      <div className="flex items-center gap-2">
                        <p className="text-[#1A2024] font-bold text-lg leading-6">
                          ID:{item.id}
                        </p>
                        <img
                          src="/svg/info.svg"
                          alt="info"
                          className="w-4 h-4"
                        />
                      </div>
                      <div className="flex items-center gap-2">
                        <p className="text-[#6E8BB7] text-xs leading-[21px]">
                          {item.price}
                        </p>
                        <img
                          src={item.paymentType}
                          alt="house"
                          className="w-4 h-4"
                        />
                        <img src={item.icon} alt="house" className="w-4 h-4" />
                      </div>
                    </div>

                    <div className="flex flex-col items-start gap-3 p-2">
                      {item.meals.map((meal) => {
                        return (
                          <div key={meal.title}>
                            <p className="text-black text-sm leading-[21px] font-medium">
                              {meal.title}
                            </p>
                            {"addons" in meal && (
                              <div className="flex flex-col gap-0.5 mt-0.5">
                                {meal.addons?.map((addon) => {
                                  return (
                                    <p
                                      key={addon.title}
                                      className="text-[#48535B] text-xs leading-[14.54px] font-normal"
                                    >
                                      {addon.title}
                                    </p>
                                  );
                                })}
                              </div>
                            )}
                          </div>
                        );
                      })}
                      <div className="flex items-center gap-1.5 w-full justify-end">
                        <img
                          src={item.clockIcon}
                          alt="clock"
                          className="w-4 h-4"
                        />
                        <p className="text-[#6E8BB7] text-xs leading-4 font-medium">
                          {item.time}
                        </p>
                      </div>
                    </div>
                    {"options" in item && (
                      <div className="flex gap-1.5 p-3 border-t border-[#E5E9EB]">
                        {item.options?.map((option) => {
                          return (
                            <button
                              key={option.title}
                              className={
                                option.title === "Отменить"
                                  ? "border border-[#E5E9EB] text-[#F76659] py-[5px] flex items-center justify-center gap-1 w-full rounded-md text-sm leading-6 font-medium"
                                  : option.title === "Принять"
                                  ? "bg-[#0E73F6] text-white p-1.5 flex items-center justify-center gap-1 w-full rounded-md text-sm leading-6 font-medium"
                                  : "border border-[#0E73F6] p-[5px] text-sm leading-6 font-medium text-[#0E73F6] flex items-center justify-center gap-1 w-full rounded-md"
                              }
                            >
                              {("icon" in option && (
                                <img src={option.icon} alt="icon" />
                              )) ||
                                ""}
                              <p>{option.title}</p>
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

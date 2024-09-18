export const Aside = () => {
  return (
    <aside className="bg-white border-r border-[#E5E9EB] flex flex-col">
      <div className="py-[11.5px] px-[12px] border-b border-[#E5E9EB]">
        <div className="rounded-full bg-[#0974E9] w-8 h-8 flex items-center justify-center">
          <p className="text-base leading-[14px] text-white">D</p>
        </div>
      </div>
      <div className="p-3">
        <img src="/images/main-menu.png" alt="menu" className="w-8 h-8" />
      </div>
      <div className="mt-auto flex flex-col items-center">
        <div className="p-[18px] w-full flex items-center justify-center border-b border-[#E5E9EB]">
          <img src="/svg/settings.svg" alt="settings" className="w-5 h-5" />
        </div>
        <div className="p-3">
          <img src="/images/avatar.png" alt="settings" className="w-8 h-8" />
        </div>
      </div>
    </aside>
  );
};

import { Aside } from "./Aside/Aside";
import { Header } from "./Header/Header";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  return (
    <div className="flex">
      <Aside />
      <div className="flex flex-col items-start w-full">
        <Header />
        <main className="p-4 pb-0 w-full">{children}</main>
      </div>
    </div>
  );
};

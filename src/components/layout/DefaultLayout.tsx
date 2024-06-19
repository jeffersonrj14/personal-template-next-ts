import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";
import AppFooter from "@/components/shared/AppFooter";
import PagesMetaHead from "@/components/PagesMetaHead";

interface DefaultLayoutProps {
  children: ReactNode;
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <>
      <PagesMetaHead />
      <Toaster />
      <div>{children}</div>
      <AppFooter />
    </>
  );
};

export default DefaultLayout;

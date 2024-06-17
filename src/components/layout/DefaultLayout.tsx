import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";
// import AppHeader from '../shared/AppHeader';
import AppFooter from "@/components/shared/AppFooter";
import PagesMetaHead from "@/components/PagesMetaHead";

interface DefaultLayoutProps {
  children: ReactNode;
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <>
      <PagesMetaHead />
      {/* <AppHeader /> */}
      <div>
        <Toaster />
      </div>
      <div>{children}</div>
      <div className="text-center">
        <AppFooter />
      </div>
    </>
  );
}

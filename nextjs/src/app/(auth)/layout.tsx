import { type PropsWithChildren } from "react";

export function Layout({ children }: PropsWithChildren) {
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      { children }
    </div>
  );
};

export default Layout;


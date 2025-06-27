import Explorer from "@/components/explorer";
import { ChildrenType } from "@/types/types";

export const metadata = {
  title: "Explorer",
  description: "Explore your files and folders",
};

const Layout = ({ children }: ChildrenType) => {
  return <Explorer>{children}</Explorer>;
};
export default Layout;

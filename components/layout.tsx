import Footer from "./footer";
import Headers from "./head";
import Navbar from "./navbar";
import Topbar from "./topbar";
import Topbar2 from "./topbar2";

function Layout({ children }: { children: any }) {
  return (
    <div>
      <Headers />
      <Topbar />
      <Navbar />
      <Topbar2 />
      {children}
      <Footer />
    </div>
  );
}
export default Layout;

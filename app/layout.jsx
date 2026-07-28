import "@/assets/styles/global.css";
import "photoswipe/dist/photoswipe.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import AuthProvider from "@/components/AuthProvider";
import ToastProvider from "@/components/ToastProvider";
import { GlobalProvider } from "@/context/GlobalContext";


export const metadata = {
  verification: {
    google: 'Tmtj5yyUkAKLOOJ93UF5a-uDmAHeY4rOdAMF_a4Xlfs',
  },
};
const MainLayout = ({ children }) => {
  return (
    <AuthProvider>
      <GlobalProvider>
        <html>
          <body>
            <Navbar />
            <main>{children}</main>
            <Footer />
            <ToastProvider />
          </body>
        </html>
      </GlobalProvider>
    </AuthProvider>
  );
};

export default MainLayout;

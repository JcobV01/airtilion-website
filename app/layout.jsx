import { headers } from "next/headers";
import { ToastContainer } from 'react-toastify'
import { Poppins } from 'next/font/google';
import 'react-toastify/dist/ReactToastify.css';
import "../styles/global.css"
import Navbar from "@components/Navbar";



export const metadata = {
  title: "Airtilion",
  description: "Nowoczesne strony internetowe, sklepy online, projekty graficzne i aplikacje mobilne. Skontaktuj się z nami, aby poznać naszą ofertę i rozwiązania dla Ciebie!"
}

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
})


const rootLayout = ({ children }) => {
  const headersList = headers();

  // Odczytaj nagłówek 'x-current-path', który został ustawiony przez middleware
  const currentPath = headersList.get('x-current-path');

  console.log(currentPath)

  return (
    <html lang="pl-PL" className="scroll-smooth">
      <body className={`${poppins.className} w-dvw overflow-x-hidden bg-center`}>
        <Navbar/>
        {children}
        <ToastContainer position="bottom-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="dark" />
      </body>
    </html>
  )
}

export default rootLayout
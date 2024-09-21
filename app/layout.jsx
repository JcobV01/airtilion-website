import { headers } from "next/headers";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import "../styles/global.css"

export const metadata = {
  title: "Airtilion",
  description: "Airtilion - najlepsza firma, która zmienia rynek stron internetowych"
}



const rootLayout = ({ children }) => {
  const headersList = headers();

  // Odczytaj nagłówek 'x-current-path', który został ustawiony przez middleware
  const currentPath = headersList.get('x-current-path');

  console.log(currentPath)

  return (
    <html lang="pl-PL" className="scroll-smooth">
      <body className="w-dvw overflow-x-hidden bg-center" style={{ height: currentPath == '/' ? '100dvh' : '', minHeight: 'calc(100vh - 450px)' }}>
        {children}
        <ToastContainer position="bottom-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="dark" />
      </body>
    </html>
  )
}

export default rootLayout
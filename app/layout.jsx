import "../styles/global.css"

export const metadata = {
    title: "Airtilion",
    description: "Airtilion - najlepsza firma, która zmienia rynek stron internetowych"
}



const rootLayout = ({children}) => {
  return (
    <html lang="pl-PL">
        <body className="w-dvw h-dvh overflow-x-hidden bg-center">
            {children}
        </body>
    </html>
  )
}

export default rootLayout
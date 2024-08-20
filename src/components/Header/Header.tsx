import "./Header.css"

interface HeaderProps {
  name: string
  surname: string
}

export const Header = ({ name, surname }: HeaderProps) => {
  return (
    <header className="header">
      <div className="header-wrapper">
        <span className="logo">LOGO</span>
        <p>
          {name} {surname}
        </p>
      </div>
    </header>
  )
}

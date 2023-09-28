import logo from "./assets/images/logo.svg"

const Header = () => {
  return (
    <header className="bg-soft-red text-very-pale-orange w-full flex justify-between p-6 rounded-xl drop-shadow-md">
      <div>
        <h4 className="mb-1">My balance</h4>

        <strong className="text-3xl">$921.48</strong>
      </div>

      <img src={logo} alt="Logo" className="w-20" />
    </header>
  )
}

export default Header
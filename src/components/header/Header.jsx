import profile from "../../assets/react.svg"
const Header = () => {
  return (
    <header className="flex justify-between p-4 mx-4 border-b-1">
      <h1 className="text-4xl font-bold">Blog Post</h1>
      <img src={profile} alt=""/>
    </header>
  )
}

export default Header

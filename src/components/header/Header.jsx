import profile from "../../assets/react.svg"
const Header = () => {
  return (
    <div className="flex justify-between p-4 mx-4 border-b-1">
      <h1 className="text-4xl font-bold">Blog Post</h1>
      <img src={profile} alt=""/>
    </div>
  )
}

export default Header

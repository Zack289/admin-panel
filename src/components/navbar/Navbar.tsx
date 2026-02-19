import "./navbar.scss"

const Navbar = () => {
  return (
    <div className='navbar'>
     <div className="logo">
      <img src="/logo.svg" alt="logo" />
      <span>Snow</span>
     </div>

     <div className="icons">
      <img src="/search.svg" alt="" />
      <img src="/app.svg" alt="" />
      <img src="/expand.svg" alt="" />

      <div className="notification">
        <img src="/notifications.svg" alt="" />
        <span>1</span>
      </div>

      <div className="user">
        <img src="https://imgs.search.brave.com/dzfrT-ubH7nIwK12klU91N9AZgfQlK9crpFKYZ6z7xI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDk2NTAz/NTIuanBn" alt="" />
        <span>John</span>
      </div>

      <img src="/setting.svg" alt="" />
     </div>
    </div>
  )
}

export default Navbar

const Header = () => {
  return (
    <nav className="flex max-sm:flex max-sm:flex-col max-sm:gap-1  w-full px-2 shadow-2xl justify-between items-center sticky bg-[#fff] top-0 z-10">
      <h1 className="text-2xl font-bold">Tech Stacks </h1>
      <main className="w-[70%] max-sm:w-[105%] max-sm:text-[13px]  flex justify-end">
        <a className="m-4 " href="/">Home</a>
        <a className="m-4 " href="/contact">Contact</a>
        <a className="m-4 " href="/#about">About</a>
        <a className="m-4 " href="/#brands">Brands</a>
        <a className="m-4 " href="/services">Services</a>
      </main>
    </nav>
  )
}

export default Header
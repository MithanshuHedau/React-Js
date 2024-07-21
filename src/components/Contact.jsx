import Footer from "./Footer"
const Contact = () => {
  return (
    <div className="h-[100vh] relative  bg-[#0c1041]">
      <div id="contactform" className="bg-white rounded-r-[70px] w-[800px] absolute top-[20%] left-[20%] max-sm:top-[10%] max-sm:left-[3%] max-sm:w-[600px] h-[400px]">
        <h1 className="mx-5 font-bold text-xl py-5">Contact Form </h1>
        <div className="ml-[30%] max-sm:ml-[3.5%]">
          <label>Name : </label>
          <input className="border-2 mx-12 px-5 max-sm:mx-5 max-sm:px-1  border-gray-950" type="text"  /><br /><br />
          <label>Email    : </label>
          <input className="border-2 mx-12 px-5 max-sm:mx-6 max-sm:px-1 border-gray-950" type="email" /><br /><br />
          <label>Message  : </label>
          <input className="border-2 mx-5 px-5 max-sm:mx-0 max-sm:px-1 border-gray-950" type="text" />
        </div>
        <button className="absolute left-[45%] top-[60%] max-sm:left-[20%] bg-violet-700 text-white text-xl px-8 py-1">Submit </button>
      </div>
    </div>
  )
}

export default Contact
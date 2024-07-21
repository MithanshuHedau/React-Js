import { TypeAnimation } from 'react-type-animation';
import '../styles/Home.css';
import vg from '../assets/2.webp';
import Footer from './Footer';

const Home = () => {
  return (
    <div id="maindiv" className="relative w-full h-[100vh] max-sm:h-[80vh] bg-[#090C2A]">
      <div className="background-blur"></div>
      <main id='mm' className="flex flex-col w-full h-full p-14 items-end justify-center z-10">
        <h1 className="text-white max-sm:text-2xl max-sm:mt-[30px] max-sm:py-[20px] text-4xl font-mono">
          <TypeAnimation
            sequence={[
              'TECHYSTARS',
              2000,
              'We Archads',
              2000,
              'Top Accesorries',
              2000,
              'Best In Nagpur',
              2000
            ]}
            wrapper="span"
            speed={5}
            style={{ fontSize: '2em', display: 'inline-block' }}
            repeat={Infinity}
          />
        </h1>
        <p className="text-white text-base">Solution to all your problem</p>
      </main>

      <div className="mt-[-70px] bg-[#0c1041]  relative w-full min-h-[100vh]  z-1">
        <img id="image" src={vg} alt="Graphics" className="max-sm:top-36 absolute top-24 h-[300px] max-sm:w-[60%] max-sm:h-[200px] max-sm:mx-[-20px] w-[30%]"/>
        <div className="text-white w-full  h-full bg-[#0c1041]">
          <p className="w-1/2 absolute right-0 max-sm:top-[130px] top-[200px]">Lorem 100  ipsum dolor sit amet consectetur adipisicing elit. Veritatis illum reiciendis quas hic, pariatur distinctio nihil alias, esse voluptatum sed dolore perferendis corrupti! Corrupti odit sapiente, totam quibusdam eos labore.</p>
        </div>

        <div id="about" className="absolute rounded-r-[70px]  top-[60%]  h-[250px] w-1/2 max-sm:w-[300px] max-sm:h-[400px] bg-white">
        <p className="flex items-center pt-4 flex-col gap-5 h-full ">
          <h1 className="font-bold text-4xl ">Who We Are </h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam perspiciatis eligendi illo inventore dolorem, blanditiis veritatis id corrupti placeat quasi quisquam cum sapiente consequatur ut iusto nisi. Eligendi nemo numquam qui, est debitis suscipit corporis sit ratione, ut perferendis omnis dignissimos dolorum distinctio recusandae totam tenetur ipsum, velit corrupti deleniti ab? Fugiat et animi incidunt deserunt blanditiis odio, quas voluptates doloremque? Quas iste neque quidem deleniti facere, vo
        </p>
        </div>
      </div>

      <div id="brandssection" className="relative h-[70vh] bg-[#0c1041]">
      <div id="brands" className="h-[250px] rounded-l-[70px] px-10 absolute top-28 right-0 w-1/2 max-sm:w-[300px] max-sm:h-[290px] bg-white">
        <p className="flex items-center pt-4 flex-col gap-5 h-full ">
          <h1 className="font-bold text-4xl ">Brands Section  </h1>
          <div className="flex mt-[-20px]">
            <img className="w-[40%]" src="data:image/png;base64,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" alt="" />
            <img className="w-[40%]" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAw1BMVEX///87WZn///3///wyUI3u9/ktSoc7WZU4WZ/q8vQ8WJo7WpStvdAuUJD//f8zVJiCkKx/jLUyVpKptsknRo2TpcQxUJiVoMY9Vp4tSYg+Vpzk7PP///j6//8sS5E4VZTU3+jL1+PAy9ulsMBYcJU8VochP4Lx9P2+yNmDkbBJYpYzU54kSIpvgKAzToQvSpRse6O3y9hWaZkhPXpIW5JkdKVugqfW2uqlsc2svs7t7O99jrAwU6Vpf6fL0+gtTH+KnrfrTpZTAAAFGElEQVR4nO3dDVOjRhzH8d0lCbhLwEcOCBCND4kmp63V06u91vf/qgqJrQZDgBwd/kt/37vR3IyZ4XNLNoHFhDGEEEIIIYQQQgghhBBC9BKGSL9k35f/ym5EkRDb7mK8/bAmZUIRRQZzWLTc7rg/Oj2b2PZRUedO29tcP0M4Tjp88Whyvn9xGRwfL5LE8xLP9dzVX+/9putdTdve3rple6TB9mbXN4OFN59bknMprTD9tjFrMY2MrXsxtbLd1Jl9vU281CVlKjNNlWYWCOVgamgjjLKJJWKjk9s7N3UtRy2DyawCIOeLKdNookknzenrwC3mfM487qf/K5oUCxHbvWFodVWYbuj0lyTdJ03VUSFjZ5fuam7poFAwI2Kz23SC2TqraCw00j+zwTjkdXZQvYQGmwxkGNbaQfUSsqeg7v6pl5D1b+ZcmbVHUA+hyIbwYKj8+jxNhBnx7Ipf7rCL6iEU2TRz78rC19baC7MnCjvhvP40qoswckR8E5q88AhQeyFz2K/JTjhdhMJhX2sdL2knNIzRwO+0kLFzb3egDkKHXcx3m0Z1EYq9wK99RKGVkM16frfHkF3/xEyqh/De592eafo9y6wu/HwMmQqJny89Xahqj8P0h8xPKT7oGyxuG7G1SVJJqLifvniV/PDQXcv7rc+IC488FVYQmtJPbh8eDw6+5Lrur1Zz6PY6N6uMoRxcHI2ysRLGWtnhF3HhtzkvGcNscpGBHTNDZKvB6yuijhEJ0sKYPY7Lhi/kSi6emLN9sZtoIo5vqjwGgyOm4WJ2VjrRP5QDTavXJ/6cV5jBnPJZRsrxt+XyqTZrvR8yRL9XKgz58Hm1vK+dMJ0EjSpCdTfTzrYqFVYaQ5U8afowrCxcPHV7DH01ONV0DFk1oeSDkaZjWFFoWoNR2xu6cxBCSD8IIaRfVeFe2xu6cxjDN2HQ9TH0ISRcRWHXZxqu0RhG2TFhJP5peSaqglAGfVHU8mIOQkePE9u2v9vvfbefS08IcyWHz3ZhR7+3jVrrJbn1esP3esMK12Eobg1dd7g592oUUTpb/DJXvlwrLN9JlbS4b8nNWYs4onQC4OUPVf/6NTOUqvhOl6vf6KPSwfhnrkrYVHjPKE007OCwaaH/o+tC77rzwmfmdFuYzJhD6Xqa5oXBWdeFi5Fg3RYGU6PjYziOo27PpfKGdVkoTen+aJuUq2Ghku5L26RczQtP2iblanwvDey2SbmaFvLFpG1SroaFXCWnbZNyNSyUKqF2vr/h50Npjvttk3I1LeQP1C6Ablz42LYoX9NzKbkn/KbH0CT3hN+88LltUb6mhQm5yzJfPGnmzl6XO7JL9fnG891h8mfbonz7rlLLN7Z6K71dSWhJtSnzrxGl4/uslzvPm3sfm5cPosnleOhtjN7S6ffXk7VeT75UWF2zvJPc/f69f0zscSiMTy9BKqwBK+u48LWZQW0vZcz5sNaXvXdgJWGwF6V3zMc+/YoQwSpfE0VsZ6xeZSGl02m1ghBC+kEIIf0ghJB+EEJIPwghpB+EENIPQgjpByGE9IMQQvpBCCH9IISQfhBCSD8IIaQfhBDSD0II6QchhPSDEEL6QQgh/SCEkH4QQkg/CCGkH4QQ0g9CCOkHIYT0gxBC+kEIIf0ghJB+EP6PhDq/E1bgljWeL7QW7pd3va+vsHLk33luS1Fpxvo79XUwYVD6yKr/qOWH5Ola4ef+ffgAwOxDBRFCCCGEEEKo3f4GLNSK+Qo0N2oAAAAASUVORK5CYII=" alt="" />
          </div>
        </p>
        </div>
      </div>
      <Footer/>
      

      
    </div>
  );
};

export default Home;

import { Link } from 'react-router-dom';

import ProfileImage from '../assets/images/ryomen-sukuna-from-jujutsu-kaisen-kj-1366x768.jpg'

export default function About() {
  return (
    <>
      <div className='bg-black p-4 grid gap-6 md:grid-cols-2 '>
        <div className='space-x-4 text-1xl font-RubikMonoOne '>
          <Link className='border px-2 hover:bg-black hover:text-white  bg-white text-black' to="/Home">Home</Link>
          <Link className='border px-2 hover:bg-black hover:text-white  bg-white text-black' to="/Contact">Contact</Link>
          <Link className='border px-2 hover:bg-black hover:text-white  bg-white text-black' to="/Blog">Blog</Link>
          <Link className='border px-2 hover:bg-black hover:text-white  bg-white text-black' to="/Project">Projects</Link>
        </div>
        <p className='font-BlackOpsOne text-white'> <span className='text-3xl'>J</span> ava Fu : ) Stack <span className='md:text-3xl'>Developer</span></p>
        <p className=' md:text-3xl text-justify font-IndieFlower text-white  underline' >As a skilled developer, I bring a versatile toolkit to the table, proficient in HTML, CSS, and JavaScript—the foundational trio that underpins modern web development. With HTML, I structure web content intuitively, ensuring clarity and accessibility for users across platforms. CSS allows me to transform these structures into visually engaging interfaces, utilizing responsive design principles to adapt seamlessly to various screen sizes. JavaScript enhances my projects with dynamic functionality, from interactive forms to animated elements, leveraging its capabilities to enrich user experiences.</p>
        <div className='border-2 outline outline-offset-2 text-white grid place-items-center sm:gap-2 p-4 relative group transition duration-300'>
          <div className="hidden md:block size-full bg-black absolute group-hover:bg-opacity-0 transition duration-300">
            <p className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:hidden font-PermanentMarker text-2xl text-gray-400 animate-pulse '>Hey ! over here</p>
          </div>
          <img src={ProfileImage} alt="ProfileImage" className='lg:w-3/5 m-4' />
          <p className='font-IndieFlower text-2xl'>Hey there, me? "Vincent Reddy"</p>
          <p className='font-IndieFlower text-sm'>n I got some really good stuff - -</p>
          <p className='font-RubikMonoOne text-center'>HTML | CSS | JavaScript | ReactJS | Tailwind | Java | SpringBoot | MySQL | git</p>
          <p className='font-RubikMonoOne text-center'>ChatGPT | Notion</p>
        </div>
        <p className=' md:text-3xl text-justify font-IndieFlower text-white md:col-span-2 underline' >In tandem with these frontend skills, I harness the power of Tailwind CSS to expedite styling processes. Its utility-first approach enables rapid prototyping and customization, streamlining design iterations while maintaining consistency and scalability. On the backend, I specialize in Java Spring Boot, leveraging its robust framework to develop secure, scalable applications. From RESTful APIs to complex business logic, Spring Boot facilitates efficient integration with databases like MySQL, ensuring optimal data management and retrieval.</p>
        <p className=' md:text-3xl text-justify font-IndieFlower text-white  underline' >Beyond coding prowess, I embrace collaborative workflows facilitated by Git, ensuring version control and seamless teamwork. Git's branching strategies and merge capabilities empower me to manage project iterations effectively, fostering a cohesive development environment. With a strong foundation in MySQL, I adeptly design and optimize database schemas, ensuring data integrity and performance across diverse application architectures.</p>
        <p className=' md:text-3xl text-justify font-IndieFlower text-white  underline' >In essence, my journey as a developer is defined by a commitment to excellence and innovation across frontend and backend domains. I thrive on solving complex challenges, translating ideas into functional solutions that resonate with users. Whether crafting intuitive interfaces or architecting scalable systems, I leverage my skills in HTML, CSS, JavaScript, Tailwind CSS, Java Spring Boot, Git, and MySQL to drive projects forward, delivering robust applications that stand at the intersection of creativity and technical precision.</p>
      </div>
    </>
  )
}

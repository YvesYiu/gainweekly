import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className='md:flex bg-white rounded-lg p-24 justify-center'>
      <img
        className='h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6'
        src=''
      />
      <div className='text-center md:text-left'>
        <h2 className='text-lg'>Kenneth Yiu</h2>
        <div className='text-purple-500'>Full Stack Developer</div>
        <div className='text-gray-600'>Twitter: @yvesyiu</div>
        <div className='text-gray-600'>Nothing need to worry</div>
      </div>
    </div>
  )
}

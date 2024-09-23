import vegetables from '../assets/vegetables.jpg'

const IndexHeader = ({ children }) => {
  return (
      <header className={'h-[200px] flex justify-center items-center relative w-100 overflow-hidden bg-gradient-to-t rounded-b-xl  shadow-gray-400 shadow-md from-primary-500 to-transparent'}>
        <img src={ vegetables } alt={'Vegetables'} className='absolute -z-10'/>
        <h1 className='main_title text-white'>{children}</h1>
      </header>
  )
};

export default IndexHeader;
import vegetables from '../assets/vegetables.jpg'

const IndexHeader = ({ children }) => {
  return (
      <header className={'h-[200px] flex justify-center items-center relative w-100 overflow-hidden bg-gradient-to-t rounded-b-xl from-primary-500 to-transparent'}>
        <img src={ vegetables } alt={'Vegetables'} className='absolute -z-10'/>
        <h1 className='text-white font-bold text-6xl align-middle text-center'>{children}</h1>
      </header>
  )
};

export default IndexHeader;
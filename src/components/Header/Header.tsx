import Logo from '../../assets/images/corvinus2.jpg';

export const Header = () => {
  return (
    <header className='grid place-items-center bg-white'>
      <img
        className='size-[70%]'
        src={Logo}
        alt='logo'
      />
    </header>
  );
};

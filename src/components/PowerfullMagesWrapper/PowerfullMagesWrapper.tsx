interface PowerFullMagesWrapperProps {
  children: React.ReactNode;
}

export const PowerFullMagesWrapper: React.FC<PowerFullMagesWrapperProps> = ({
  children,
}) => {
  return <div className='flex flex-row justify-between'>{children}</div>;
};

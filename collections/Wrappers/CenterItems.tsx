interface CenterItemsProps {
  children: React.ReactNode;
}

export const CenterItems = ({ children }: CenterItemsProps) => {
  return (
    <div className="flex flex-row h-screen justify-center items-center">
      {children}
    </div>
  );
};

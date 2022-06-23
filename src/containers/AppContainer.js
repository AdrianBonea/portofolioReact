const AppContainer = ({ children }) => {
  return (
    <div className="bg-gradient-to-r from-[#F2F2FF] to-[#EBFAFF] h-full">
      <div className="mx-32 font-poppins">{children}</div>
    </div>
  );
};

export default AppContainer;

import Header from "./../header";

const CenteredLayout = ({ children, ...props }) => {
  return (
    <div {...props}>
      <Header />

      {children}
    </div>
  );
};

export default CenteredLayout;

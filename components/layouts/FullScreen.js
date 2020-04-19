import Footer from "../footer";

const FullScreen = ({ children, className, ...props }) => {
  return (
    <div className={className}>
      <main className="container" {...props}>
        {children}
      </main>

      <Footer />

      <style jsx>
        {`
          div {
            display: flex;
            flex-direction: column;
            width: 100vw;
            min-height: 100vh;
          }
        `}
      </style>
    </div>
  );
};

export default FullScreen;

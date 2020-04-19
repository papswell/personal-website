import Footer from "../footer";
import Header from "../header";

const FullScreen = ({ children, className, ...props }) => {
  return (
    <div className={className}>
      <Header />

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

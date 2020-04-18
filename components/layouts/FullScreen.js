const FullScreen = ({ children, ...props }) => {
  return (
    <div {...props}>
      {children}

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

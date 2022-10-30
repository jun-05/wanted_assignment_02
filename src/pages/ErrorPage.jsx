const ErrorPage = ({ message }) => {
  return (
    <div className="fixed flex items-center justify-center w-screen h-screen text-8xl">
      {message} ERROR PAGE
    </div>
  );
};

export default ErrorPage;

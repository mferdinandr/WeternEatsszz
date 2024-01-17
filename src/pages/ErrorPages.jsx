import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="flex justify-center min-h-screen items-center flex-col">
      <h1 className="font-bold text-3xl">OOPSSS...</h1>
      <h4 className="my-5 text-xl">Under Maintenance Lur</h4>
      {/* <p className="text-xl">{error.statusText || error.message}</p> */}
    </div>
  );
};

export default ErrorPage;

import PageContent from "../components/PageContent";
import { useRouteError } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

const ErrorPage = () => {
  const error = useRouteError();
  let message = "Something went wrong!";
  let title = "An error has occured!";
  console.log(error);
  if (error.status === 500) {
    message = JSON.parse(error.data).message;
  }
  if (error.status === 404) {
    message = "Could not found the source of page!";
    title = "Not found";
  }

  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
};
export default ErrorPage;

import PageContent from "./components/PageContent";
import PageHeader from "./components/PageHeader";
import PageTitle from "./components/PageTitle";

import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <div className=" w-[90%] mx-auto  p-16 rounded-xl relative bg-gray-100">
        <PageTitle />
        <div className="w-full m-auto ">
          <PageHeader />
          <PageContent />
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;

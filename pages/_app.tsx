import Navbar from "../components/Navbar";
import Siderbar from "../components/Siderbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="grid grid-cols-12 gap-6 my-14 lg:px-48 sm:px- md:px-">
      <div className="col-span-12 p-4 text-center bg-white lg:col-span-3 rounded-2xl">
        <Siderbar />
      </div>
      <div className="flex flex-col col-span-12 bg-white lg:col-span-9 rounded-2xl">
        <Navbar />
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;

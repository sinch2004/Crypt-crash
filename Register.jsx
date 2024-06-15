import { useState } from "react";
import moment from "moment";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Register({ state, acc }) {
  const [fullname, setFullname] = useState();
  const [email, setEmail] = useState();
  const [address, setAddress] = useState();
  const [pincode, setPincode] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [PSN, setPSN] = useState();

  const changeContract = async (event) => {
    try {
      if (
        fullname !== "" &&
        email !== "" &&
        address !== "" &&
        pincode !== "" &&
        title !== "" &&
        description !== "" &&
        PSN !== ""
      ) {
        event.preventDefault();
        const Pincode = Number(pincode);
        const date = moment().format("MMMM Do YYYY, h:mm:ss a");
        const { contract } = state;
        const idText = await contract.methods.id().call();
        await contract.methods
          .addFIR(
            fullname,
            email,
            address,
            Pincode,
            title,
            description,
            PSN,
            date
          )
          .send({ from: acc });
        toast.success(`Your FIR ID ${Number(idText)} is registered`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        console.log("Hii");
      }
    } catch (error) {
      toast.error("Check all field must need to be fill.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      console.log("Byee");
    }
  };

  const styles = {
    minHeight: "90vh",
  };
  const bgcolor = {
    backgroundColor: "#161e2d",
  };
  return (
    <>
      <ToastContainer />
      <section class="text-gray-400 bg-gray-900 body-font relative">
        <form
          class="container px-5 py-24 mx-auto"
          style={styles}
          autocomplete="off"
        >
          <div class="flex flex-col text-center w-full mb-12">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
              REGISTER GRIEVANCE
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base"> Please fill
              the form correctly as the details entered will be used for further
              processing of your grievance.
            </p>
          </div>
          <div class="lg:w-1/2 md:w-2/3 mx-auto">
            <div class="flex flex-wrap -m-2">
              <div class="p-2 w-full">
                <div class="relative">
                  <label for="name" class="leading-7 text-sm text-gray-400">
                    Full Name
                  </label>
                  <input
                    type="text"
                    autocomplete="off"
                    id="name"
                    name="name"
                    onChange={(e) => setFullname(e.target.value)}
                    class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div class="p-2 w-full">
                <div class="relative">
                  <label for="email" class="leading-7 text-sm text-gray-400">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email_id"
                    onChange={(e) => setEmail(e.target.value)}
                    class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div class="p-2 w-full">
                <div class="relative">
                  <label for="name" class="leading-7 text-sm text-gray-400">
                    Address
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={(e) => setAddress(e.target.value)}
                    class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div class="p-2 w-full">
                <div class="relative">
                  <label for="name" class="leading-7 text-sm text-gray-400">
                    Pincode
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={(e) => setPincode(e.target.value)}
                    class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>

              <label
                for="countries"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select an option
              </label>
              <select
                id="countries"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                class="bg-gray-800 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                style={bgcolor}
              >
                <option></option>
                <option> Theft / चोरी </option>
                <option> Violence / हिंसा </option>
                <option> Cyber Crime / साइबर क्राइम </option>
                <option> Drug / नशीली पदार्थ </option>
                <option> Homicide / मानव हत्या </option>
                <option> Other / अन्य </option>
              </select>

              <div class="p-2 w-full">
                <div class="relative">
                  <label for="message" class="leading-7 text-sm text-gray-400">
                    Description
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    onChange={(e) => setDescription(e.target.value)}
                    class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div class="p-2 w-full">
                <div class="relative">
                  <label for="name" class="leading-7 text-sm text-gray-400">
                    Police Station Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={(e) => setPSN(e.target.value)}
                    class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div class="p-2 w-full">
                <button
                  class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                  onClick={changeContract}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
}

export default Register;

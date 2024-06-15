import { useState, useRef } from "react";
import moment from "moment";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Admin({ state }) {
  const [check_id, setCheck_id] = useState();
  const checkid = async (e) => {
    let acc = "";
    let owner = "";
    try {
      e.preventDefault();
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      acc = accounts[0];
      console.log(acc);
      owner = await contract.methods.owner().call();
      console.log(owner);
    } catch (error) {
      toast.error("Connect to Metamask", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
    if (acc === owner.toLowerCase()) {
      try {
        e.preventDefault();
        const { contract } = state;
        const check_idText = await contract.methods.check_id().call();
        console.log(Number(check_idText));
        setCheck_id(Number(check_idText));
      } catch (error) {
        toast.error("Connect to Metamask", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    } else {
      toast.error("You are not the admin", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  const [list, setList] = useState([]);
  const { contract } = state;
  const getdata = async (e) => {
    try {
      e.preventDefault();
      console.log(check_id);
      const nameText = await contract.methods.USER_FIR_LIST(check_id).call();
      console.log(nameText);
      setList(nameText);
      toast.success("Here is your FIR Detail", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } catch (error) {
      toast.error("No data at that Token", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  const approve = async (e) => {
    try {
      e.preventDefault();
      const date = moment().format("MMMM Do YYYY, h:mm:ss a");
      const { contract } = state;
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      await contract.methods
        .checkFIR(Number(1), date)
        .send({ from: accounts[0] });
      toast.success("Your FIR is registered", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      sendApprove(e);
    } catch (error) {
      toast.error("Something went wrong! Please try again.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  const reject = async (e) => {
    try {
      e.preventDefault();
      const date = moment().format("MMMM Do YYYY, h:mm:ss a");
      const { contract } = state;
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      await contract.methods
        .checkFIR(Number(2), date)
        .send({ from: accounts[0] });
      toast.success("Your FIR is registered", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      sendReject(e);
      console.log("Hii");
    } catch (error) {
      toast.error("Something went wrong! Please try again.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  const form = useRef();

  const sendApprove = (e) => {
    e.preventDefault();

    toast.success("Your FIR Copy is sented to your Email.", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

    emailjs
      .sendForm(
        "service_eprqrnd",
        "template_a73fyjy",
        form.current,
        "S-hUOdudXl0DJcoYB"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          toast.error("Something went wrong! Please try again.", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          console.log(error.text);
        }
      );
  };

  const sendReject = (e) => {
    e.preventDefault();

    toast.success("Your FIR Copy is sented to your Email.", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

    emailjs
      .sendForm(
        "service_eprqrnd",
        "template_eg1hm5h",
        form.current,
        "S-hUOdudXl0DJcoYB"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          toast.error("Something went wrong! Please try again.", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          console.log(error.text);
        }
      );
  };

  const styles = {
    minHeight: "90vh",
  };
  return (
    <>
      <ToastContainer />
      <section class="text-gray-400 bg-gray-900 body-font relative">
        <form
          class="container px-5 py-24 mx-auto"
          style={styles}
          ref={form}
          autocomplete="off"
        >
          <div class="flex flex-col text-center w-full mb-12">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
              CHECK GRIEVANCE
            </h1>
          </div>
          <div class="lg:w-1/2 md:w-2/3 mx-auto">
            <div class="flex flex-wrap -m-2">
              <div class="p-2 w-full">
                <div class="relative">
                  <label for="name" class="leading-7 text-sm text-gray-400">
                    Next Pending Complain ID
                  </label>
                  <input
                    type="text"
                    autocomplete="off"
                    id="name"
                    value={check_id}
                    readOnly
                    class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div class="p-2 w-full flex sm:flex-row flex-col justify-between items-center">
                <button
                  class="flex mb-0 flex items-center mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                  onClick={checkid}
                >
                  Get Pending FIR ID
                </button>

                <button
                  class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                  onClick={getdata}
                >
                  Get FIR Details
                </button>
              </div>

              <div class="p-2 w-full">
                <div class="relative">
                  <label for="name" class="leading-7 text-sm text-gray-400">
                    ID
                  </label>
                  <input
                    type="number"
                    autocomplete="off"
                    id="name"
                    name="id"
                    readOnly
                    value={Number(list[0])}
                    class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div class="p-2 w-full">
                <div class="relative">
                  <label for="name" class="leading-7 text-sm text-gray-400">
                    User Address
                  </label>
                  <input
                    type="text"
                    autocomplete="off"
                    id="name"
                    name="user_address"
                    readOnly
                    value={list[1]}
                    class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
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
                    readOnly
                    value={list[2]}
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
                    readOnly
                    value={list[3]}
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
                    name="address"
                    readOnly
                    value={list[4]}
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
                    name="pincode"
                    readOnly
                    value={list[5] === "" ? "" : Number(list[5])}
                    class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>

              <div class="p-2 w-full">
                <div class="relative">
                  <label for="name" class="leading-7 text-sm text-gray-400">
                    Title
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="title"
                    readOnly
                    value={list[6]}
                    class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>

              <div class="p-2 w-full">
                <div class="relative">
                  <label for="message" class="leading-7 text-sm text-gray-400">
                    Description
                  </label>
                  <textarea
                    id="message"
                    name="description"
                    readOnly
                    value={list[7]}
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
                    name="PSN"
                    readOnly
                    value={list[8]}
                    class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div class="p-2 w-full">
                <div class="relative">
                  <label for="name" class="leading-7 text-sm text-gray-400">
                    Date & Time
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="date_time"
                    readOnly
                    value={list[9]}
                    class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div class="p-2 w-full">
                <div class="relative">
                  <label for="name" class="leading-7 text-sm text-gray-400">
                    Status
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="status"
                    readOnly
                    value={
                      Number(list[10]) === 1
                        ? "Approved"
                        : Number(list[10]) === 2
                        ? "Rejected"
                        : Number(list[10]) === 0
                        ? "Pending"
                        : ""
                    }
                    class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div class="p-2 w-full">
                <div class="relative">
                  <label for="name" class="leading-7 text-sm text-gray-400">
                    Status Date & Time
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="status_date_time"
                    readOnly
                    value={
                      list[11] === ""
                        ? "Pending"
                        : list[11] !== ""
                        ? list[11]
                        : "NaN"
                    }
                    class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div class="p-2 w-full flex sm:flex-row flex-col justify-between items-center">
                <button
                  class="flex mb-0 flex items-center mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                  style={{ backgroundColor: "green" }}
                  onClick={approve}
                >
                  Approve
                </button>

                <button
                  class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                  style={{ backgroundColor: "red" }}
                  onClick={reject}
                >
                  Reject
                </button>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
}
export default Admin;
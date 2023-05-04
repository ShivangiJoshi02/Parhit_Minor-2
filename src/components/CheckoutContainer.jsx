import React, { useState } from "react";

const CheckoutContainer = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  });

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };

  // connect with firebase
  const submitData = async (event) => {
    event.preventDefault();
    const { firstName, lastName, phone, email, address, message } = userData;

    if (firstName && lastName && phone && email && address && message) {
      const res = fetch(
        "https://parhitv3-default-rtdb.firebaseio.com//userDataRecords.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            lastName,
            phone,
            email,
            address,
            message,
          }),
        }
      );

      if (res) {
        setUserData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          address: "",
          message: "",
        });
        alert("Data Stored");
      } else {
        alert("plz fill the data");
      }
    } else {
      alert("plz fill the data");
    }
  };

  return (
    <div className=" px-4" >
      <div  >
        <p className="text-headingColor lg:text-[3rem] font-bold py-4"> Donation Form </p>
        <p className="text-headingColor lg:text-[1rem] font-bold"> We want to thank you for your generosity and support. 
        <p className="text-headingColor lg:text-[1rem] font-bold"> Your kindness has made a difference, and we are grateful for your partnership in making the world a better place. 
        </p></p>
      </div>



      <h2 className="flex items-center justify-center bg-orange-200 w-full py-4 text-headingColor lg:text-[1.5rem] font-bold">Fill the details to request for donation.</h2>

      <div className="flex items-center justify-center bg-orange-200 w-full py-4" >


        <form

          method="POST"
          className="w-full max-w-lg">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                class="block uppercase tracking-wide text-gray-700 text-lg font-bold mb-2" for="grid-first-name"
                value={userData.firstName}
                onChange={postUserData}
                autoComplete="off"
                required
              />
              <input
                type="text"
                name="lastName"
                autoComplete="off"
                required
                class="block uppercase tracking-wide text-gray-700 text-lg font-bold mb-2" for="grid-first-name"


                placeholder="Last Name"
                value={userData.lastName}
                onChange={postUserData}
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                class="block uppercase tracking-wide text-gray-700 text-lg font-bold mb-2" for="grid-first-name"
                value={userData.email}
                onChange={postUserData}
                autoComplete="off"
                required
              />
              <input
                type="text"
                name="phone"
                autoComplete="off"
                required
                placeholder="Phone Number "
                class="block uppercase tracking-wide text-gray-700 text-lg font-bold mb-2" for="grid-first-name"
                value={userData.phone}
                onChange={postUserData}
              />
              <input
                type="text"
                name="address"
                autoComplete="off"
                required
                placeholder="Add Address"
                class="block uppercase tracking-wide text-gray-700 text-lg font-bold mb-2" for="grid-first-name"
                value={userData.address}
                onChange={postUserData}
              />

              <textarea
                name="message"
                cols="30"
                rows="6"
                autoComplete="off"
                class="block uppercase tracking-wide text-gray-700 text-lg font-bold mb-2" for="grid-first-name"
                value={userData.message}
              onChange={postUserData}
                
                required></textarea>

              <button
                type="submit"
                className="bg-gradient-to-br margin-20 from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2  rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"

                onClick={submitData}>
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>

  );
};

export default CheckoutContainer;
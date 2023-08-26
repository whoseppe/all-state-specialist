"use client";
import React, { useState } from "react";
import axios from "axios";
import { DocumentCheckIcon } from "@heroicons/react/24/solid";

const ApplicationForm = ({ baseUrl }) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [appSubmitted, setAppSubmitted] = useState(false);
  const [fileUploaded, setFileUploaded] = useState(false);
  const [error, setError] = useState(false);
  const [emailData, setEmailData] = useState({
    role: "",
    fname: "",
    lname: "",
    email: "",
    phone: "",
    file: null,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setEmailData({ ...emailData, [name]: value });
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setEmailData({ ...emailData, file: file });
    setFileUploaded(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsProcessing(true);

    const formData = new FormData();
    formData.append("role", emailData.role);
    formData.append("fname", emailData.fname);
    formData.append("lname", emailData.lname);
    formData.append("email", emailData.email);
    formData.append("phone", emailData.phone);
    formData.append("file", emailData.file);

    axios
      .post(`${baseUrl}/application`, formData)
      .then((response) => {
        setIsProcessing(false);
        setAppSubmitted(true);
        // Handle success or display a success message to the user
      })
      .catch((error) => {
        setIsProcessing(false);
        setError(true);
        console.error(error);
        // Handle error or display an error message to the user
      });
  };

  const ApplicationSubmitted = () => (
    <div className="w-full">
      <p className="font-bold text-2xl">Success!</p>
      <p>
        Thank you for applying to All State Specialist! Your job application has
        been successfully submitted. Our team will review your application
        carefully. We will be in touch soon. Good luck!
      </p>
    </div>
  );

  const Error = () => (
    <div className="flex flex-col items-center justify-center mt-8">
      <div className="p-2 sm:p-8 max-w-4xl">
        <div className="w-full">
          <p className="font-bold text-2xl">Uh Oh!</p>
          <p>
            It seems like there was an issue submitting your application please
            try again. If the problem persists, please feel free to reach out to
            us!
          </p>
        </div>
      </div>
    </div>
  );

  if (error) return <Error />;
  return (
    <div className="flex flex-col items-center justify-center mt-8 p-2 sm:p-6">
      <div className="sm:p-8 max-w-4xl">
        <form
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          className="sm:p-6 border-2 border-black-800 rounded-2xl"
        >
          {appSubmitted ? (
            <ApplicationSubmitted />
          ) : (
            <div>
              <div className="p-2">
                <p className="font-forum text-5xl whitespace-nowrap">
                  Apply Now
                </p>
                <p className="mt-4">
                  Thank you for your interest in joining All State Specialist
                  LLC. We look forward to reviewing your application and
                  exploring the possibilities of building greatness together.
                </p>
                <p className="font-bold mt-2">
                  Kindly fill out the form below and submit your application.
                </p>
              </div>
              <div>
                <div className="p-2">
                  <label className="w-full">
                    <p className="font-bold mb-2">
                      <span className="text-orange font-bold">* </span>Desired
                      Position:{" "}
                    </p>
                    <input
                      required
                      className="bg-black-800 rounded-full text-white py-3 pl-3 ring-0 outline-0 w-full"
                      type="text"
                      name="role"
                      value={emailData.role}
                      onChange={handleInputChange}
                    />
                  </label>
                </div>
                <div className="flex flex-nowrap items-center">
                  <label className="m-2 w-full">
                    <p className="font-bold mb-2">
                      <span className="text-orange font-bold">* </span>First
                      Name:{" "}
                    </p>
                    <input
                      required
                      className="bg-black-800 rounded-full text-white py-3 pl-3 ring-0 outline-0 w-full flex-1"
                      type="text"
                      name="fname"
                      value={emailData.fname}
                      onChange={handleInputChange}
                    />
                  </label>
                  <label className="m-2 w-full">
                    <p className="font-bold mb-2">
                      <span className="text-orange font-bold">* </span>Last
                      Name:{" "}
                    </p>
                    <input
                      required
                      className="bg-black-800 rounded-full text-white py-3 pl-3 ring-0 outline-0 w-full flex-1"
                      type="text"
                      name="lname"
                      value={emailData.lname}
                      onChange={handleInputChange}
                    />
                  </label>
                </div>
                <div className="p-2">
                  <label className="w-full">
                    <p className="font-bold mb-2">
                      <span className="text-orange font-bold">* </span>Email:{" "}
                    </p>
                    <input
                      required
                      type="email"
                      name="email"
                      className="bg-black-800 rounded-full text-white py-3 pl-3 ring-0 outline-0 w-full"
                      value={emailData.email}
                      onChange={handleInputChange}
                    />
                  </label>
                </div>
                <div className="p-2">
                  <label className="w-full">
                    <p className="font-bold mb-2">
                      <span className="text-orange font-bold">* </span>Phone
                      Number:{" "}
                    </p>
                    <input
                      required
                      type="tel"
                      name="phone"
                      className="bg-black-800 rounded-full text-white py-3 pl-3 ring-0 outline-0 w-full"
                      value={emailData.phone}
                      onChange={handleInputChange}
                    />
                  </label>
                </div>
              </div>
              <div className="p-2">
                <p className="font-bold mb-2">
                  <span className="text-orange font-bold">* </span>Resume{" "}
                </p>
                <div className="flex items-center justify-center w-full mt-2">
                  <label
                    htmlFor="dropzone-file"
                    className="flex flex-col items-center justify-center w-full h-64 border-2 border-black-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      {fileUploaded ? (
                        <>
                          <DocumentCheckIcon className="h-8 w-8" />
                          <p className="font-bold mt-3">File Uploaded!</p>
                        </>
                      ) : (
                        <>
                          <svg
                            className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 16"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                            />
                          </svg>
                          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                            <span className="font-semibold">
                              Click to upload
                            </span>{" "}
                            or drag and drop
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            Acceptable file types (.PDF, .DOC, .DOCX)
                          </p>
                        </>
                      )}
                    </div>
                    <input
                      id="dropzone-file"
                      type="file"
                      className="hidden"
                      onChange={handleFileChange}
                    />
                  </label>
                </div>
              </div>
              <div className="p-2 mt-2">
                <button
                  className="w-full py-3 rounded-full bg-orange outline-0"
                  type="submit"
                >
                  {isProcessing ? (
                    <div role="status">
                      <svg
                        aria-hidden="true"
                        className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="currentColor"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentFill"
                        />
                      </svg>
                      <span className="sr-only">Loading...</span>
                    </div>
                  ) : (
                    <p className="font-bold">Submit Application</p>
                  )}
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ApplicationForm;

'use client';

import { FaCheck, FaEnvelope } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import Link from 'next/link';

const Contact = () => {
  const { register, handleSubmit, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  function onSubmit(data) {
    setIsSubmitting(true);
    function sendEmail(data) {
      const apiEndpoint = '/api/email';

      fetch(apiEndpoint, {
        method: 'POST',
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((response) => {
          console.log(response);
          reset();
          setIsSubmitting(false);
          setMessageSent(true);
          setTimeout(() => {
            setMessageSent(false);
          }, 5000);
        })
        .catch((err) => {
          console.log(err);
          setIsSubmitting(false);
          setMessageSent(false);
        });
    }
    sendEmail(data);
  }

  return (
    <section className="px-4 relative z-10 pb-24 sm:pb-40 ">
      <div className="grid place-content-center grid-cols-1 gap-y-8 lg:grid-cols-5 lg:max-w-screen-lg self-center bg-feldgrau-300 shadow-lg py-12 rounded-lg max-w-2xl mx-auto">
        <div className="lg:col-span-2 pl-8 pr-4 md:px-10 self-center">
          <h2 className="text-3xl sm:text-4xl text-beige-400 font-serif ">
            Ta kontakt!
          </h2>
          <p className=" text-lg ">
            Jeg er bosatt i Trysil, men kan ta på meg oppdrag over hele
            Innlandet. Forsikret gjennom gjensidige. Org.nr. 930775096 Ta
            kontakt, så lager vi en avtale!
          </p>

          <div className="mt-10 ">
            <Link href={`tel:97412054`} className="text-2xl font-bold ">
              +47 974 12 054
            </Link>

            {/* <address className="mt-2 not-italic ">
            </address> */}
          </div>
        </div>

        <div className=" lg:col-span-3 lg:pl-4 lg:pr-8 px-8">
          <form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="sr-only" htmlFor="name">
                Name
              </label>
              <input
                className="w-full rounded-lg p-3 text-sm  focus:outline outline-1 outline-offset-2 bg-beige-800 outline-beige-400 text-sea_green-200"
                placeholder="Name"
                type="text"
                id="name"
                {...register('name', { required: true })}
              />
            </div>

            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              <div>
                <label className="sr-only" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full rounded-lg p-3 text-sm  focus:outline outline-1 outline-offset-2 bg-beige-800 outline-beige-400 text-sea_green-200"
                  placeholder="Email address"
                  type="email"
                  id="email"
                  {...register('email', { required: true })}
                />
              </div>

              <div>
                <label className="sr-only" htmlFor="phone">
                  Phone
                </label>
                <input
                  className="w-full rounded-lg p-3 text-sm  focus:outline outline-1 outline-offset-2 bg-beige-800 outline-beige-400 text-sea_green-200"
                  placeholder="Phone Number"
                  type="tel"
                  id="phone"
                  {...register('phone', { required: false })}
                />
              </div>
            </div>
            <div>
              <label className="sr-only" htmlFor="subject">
                Subject
              </label>
              <input
                className="w-full rounded-lg p-3 text-sm  focus:outline outline-1 outline-offset-2 bg-beige-800 outline-beige-400 text-sea_green-200"
                placeholder="Subject"
                type="text"
                id="subject"
                {...register('subject', { required: true })}
              />
            </div>

            <div>
              <label className="sr-only" htmlFor="message">
                Message
              </label>

              <textarea
                className="w-full rounded-lg p-3 text-sm  focus:outline outline-1 outline-offset-2 bg-beige-800 outline-beige-400 text-sea_green-200"
                placeholder="Message"
                rows="8"
                id="message"
                {...register('message', { required: true })}
              ></textarea>
            </div>

            <div className="pt-2 pb-2">
              <button
                type="submit"
                className="group flex w-full justify-center items-center rounded-lg bg-feldgrau bg-opacity-80 shadow px-5 py-3 transition duration-300 ease-in-out focus:outline-none hover:bg-opacity-100 text-beige-400"
              >
                {isSubmitting ? (
                  <div
                    role="status"
                    className="w-36 flex items-center justify-center"
                  >
                    <svg
                      aria-hidden="true"
                      className="inline w-5 h-5  animate-spin dark:text-dutch_white-700 fill-hunyadi_yellow-300"
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
                    <span className="ml-2">Sending...</span>
                  </div>
                ) : messageSent ? (
                  <div className="w-36 inline-flex items-center">
                    <FaCheck className="mr-2 text-green-400" fontSize={15} />
                    <span className="text-green-400">Message Sent</span>
                  </div>
                ) : (
                  <div className="w-36 inline-flex items-center ">
                    <FaEnvelope className="mr-2" fontSize={15} />
                    Send Message
                  </div>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

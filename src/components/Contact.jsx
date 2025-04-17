"use client";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
const Contact= () => {
  // SVG content for the title
  const titleSvg = `<svg width="317" height="42" viewBox="0 0 317 42" fill="none" xmlns="http://www.w3.org/2000/svg" class="title-svg" style="width: 317px; height: 42px"> <text fill="#C778DD" xml:space="preserve" style="white-space: pre" font-family="Fira Code" font-size="32" font-weight="500" letter-spacing="0em"><tspan x="0" y="31.688">#</tspan></text> <text fill="white" xml:space="preserve" style="white-space: pre" font-family="Fira Code" font-size="32" font-weight="500" letter-spacing="0em"><tspan x="20" y="31.688">contacts</tspan></text> <path fill-rule="evenodd" clip-rule="evenodd" d="M317 21.5H190V20.5H317V21.5Z" fill="#C778DD"></path> </svg>`;


  // SVG content for the Email icon
  const emailIcon = `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 32px; height: 32px"> <path d="M5.07187 9.20292C5.2168 8.57709 5.57307 8.01832 6.08232 7.6181C6.59158 7.21789 7.22365 6.99996 7.875 7H25.125C25.7764 6.99996 26.4084 7.21789 26.9177 7.6181C27.4269 8.01832 27.7832 8.57709 27.9281 9.20292L16.5 16.0865L5.07187 9.20292ZM5 10.8207V20.8847L13.3418 15.8442L5 10.8207ZM14.7189 16.6758L5.27456 22.3807C5.50791 22.8657 5.87619 23.2753 6.33656 23.5619C6.79693 23.8486 7.33044 24.0005 7.875 24H25.125C25.6695 24.0001 26.2028 23.8479 26.6629 23.561C27.123 23.274 27.491 22.8643 27.724 22.3793L18.2796 16.6744L16.5 17.7468L14.7189 16.6744V16.6758ZM19.6582 15.8457L28 20.8847V10.8207L19.6582 15.8442V15.8457Z" fill="#ABB2BF"></path> </svg>`;


  return (
    <section className="  max-w-[1023px] mb-[14.5rem]">
           {/* Title Section */}
      <header className="mb-11 max-sm:mb-8">
        <div dangerouslySetInnerHTML={{ __html: titleSvg }} />
      </header>

      <div className="flex gap- justify-between items-start max-md:flex-col max-md:gap-8">
        {/* Description */}
        <p className="text-body font-medium text-gray w-[505px] max-md:mb-5 max-md:w-full max-sm:text-sm">
          I'm interested in freelance opportunities. However, if you have other
          request or question, don't hesitate to contact me
        </p>

        {/* Contact Box */}
        <aside className="flex flex-col gap-4 p-4 border border-gray-400 border-solid w-[32rem] max-md:w-full max-md:max-w-[400px] max-sm:p-3">
          <h2 className="text-base font-semibold text-white max-sm:text-sm">
            Message me here
          </h2>
          <div className="flex flex-col gap-2">
          <a className="flex gap-2.5 text-gray text-body items-center ml-2"><FontAwesomeIcon className="text-[2rem]" icon={faEnvelope } /> hazratabubakar91@gmail.com</a>
            <a className="flex gap-2.5 text-gray text-body items-center ml-2"><FontAwesomeIcon className="text-[2rem]" icon={faWhatsapp} /> +92344-518162-5</a>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Contact;

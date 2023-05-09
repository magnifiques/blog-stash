import React from "react";

const Footer = () => {
  return (
    <footer className="bg-wh-900 text-wh-50 py-10 px-10">
      <div className="justify-between mx-auto gap-16 sm:flex">
        {/* FIRST COLUMN */}
        <div className="mt-16 basis-1/2 sm:mt-0">
          <h4 className="font-bold">BLOG OF THE FUTURE</h4>
          <p className="my-5">Created with 💘</p>
          <p>© Blog of the Future All Rights Reserved.</p>
        </div>
        {/* SECOND COLUMN */}
        <div className="mt-16 basis-1/4 sm:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">
            <a href="https://github.com/magnifiques" target="_blank">
              My Github
            </a>
          </p>
          <p className="my-5">
            <a
              href="https://open.spotify.com/album/3WSHoNpx7QQMcmfm26wksh?si=6gL-kH90TLugYmF7Yc3mSA"
              target="_blank"
            >
              Some random link
            </a>
          </p>
          <p>
            <a
              href="https://www.youtube.com/watch?v=fSFlvWE3oVQ&pp=ygUNZ3Jhdml0eSBmYWxscw%3D%3D"
              target="_blank"
            >
              Some Random Video
            </a>
          </p>
        </div>
        {/* THIRD COLUMN */}
        <div className="mt-16 basis-1/4 sm:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">
            <a
              href="https://www.youtube.com/watch?v=Ox8TAnYQz8Q&pp=ygUhY2FsbCBtZSBpZiB5b3UgZ2V0IGxvc3Qgdm9pY2VtYWls"
              target="_blank"
            >
              Call Us
            </a>
          </p>
          <p className="my-5">(333)425-6825</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

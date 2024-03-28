import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
const Socials = () => {
  const socialMediaLinks = [
    { id: 0, href: "https://github.com/yemery", icon: <FaGithub /> },
    {
      id: 1,
      href: "https://www.linkedin.com/in/meryem-ajmani/",
      icon: <FaLinkedin />,
    },
    { id: 2, href: "mailto:meryemajmani33@gmail.com", icon: <MdEmail /> },
    { id: 3, href: "https://twitter.com/burzy__", icon: <FaXTwitter /> },
  ];
  return (
    <>
      <div className="fixed bottom-5 z-50">
        <ul className="flex gap-y-3 flex-col gap-x-3 w-fit ">
          {socialMediaLinks.map((e) => (
            <li key={e.id}>
              <a
                href={e.href}
                target="_blank"
                rel="noreferrer"
                className=" hover:text-green-700  dark:hover:text-primary-200 "
              >
                {e.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Socials;

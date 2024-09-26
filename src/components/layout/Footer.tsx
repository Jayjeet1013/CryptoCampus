import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-white border-t-2 text-black py-8 md:py-16 text-left relative overflow-hidden">
      <div className="max-w-6xl mx-auto ">
        <div className="md:flex md:flex-row md:justify-between">
          <div className="md:mt-0 md:flex-0 md:w-full md:mb-0 md:flex md:flex-col">
            <div className="flex flex-col gap-1">
              <Link href="/">CryptoZone</Link>
              <p className="text-xs md:text-sm font-normal">
                Secondary Marketplace for Real World Assets
              </p>
            </div>
          </div>

          <div className="w-[55%]  md:flex gap-6 flex-wrap md:gap-20">
            <div className="flex flex-col mb-5 md:mb-0">
              <p className="text-base md:text-lg font-medium mb-2 md:mb-4">
                About
              </p>
              <Link
                href="https://asvalabs.com/"
                target="_blank"
                className="text-sm md:text-base opacity-50 mb-4"
              >
                AsvaLabs
              </Link>
              <Link
                href={`mailto:contact@asvalabs.com`}
                className="text-sm md:text-base opacity-50"
                target="_blank"
              >
                Contact Us
              </Link>
            </div>
            <div className="flex flex-col mb-5 md:mb-0">
              <p className="text-base md:text-lg font-medium mb-2 md:mb-4">
                General
              </p>
              <Link
                href="#buyers"
                className="text-sm md:text-base opacity-50 mb-2"
              >
                Buyers
              </Link>
              <Link
                href="#asset"
                className="text-sm md:text-base opacity-50 mb-2"
              >
                Asset Owners
              </Link>
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSfWIJ9wQpTP6IKLhzO25v4mFw276r24AXnYhIO-QbD-H6T-nA/viewform"
                className="text-sm md:text-base opacity-50"
                target="_blank"
              >
                Join Waitlist
              </Link>
            </div>
            <div className="flex flex-col mb-5 md:mb-0">
              <p className="text-base md:text-lg font-medium mb-2 md:mb-4">
                Socials
              </p>
              <Link
                href="https://twitter.com/Tangidocom"
                className="text-sm md:text-base opacity-50 mb-2"
                target="_blank"
              >
                Twitter
              </Link>
              <Link
                href="https://t.me/AsvaLabsOfficial"
                className="text-sm md:text-base opacity-50 mb-2"
                target="_blank"
              >
                Telegram
              </Link>
              <Link
                href="https://www.linkedin.com/company/asvalabsofficial/"
                className="text-sm md:text-base opacity-50 mb-2"
                target="_blank"
              >
                Linkedin
              </Link>
              <Link
                href="https://discord.gg/8R4aUFxp4j"
                className="text-sm md:text-base opacity-50 mb-2"
                target="_blank"
              >
                Discord
              </Link>
              <Link
                href="https://asvalabs.medium.com/"
                className="text-sm md:text-base opacity-50"
                target="_blank"
              >
                Medium
              </Link>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center text-xs md:text-sm gap-1">
          Developed by{" "}
          <Link
            href="https://jayjeet-portfolio-tan.vercel.app/"
            target="_blank"
          >
            Jayjeet Kumar
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;

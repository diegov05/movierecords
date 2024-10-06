import Image from "next/image";
import { Card } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import Link from "next/link";

import { Head } from "./head";

import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Head />
      <Navbar />
      <main className="container mx-auto max-w-7xl px-6 flex-grow">
        {children}
      </main>
      <footer className="container mx-auto max-w-7xl px-6 flex-grow py-8">
        <Card className="w-full md:w-[50%] p-8">
          <div className="flex flex-col gap-8">
            <div className="flex justify-start items-center gap-1">
              <Image
                alt="movierecords logo"
                height={48}
                src={"/movierecords.png"}
                width={48}
              />
              <p className="font-semibold text-2xl text-inherit">
                movierecords
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-light">
                Movierecords is a personal side project designed and developed
                by by Diego Vargas with the sole purpose of learning ASP .NET
                used Next.js and Tailwindcss for the front-end :)
              </p>
              <div className="flex flex-col md:flex-row gap-4 md:gap-2">
                <Button
                  as={Link}
                  className="md:w-max"
                  color="primary"
                  href="https://github.com/diegov05/movierecords"
                  target="_a"
                  variant="shadow"
                >
                  Visit the repo
                </Button>
                <Button
                  as={Link}
                  className="md:w-max"
                  color="primary"
                  href="https://github.com/diegov05"
                  target="_a"
                  variant="flat"
                >
                  Check out my other projects
                </Button>
              </div>
            </div>
            <div className="flex flex-row gap-4 items-center">
              <a href="https://diegovargasv2.vercel.app/" target="_a">
                <svg
                  className="size-8 transition hover:opacity-70"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a href="https://www.github.com/diegov05">
                <a href="https://github.com/diegov05" target="_a">
                  <svg
                    className="size-8 transition hover:opacity-70"
                    fill="#131313"
                    height="1em"
                    stroke="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 1024 1024"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
                  </svg>
                </a>
              </a>
              <a href="https://www.linkedin.com/in/diegovs05" target="_a">
                <svg
                  className="size-8 transition hover:opacity-70"
                  fill="none"
                  height="27"
                  viewBox="0 0 28 27"
                  width="28"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_267_785)">
                    <path
                      d="M25.101 0H2.09297C0.99082 0 0.0996094 0.870117 0.0996094 1.9459V25.0488C0.0996094 26.1246 0.99082 27 2.09297 27H25.101C26.2031 27 27.0996 26.1246 27.0996 25.0541V1.9459C27.0996 0.870117 26.2031 0 25.101 0ZM8.10996 23.008H4.10215V10.1197H8.10996V23.008ZM6.10605 8.36367C4.81934 8.36367 3.78047 7.3248 3.78047 6.04336C3.78047 4.76191 4.81934 3.72305 6.10605 3.72305C7.3875 3.72305 8.42637 4.76191 8.42637 6.04336C8.42637 7.31953 7.3875 8.36367 6.10605 8.36367ZM23.1076 23.008H19.1051V16.7432C19.1051 15.2508 19.0787 13.326 17.0221 13.326C14.9391 13.326 14.6227 14.9555 14.6227 16.6377V23.008H10.6254V10.1197H14.4645V11.8811H14.5172C15.0498 10.8686 16.3576 9.79805 18.3035 9.79805C22.3588 9.79805 23.1076 12.4664 23.1076 15.9363V23.008Z"
                      fill="#131313"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_267_785">
                      <rect
                        fill="white"
                        height="27"
                        transform="translate(0.0996094)"
                        width="27"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </div>
          </div>
        </Card>
      </footer>
    </div>
  );
}

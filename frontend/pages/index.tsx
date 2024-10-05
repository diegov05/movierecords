import { Card, CardFooter } from "@nextui-org/card";
import Image from "next/image";
import { Button } from "@nextui-org/button";

import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-start justify-start gap-4 py-8 md:py-10">
        <Card
          isFooterBlurred
          className="h-96 w-full md:w-[70%] border-none flex justify-between items-start relative"
          radius="lg"
        >
          <Image
            fill
            alt="Oppenheimer"
            className="object-cover h-auto"
            src="https://www.hometheaterforum.com/wp-content/uploads/2023/11/oppenheimer-will-be-available-to-purchase-on-4k-uhd-blu-ray-v0-O50xoWj6sFuSyPzEBKR4We_rwMkNLT2Hg7xSBMRqOBY.webp"
          />

          <CardFooter className="justify-between border-white/20 border-1 overflow-hidden py-1 absolute bottom-4 right-8 w-[calc(65%_-_8px)] z-10">
            <p className="text-4xl text-white">Oppenheimer</p>
            <Button
              className="text-tiny text-white bg-black/20"
              color="default"
              radius="lg"
              size="sm"
              variant="flat"
            >
              Notify me
            </Button>
          </CardFooter>
        </Card>
      </section>
    </DefaultLayout>
  );
}

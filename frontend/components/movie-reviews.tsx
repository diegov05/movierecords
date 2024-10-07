/* eslint-disable prettier/prettier */

import { Card } from "@nextui-org/card";
import { Button } from "@nextui-org/button";


const MovieReviews = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row justify-between">
        <p className="opacity-70">4,783 Reviews</p>
        <Button color="primary" size="md" startContent={
          <svg
            className="size-4 md:size-5"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 4.5v15m7.5-7.5h-15"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        } variant="flat">
          Review
        </Button>
      </div>
      <div className="flex flex-col gap-6">
        <Card className="p-8 flex justify-start items-start gap-4 w-full md:w-[80%]">
          <div className="flex flex-row items-center gap-1">
            <svg className="size-4 md:size-6 fill-yellow-500" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-lg font-medium">8.2</span>
            <span className="text-lg font-light opacity-50">/10</span>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold">Murphy is exceptional</h3>
            <p>You&apos;ll have to have your wits about you and your brain fully switched on watching Oppenheimer as it could easily get away from a nonattentive viewer. This is intelligent filmmaking which shows it&apos;s audience great respect. It fires dialogue packed with information at a relentless pace and jumps to very different times in Oppenheimer&apos;s life continuously through it&apos;s 3 hour runtime. There are visual clues to guide the viewer through these times but again you&apos;ll have to get to grips with these quite quickly. This relentlessness helps to express the urgency with which the US attacked it&apos;s chase for the atomic bomb before Germany could do the same. An absolute career best performance from (the consistenly brilliant) Cillian Murphy anchors the film. This is a nailed on Oscar performance. In fact the whole cast are fantastic (apart maybe for the sometimes overwrought Emily Blunt performance). RDJ is also particularly brilliant in a return to proper acting after his decade or so of calling it in. The screenplay is dense and layered (I&apos;d say it was a thick as a Bible), cinematography is quite stark and spare for the most part but imbued with rich, lucious colour in moments (especially scenes with Florence Pugh), the score is beautiful at times but mostly anxious and oppressive, adding to the relentless pacing. The 3 hour runtime flies by. All in all I found it an intense, taxing but highly rewarding watch. This is film making at it finest. A really great watch.</p>
          </div>
          <div className="flex flex-row gap-4">
            <div className="flex flex-row items-center gap-2">
              <Button isIconOnly variant="light">
                <svg className="size-6 opacity-80" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Button>
              Helpful · 2.6k
            </div>
            <div className="flex flex-row items-center gap-2">
              <Button isIconOnly variant="light">
                <svg className="size-6 opacity-80 rotate-180" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Button>
              326
            </div>
          </div>
        </Card>
        <div>
          <span className="text-primary-400">Orlando_Gardner</span> · Jul 18, 2023
        </div>
      </div>
    </div>
  )
}

export default MovieReviews;
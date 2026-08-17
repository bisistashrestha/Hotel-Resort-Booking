/*import Image from "next/image";

const bgImage=encodeURI("/images/BackgroundImg1.jpg");

export default function Accomodations() {
  return (
        <section className="relative isolate overflow-hidden bg-black text-[var(--color-cream)]">
            <img src="/images/BackgroundImg1.jpg" alt="" className="w-full opacity-48 inline-flex" />
        </section>
);}*/
import Image from "next/image";
import RoomCard from "@/components/rooms/RoomCard";
import { rooms } from "@/lib/rooms";

const AccomodationsImage = encodeURI("/images/BackgroundImg1.jpg");

export default function Accommodations() {
  return (
    <section className="relative isolate overflow-hidden bg-black px-4 sm:px-6 py-14 sm:py-20 md:py-24">
      <Image
      src={AccomodationsImage}
      alt="Mountain resort courtyard with pool and distant peaks"
      fill
      sizes="100vw"	
      className="object-cover object-center opacity-20 absolute z-0"
    />
      <div className="relative z-10 mx-auto max-w-7xl">
        
        <div className="mb-10 sm:mb-12">
          <p className="text-xs sm:text-sm uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#B29552]">
            Accommodations
          </p>

          <h2 className="mt-3 font-heading text-3xl sm:text-4xl text-[var(--color-cream)] md:text-5xl">
            Stay amidst nature
          </h2>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {rooms.slice(0, 3).map((room) => (
            <RoomCard
              key={room.name}
              {...room}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
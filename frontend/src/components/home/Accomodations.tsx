import Image from "next/image";

const bgImage=encodeURI("/images/BackgroundImg1.jpg");

export default function Accomodations() {
  return (
        <section className="relative isolate overflow-hidden bg-black text-[var(--color-cream)]">
            <img src="/images/BackgroundImg1.jpg" alt="" className="w-full opacity-48 inline-flex" />
        </section>
);}
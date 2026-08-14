import Link from "next/link";
import Logo from "./Logo"; 

export default function Footer() {
  return (
    <section className="bg-[var(--color-deep-forest)] text-[var(--color-cream)] pt-5 relative">
      <div className="">
        <div className="shrink-0 justify-items-start pl-5">
                  <Logo />
        </div>
        <div className="grid grid-cols-2 items-start gap-x-8 pt-5 pl-5">

        <div className="flex flex-col gap-2 text-[var(--color-primary)]">
          <div>FOR BOOKINGS CONTACT</div>
          <div className="text-[var(--color-cream)]">
            1-234-111-322<br />
            +91 12345 12345<br />
            reservations@yamakaze.com
          </div>
          <div className="mt-2">CUSTOMER SUPPORT</div>
          <div className="text-[var(--color-cream)]">contactus@yamakaze.com</div>
        </div>


        <div className="flex flex-col gap-2 text-[var(--color-primary)]">
          <div>QUICK LINKS</div>
          <div className="text-[var(--color-cream)]">
            About Yama Kaze<br />
            Careers<br />
            Dining<br />
            Wellness<br />
            Experiences<br />
            Holidays<br />
            Terms of Service<br />
          </div>
        </div>
      </div>

      </div>
      <div className="text-[var(--color-cream)] w-full">
            <br></br>
            <hr></hr>
            <br></br>
            <div className="justify-self-center">
          ©️ 2026 Yama Kaze. All Rights Reserved.
            </div>
      </div>

    </section>
  );
}
import Image from "next/image";
import Link from "next/link";

type RoomCardProps = {
  name: string;
  type: string;
  description: string;
  price: string;
  image: string;
};

export default function RoomCard({
  name,
  type,
  description,
  price,
  image,
}: RoomCardProps) {
  return (
    <article className="group overflow-hidden bg-white">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          sizes="100vw"	
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="px-1 pt-6">
        <p className="mb-2 text-xs uppercase tracking-[0.25em] text-[#B29552]">
          {type}
        </p>

        <h3 className="font-heading text-2xl text-[#355E3B]">
          {name}
        </h3>

        <p className="mt-3 text-sm leading-6 text-gray-600">
          {description}
        </p>

        <div className="mt-5 flex items-center justify-between">
          <p className="text-sm text-gray-700">
            From <span className="font-semibold">{price}</span> / night
          </p>

          <Link
            href="/booking"
            className="text-sm font-medium text-[#355E3B] underline underline-offset-4 transition-colors hover:text-[#B29552]"
          >
            Explore
          </Link>
        </div>
      </div>
    </article>
  );
}
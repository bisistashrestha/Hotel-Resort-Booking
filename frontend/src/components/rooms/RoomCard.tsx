import Image from "next/image";
import Link from "next/link";

type RoomCardProps = {
  id?: number;
  name?: string;
  room_type?: string;
  room_type_name?: string;
  type?: string;
  description?: string | null;
  price?: string;
  price_per_night?: number | string;
  image?: string;
  className?: string;
};

export default function RoomCard({
  id,
  name,
  room_type,
  room_type_name,
  type,
  description,
  price,
  price_per_night,
  image,
  className = "",
}: RoomCardProps) {
  const roomName = room_type_name || name || room_type || "Room";
  const roomType = type || room_type_name || room_type || "Mountain stay";
  const roomDescription =
    description ||
    "A thoughtfully designed mountain retreat with warm materials, privacy, and a calming atmosphere.";
  const roomPrice =
    price ||
    (typeof price_per_night === "number"
      ? `₹${price_per_night.toLocaleString()}`
      : price_per_night
        ? `₹${Number(price_per_night).toLocaleString()}`
        : "₹0");
  const roomImage = image || "/images/Cedar Room.jpg";

  return (
    <article className={`group overflow-hidden bg-[#F6F1E8] ${className}`}>
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={roomImage}
          alt={roomName}
          fill
          sizes="100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <div className="px-1 pt-6">
        <p className="mb-2 text-xs uppercase tracking-[0.25em] text-[#B29552]">
          {roomType}
        </p>

        <h3 className="font-heading text-2xl text-[#355E3B]">
          {roomName}
        </h3>

        <p className="mt-3 text-sm leading-6 text-gray-600">
          {roomDescription}
        </p>

        <div className="mt-5 flex items-center justify-between gap-3">
          <p className="text-sm text-gray-700">
            From <span className="font-semibold text-[#355E3B]">{roomPrice}</span> / night
          </p>

          <Link
            href={id ? `/booking?roomId=${id}` : "/booking"}
            className="inline-flex items-center justify-center rounded-full bg-[var(--color-primary)] px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_20px_rgba(178,149,82,0.28)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--color-forest)]"
          >
            Explore
          </Link>
        </div>
      </div>
    </article>
  );
}
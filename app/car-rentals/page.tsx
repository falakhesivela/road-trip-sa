import { redirect } from "next/navigation";
import { CarRentals } from "@/components/car-rentals";
import { CAR_RENTALS_LIVE } from "@/lib/config";
import { ROUTES } from "@/lib/routes";

export default function CarRentalsPage() {
  // Hidden until there are real car-hire affiliate links — see lib/config.ts.
  if (!CAR_RENTALS_LIVE) redirect(ROUTES.home);
  return <CarRentals />;
}

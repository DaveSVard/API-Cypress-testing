import type { Metadata } from "next";
import { SeeSingleUser } from "../../components/SeeSingleUser";

export default function IndexPage() {
  return <SeeSingleUser/>;
}

export const metadata: Metadata = {
  title: "Single user",
};

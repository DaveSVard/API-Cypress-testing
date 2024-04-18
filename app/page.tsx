import type { Metadata } from "next";
import { Users } from "./components/Users";

export default function IndexPage() {
  return <Users/>;
}

export const metadata: Metadata = {
  title: "Users",
};

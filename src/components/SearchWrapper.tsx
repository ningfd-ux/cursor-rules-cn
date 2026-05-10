"use client";

import Search from "@/components/Search";
import { rules } from "@/data/rules";

export default function SearchWrapper() {
  return <Search rules={rules} />;
}

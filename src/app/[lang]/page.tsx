import { HomePage } from "@/ui-pages/Home/home.page";
import { ReactElement } from "react";

export default async function Page({params: { lang },}: { params: { lang: string }; }): Promise<ReactElement> {
  return <HomePage lang={lang} />;
}

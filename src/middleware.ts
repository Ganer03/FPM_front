import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextResponse, NextRequest } from "next/server";

import { languages } from "./language";
const locales = Object.keys(languages);

const getLocale = (request: NextRequest): string => {
  const defaultLocale = "ru-RU";
  const languages = new Negotiator({
    headers: Object.fromEntries(request.headers.entries()),
  }).languages();
  return match(languages, locales, defaultLocale);
};

export const middleware = async (request: NextRequest) => {
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = Object.keys(languages).some((locale) =>
    pathname.startsWith(`/${locale}`),
  );
  if (pathnameHasLocale) return;
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
};

export const config = {
  matcher: ["/((?!_next).*)", "/"],
};

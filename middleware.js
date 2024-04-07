import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextResponse } from "next/server";
const defaultLocale = "en";
const locales = ["bn", "en"];

function getLocale(request) {
  const acceptedLanguage = request.headers.get("accept-language") ?? undefined;
  const headers = { "accept-language": acceptedLanguage };
  const languages = new Negotiator({ headers }).languages();
  return match(languages, locales, defaultLocale);
}
export function middleware(request) {
  const pathname = request.nextUrl.pathname;
  const pathNameIsMissingLocale = locales.every(
    (locale) =>
      !pathname.startsWith(`/${locale}/`) && !pathname.startsWith(`/${locale}`)
  );
  if (pathNameIsMissingLocale) {
    const locale = getLocale(request);
    return NextResponse.redirect(
      new URL(`/${locale}/${pathname}`, request.url)
    );
  }

  return NextResponse.next();
}
export const config = {
  matcher: ["/((?!api|assets|.*\\..*|_next).*)"],
};

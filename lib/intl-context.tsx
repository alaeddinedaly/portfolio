// lib/intl-context.tsx
"use client";

import { createContext, useContext, useState } from "react";
import { NextIntlClientProvider } from "next-intl";
import enMessages from "@/messages/en.json";
import frMessages from "@/messages/fr.json";

const messagesMap = {
    en: enMessages,
    fr: frMessages
};

type Locale = 'en' | 'fr';

const IntlContext = createContext<{
    locale: Locale;
    setLocale: (locale: (prev) => (string)) => void;
}>({ locale: 'en', setLocale: () => {} });

export const useLocale = () => useContext(IntlContext);

export function IntlProvider({ children }: { children: React.ReactNode }) {
    const [locale, setLocale] = useState<Locale>('en');

    return (
        <IntlContext.Provider value={{ locale, setLocale }}>
            <NextIntlClientProvider locale={locale} messages={messagesMap[locale]}>
                {children}
            </NextIntlClientProvider>
        </IntlContext.Provider>
    );
}

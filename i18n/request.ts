import { getUserLocale } from "@/lib/locale";
import { getRequestConfig } from "@next-intl/server";

export default getRequestConfig(async () => {
    const locale = await getUserLocale();
    return {
        locale,
        messages: (await import(`@/messages/${locale}.json`)).default,
        // You can add other request configurations here if needed
    };
}
, {
    // This function can be used to handle errors or other request-specific logic
    onError: (error) => {
        console.error("Error in request configuration:", error);
        // Handle the error as needed, e.g., log it or return a default configuration
    },
});
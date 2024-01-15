import english from "./en.json";
import spanish from "./es.json";

const LANGUAGES = {
    EN: "en",
    ES: "es"
}

export const getI18N = ({ currentLocale = "en" }: { currentLocale?: string }) => {
    switch (currentLocale) {
        case LANGUAGES.EN:
            return english;
        case LANGUAGES.ES:
            return spanish;
        default:
            return english;
    }
}
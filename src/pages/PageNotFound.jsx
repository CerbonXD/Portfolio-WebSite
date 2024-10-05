import {useTranslation} from "react-i18next";

export default function PageNotFound() {
    const [t] = useTranslation();

    return (
        <div className="px-5 lg:px-20 text-center text-6xl mt-[4.375rem]">
            <h1>{t("page_not_found.warn")}</h1>
        </div>
    )
}
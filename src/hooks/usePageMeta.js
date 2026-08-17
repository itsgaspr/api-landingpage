import { useEffect } from "react";
import { useTranslation } from "../lib/i18n/index.js";

export function usePageMeta(page) {
  const { t } = useTranslation();
  const meta = t.meta[page];

  useEffect(() => {
    if (!meta) return;
    document.title = meta.title;

    let tag = document.querySelector('meta[name="description"]');
    if (!tag) {
      tag = document.createElement("meta");
      tag.setAttribute("name", "description");
      document.head.appendChild(tag);
    }
    tag.setAttribute("content", meta.description);
  }, [meta]);
}

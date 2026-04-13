import { useMemo } from "react";
import { useAppStore } from "@/store/appStore";
import { LINKS } from "@/data/links";

export function useFilteredLinks() {
  const { query, activeCategory, page, perPage } = useAppStore();

  return useMemo(() => {
    let filtered = LINKS;

    if (activeCategory !== "all") {
      filtered = filtered.filter((l) => l.category === activeCategory);
    }

    if (query.trim()) {
      const q = query.toLowerCase();
      filtered = filtered.filter(
        (l) =>
          l.label.toLowerCase().includes(q) ||
          l.description?.toLowerCase().includes(q) ||
          l.category.toLowerCase().includes(q),
      );
    }

    const totalItems = filtered.length;
    const totalPages = Math.max(1, Math.ceil(totalItems / perPage));
    const safePage = Math.min(page, totalPages);
    const start = (safePage - 1) * perPage;
    const paged = filtered.slice(start, start + perPage);

    return { links: paged, totalItems, totalPages, currentPage: safePage };
  }, [query, activeCategory, page, perPage]);
}

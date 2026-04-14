import { ChevronLeft, ChevronRight } from "lucide-react";
import { useAppStore } from "@/store/appStore";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
}

export function Pagination({ totalPages, currentPage }: PaginationProps) {
  const { setPage } = useAppStore();

  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "6px",
        paddingTop: "8px",
      }}
    >
      <button
        className="page-btn"
        onClick={() => setPage(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous page"
      >
        <ChevronLeft size={15} />
      </button>

      {pages.map((p) => (
        <button
          key={p}
          className={`page-btn${p === currentPage ? " active" : ""}`}
          onClick={() => setPage(p)}
          aria-label={`Page ${p}`}
          aria-current={p === currentPage ? "page" : undefined}
        >
          {p}
        </button>
      ))}

      <button
        className="page-btn"
        onClick={() => setPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next page"
      >
        <ChevronRight size={15} />
      </button>
    </div>
  );
}

"use client";

import * as React from "react";
import {
  PaginationContainer,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

type Props = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export default function Pagination2({
  currentPage,
  totalPages,
  onPageChange,
}: Props) {
  const getPages = (): (number | string)[] => {
    const visiblePages = 3;
    const pages: (number | string)[] = [];
    const half = Math.floor(visiblePages / 2);

    let startPage = Math.max(1, currentPage - half);
    let endPage = startPage + visiblePages - 1;

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, endPage - visiblePages + 1);
    }

    if (startPage > 1) {
      pages.push(1);
    }

    if (startPage > 2) {
      pages.push("start-ellipsis");
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    if (endPage < totalPages - 1) {
      pages.push("end-ellipsis");
    }

    if (endPage < totalPages) {
      pages.push(totalPages);
    }

    return pages;
  };

  if (totalPages <= 1) return null;

  return (
    <PaginationContainer className="justify-end">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
              e.preventDefault();
              if (currentPage > 1) onPageChange(currentPage - 1);
            }}
            className={
              currentPage === 1
                ? "pointer-events-none opacity-50"
                : "cursor-pointer"
            }
          />
        </PaginationItem>

        {getPages().map((page, idx) =>
          page === "start-ellipsis" || page === "end-ellipsis" ? (
            <PaginationItem key={`${page}-${idx}`}>
              <PaginationEllipsis className="h-8 w-8 sm:h-9 sm:w-9" />
            </PaginationItem>
          ) : (
            <PaginationItem key={page}>
              <PaginationLink
                href="#"
                isActive={currentPage === page}
                activeClassName="bg-pink-500 text-white border-pink-500"
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                  e.preventDefault();
                  onPageChange(Number(page));
                }}
                className="cursor-pointer h-8 w-8 sm:h-9 sm:w-9 text-xs sm:text-sm"
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          )
        )}

        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
              e.preventDefault();
              if (currentPage < totalPages) onPageChange(currentPage + 1);
            }}
            className={
              currentPage === totalPages
                ? "pointer-events-none opacity-50"
                : "cursor-pointer"
            }
          />
        </PaginationItem>
      </PaginationContent>
    </PaginationContainer>
  );
}

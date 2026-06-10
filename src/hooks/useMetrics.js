"use client";

import { useQuery } from "@tanstack/react-query";

export function useMetrics() {
    return useQuery({
        queryKey: ["metrics"],

        queryFn: async () => {
            const res = await fetch(
                "https://dummyjson.com/products?limit=6"
            );

            const data = await res.json();

            return data.products;
        },

        staleTime: 1000 * 60 * 5,
    });
}
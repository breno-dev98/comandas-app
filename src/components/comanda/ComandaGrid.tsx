'use client'

import { ComandaCard } from "./ComandaCard"

export function ComandaGrid() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            <ComandaCard />
            <ComandaCard />
            <ComandaCard />
        </div>
    )
}
'use client'

import { Toaster } from '@/components/ui/sonner'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { useState } from 'react'
import React from 'react'

const ReactQueryProvider = ({ children }: React.PropsWithChildren) => {
    const [queryClient] = useState(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        staleTime: Infinity,
                        retry: false,
                        retryOnMount: false,
                    },
                },
            })
    )

    return (
        <QueryClientProvider client={queryClient}>
            {children}
            <Toaster position="top-right" />
            <ReactQueryDevtools />
        </QueryClientProvider>
    )
}

export default ReactQueryProvider

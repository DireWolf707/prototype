'use client'

import Spinner from '@/components/loading/Spinner'
import { useGetPosts } from '@/lib/hooks/postHook'

export default function Home() {
    const { data: posts, isFetching } = useGetPosts()

    if (isFetching) return <Spinner />

    return (
        <div className="flex flex-wrap justify-center gap-4 p-8">
            {posts!.map((post) => (
                <div
                    key={post.id}
                    className="space-y-4 rounded-md border-2 p-4"
                >
                    <p className="text-wrap break-words border-b-4 text-lg font-extrabold">
                        {post.title}
                    </p>
                    <div className="flex items-center justify-between">
                        <div className="text-sm font-extralight">
                            [{post.createdAt.toLocaleDateString()}]
                        </div>
                        <span className="flex items-center justify-center text-wrap break-words rounded-full border-2 bg-red-800 px-2 font-extrabold text-neutral-100">
                            {post.topic}
                        </span>
                    </div>

                    <p className="text-center">{post.content}</p>
                </div>
            ))}
        </div>
    )
}

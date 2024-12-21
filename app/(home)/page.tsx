'use client'

import { useGetPosts } from '@/lib/hooks/post'

export default function Home() {
    const { data: posts, isFetching } = useGetPosts()

    if (isFetching) return 'loading...'

    return (
        <div className="flex flex-wrap justify-center gap-4 p-8">
            {posts!.map((post) => (
                <div
                    key={post.id}
                    className="min-w-64 space-y-4 rounded-md border-2 p-4"
                >
                    <div className="border-b-4 text-lg font-extrabold">
                        {post.title}
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="text-sm font-extralight">
                            [{post.createdAt.toLocaleDateString()}]
                        </div>
                        <span className="flex items-center justify-center rounded-full border-2 bg-red-800 px-2 font-extrabold text-neutral-100">
                            {post.topic}
                        </span>
                    </div>

                    <p className="text-center">{post.content}</p>
                </div>
            ))}
        </div>
    )
}

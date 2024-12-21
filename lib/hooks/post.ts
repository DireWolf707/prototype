import { useMutation } from '@tanstack/react-query'
import { createPostAction } from '@/lib/actions/post'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

export const useCreatePost = () => {
    const router = useRouter()

    return useMutation({
        mutationFn: createPostAction,
        onSuccess: () => {
            toast.success('Post created successfully')
            router.push('/')
        },
        onError: () => toast.error('Post not created'),
    })
}

import { useMutation } from '@tanstack/react-query'
import { createPostAction } from '@/lib/actions/post'
import { toast } from 'sonner'

export const useCreatePost = () => {
    return useMutation({
        mutationFn: createPostAction,
        onSuccess: () => toast('cool'),
        onError: () => toast('not cool'),
    })
}

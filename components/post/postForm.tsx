'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '../ui/textarea'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { postSchema, postT } from '@/app/zodSchema'
import { useMutation } from '@tanstack/react-query'
import { createPostAction } from '@/app/actions'
import { toast } from 'sonner'

const PostForm = () => {
    const form = useForm<postT>({
        resolver: zodResolver(postSchema),
        defaultValues: {
            title: '',
            content: '',
        },
    })

    const { mutateAsync: createPost } = useMutation({
        mutationFn: createPostAction,
        onSuccess: () => toast('cool'),
        onError: () => toast('not cool'),
    })

    return (
        <div className="mx-auto my-12 w-96">
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit((data) => createPost(data))}
                    className="space-y-2"
                >
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="content"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Content</FormLabel>
                                <FormControl>
                                    <Textarea
                                        className="resize-none"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="topic"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Topic</FormLabel>
                                <Select
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                >
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="select" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {['c++', 'javasript', 'python'].map(
                                            (val, i) => (
                                                <SelectItem value={val} key={i}>
                                                    {val}
                                                </SelectItem>
                                            )
                                        )}
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        </div>
    )
}

export default PostForm

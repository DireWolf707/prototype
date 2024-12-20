'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
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

const formSchema = z.object({
    title: z
        .string()
        .min(2, {
            message: 'Title must be at least 2 characters.',
        })
        .max(50, {
            message: 'Title must not be longer than 50 characters.',
        }),
    content: z
        .string()
        .min(10, {
            message: 'Content must be at least 10 characters.',
        })
        .max(50, {
            message: 'Content must not be longer than 50 characters.',
        }),
    topic: z.string({
        required_error: 'Please select an topic',
    }),
})

const PostForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: '',
            content: '',
        },
    })

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log(values)
    }

    return (
        <div className="mx-auto my-12 w-96">
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
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

'use client'
import React, { ChangeEvent } from 'react'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { UserValidation } from '@/lib/validations/user';
import { Button } from "@/components/ui/button"
import { z } from "zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Image from 'next/image';
import { Textarea } from '../ui/textarea';

interface Props {
    user: {
        id: string;
        objectId: string;
        username: string;
        name: string;
        bio: string;
        image: string;
    };
    btnTitle: string
}

export default function AccountProfile({ user, btnTitle }: Props) {
    const form = useForm({
        resolver: zodResolver(UserValidation),
        defaultValues: {
            profile_photo: user?.image || "",
            name: user?.name || "",
            username: user?.username || "",
            bio: user?.bio || "",
        }
    });

    const handleImage = (e: ChangeEvent, fieldChange: (value: string) => void) => {
        e.preventDefault();
    }
    function onSubmit(values: z.infer<typeof UserValidation>) {
        console.log(values)
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col justify-start gap-10">
                <FormField
                    control={form.control}
                    name="profile_photo"
                    render={({ field }) => (
                        <FormItem className='flex items-center gap-4'>
                            <FormLabel className='account-form_image_lable'>
                                {field.value ? (
                                    <Image src={field.value} alt="Profile" width={96} height={96} priority className='rounded-full object-contain' />
                                ) : (
                                    <Image src='/icons/profile.svg' alt="Profile" width={96} height={96} className='rounded-full object-contain' />
                                )}
                            </FormLabel>
                            <FormControl className='flex-1 ubuntu-medium text-gray-200'>
                                <Input type='file' accept='image/*' placeholder='Upload a photo' className='account-form_image-input' onChange={(e) => handleImage(e, field.onChange)} />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem className='flex flex-col items-start gap-3 w-full'>
                            <FormLabel className='ubuntu-medium text-light-2'>
                                Name
                            </FormLabel>
                            <FormControl className='flex-1 ubuntu-light text-gray-200'>
                                <Input type='text' placeholder='John Doe' className='account-form_input no-focus p-3' {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem className='flex flex-col items-start gap-3 w-full'>
                            <FormLabel className='ubuntu-medium text-light-2'>
                                Username
                            </FormLabel>
                            <FormControl className='flex-1 ubuntu-light text-gray-200'>
                                <Input type='text' placeholder='johndoe' className='account-form_input no-focus p-3' {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="bio"
                    render={({ field }) => (
                        <FormItem className='flex flex-col items-start gap-3 w-full'>
                            <FormLabel className='ubuntu-medium text-light-2'>
                                Bio
                            </FormLabel>
                            <FormControl className='flex-1 ubuntu-light text-gray-200'>
                                <Textarea rows={10} className='account-form_input no-focus p-3 resize-none' placeholder='Your bio goes here ...' />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <Button type="submit" className='bg-indigo-400'>Submit</Button>
            </form>
        </Form>
    )
}

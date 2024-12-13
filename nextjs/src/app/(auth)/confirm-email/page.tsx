import { redirect } from 'next/navigation';
import Form from "./confirm-email-form"

export default async function Route({ searchParams }: { searchParams: Promise<{ [key: string]: string | string [] | undefined }> }) {
    const { email } = await searchParams

    if(typeof email != 'string') {
      redirect('/')
    }

    return <Form email={email}/>
}

import Image from 'next/image'

export function Logo() {
    return (
        <div className="h-10 w-full">
            <Image src="/logo-light.svg" width={1000} height={200} className="block dark:hidden w-full h-auto max-h-10" alt="Triangle" />
            <Image src="/logo-dark.svg" width={1000} height={200} className="hidden dark:block w-full h-auto max-h-10" alt="Triangle" />
        </div>
    )
}

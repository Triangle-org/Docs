export function Logo() {
    return (
        <div className="h-10 w-full">
            <img src='/logo-light.svg' className="block dark:hidden w-full h-auto max-h-10" alt="Triangle Web"></img>
            <img src='/logo-dark.svg' className="hidden dark:block w-full h-auto max-h-10" alt="Triangle Web"></img>
        </div>
    )
}
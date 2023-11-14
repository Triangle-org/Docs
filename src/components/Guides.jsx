import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'

const guides = [
  {
    href: '/authentication',
    title: 'Authentication',
    description: 'Learn how to authenticate your API requests.',
  },
  {
    href: '/pagination',
    title: 'Pagination',
    description: 'Understand how to work with paginated responses.',
  },
  {
    href: '/errors',
    title: 'Errors',
    description: 'Read about the different types of errors returned by the API.',
  },
  {
    href: '/webhooks',
    title: 'Webhooks',
    description: 'Learn how to programmatically configure webhooks for your app.',
  },
]

export function Guides() {
  return (
    <div className="my-16 xl:max-w-none">
      <Heading level={2} id="guides">
        Туториалы
      </Heading>
      <div className="not-prose mt-4 grid grid-cols-1 gap-8 border-t border-zinc-900/5 pt-10 dark:border-white/5 sm:grid-cols-2 xl:grid-cols-4">
        {guides.map((guide) => (
          <div key={guide.href}>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              {guide.title}
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              {guide.description}
            </p>
            <p className="mt-4">
              <Button href={guide.href} variant="text" arrow="right">
                Подробнее
              </Button>
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

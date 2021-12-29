import { useRouter } from 'next/router'
import { ArrowLeftIcon } from '@primer/octicons-react'

export const AllProductsLink = () => {
  const router = useRouter()
  return (
    <li>
      <a href={`/${router.locale}`} className="f6 pl-4 pr-5 ml-n1 pb-1 color-fg-default">
        <ArrowLeftIcon size="small" className="mr-1" />
        All products
      </a>
    </li>
  )
}

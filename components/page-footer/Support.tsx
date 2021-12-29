import { PeopleIcon, CommentDiscussionIcon } from '@primer/octicons-react'

import { useTranslation } from 'components/hooks/useTranslation'
import { useVersion } from 'components/hooks/useVersion'
import { useMainContext } from 'components/context/MainContext'

export const Support = () => {
  const { isEnterprise } = useVersion()
  const { t } = useTranslation('support')
  const { communityRedirect } = useMainContext()

  return (
    <div>
      <h2 className="mb-3 f4">{t`still_need_help`}</h2>
      <div className="mb-2">
        <a
          id="ask-community"
          href={communityRedirect.href || 'https://github.community/'}
          className="Link—secondary text-bold"
        >
          <PeopleIcon size="small" className="octicon mr-1" />
          {Object.keys(communityRedirect).length === 0 ? t`ask_community` : communityRedirect.name}
        </a>
      </div>
      <div>
        <a
          id="contact-us"
          href={
            isEnterprise
              ? 'https://enterprise.github.com/support'
              : 'https://support.github.com/contact'
          }
          className="Link—secondary text-bold"
        >
          <CommentDiscussionIcon size="small" className="octicon mr-1" />
          {t`contact_support`}
        </a>
      </div>
    </div>
  )
}

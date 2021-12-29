import { useRef, useEffect } from 'react'

import { useTranslation } from 'components/hooks/useTranslation'
import { useOnScreen } from 'components/hooks/useOnScreen'
import { PatchNotes } from './PatchNotes'
import { ReleaseNotePatch } from './types'

type Props = { patch: ReleaseNotePatch; didEnterView: () => void }
export function GHAEReleaseNotePatch({ patch, didEnterView }: Props) {
  const { t } = useTranslation('release_notes')
  const containerRef = useRef<HTMLDivElement>(null)
  const onScreen = useOnScreen(containerRef, { rootMargin: '-40% 0px -50%' })
  useEffect(() => {
    if (onScreen) {
      didEnterView()
    }
  }, [onScreen])

  const bannerText = t('banner_text')

  return (
    <div
      ref={containerRef}
      className="mb-10 color-bg-subtle pb-6 border-bottom border-top"
      id={patch.date}
    >
      <header
        style={{ zIndex: 1 }}
        className="container-xl color-bg-subtle border-bottom px-3 pt-4 pb-2"
      >
        <div className="d-flex flex-items-center">
          <h2 className="border-bottom-0 m-0 p-0">{patch.title}</h2>

          {patch.release_candidate && (
            <span
              className="IssueLabel color-bg-attention-emphasis color-fg-on-emphasis ml-3"
              style={{ whiteSpace: 'pre' }}
            >
              Release Candidate
            </span>
          )}

          <button className="js-print btn-link ml-3 text-small text-bold">Print</button>
        </div>
        <p className="color-fg-muted mt-1">
          {bannerText} {patch.friendlyDate}.
        </p>
      </header>

      <div className="container-xl px-3">
        <div className="mt-3" dangerouslySetInnerHTML={{ __html: patch.intro }} />

        <PatchNotes patch={patch} />
      </div>
    </div>
  )
}

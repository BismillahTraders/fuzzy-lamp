import { SyntheticEvent, useState } from 'react'
import cx from 'classnames'
import { ChevronDownIcon } from '@primer/octicons-react'
import { GHAEReleaseNotePatch } from './GHAEReleaseNotePatch'
import { GHAEReleaseNotesContextT } from './types'
import { MarkdownContent } from 'components/ui/MarkdownContent'

import styles from './PatchNotes.module.scss'

type GitHubAEProps = {
  context: GHAEReleaseNotesContextT
}
export function GHAEReleaseNotes({ context }: GitHubAEProps) {
  const { releaseNotes, releases, currentVersion } = context
  const [focusedPatch, setFocusedPatch] = useState('')

  return (
    <div className="d-flex">
      <article className="min-width-0 flex-1">
        <div className="d-flex flex-items-center flex-justify-between color-bg-default px-5 py-2">
          <div></div>
          <h1 className="f4 py-3 m-0">{currentVersion.planTitle} release notes</h1>
          <div></div>
        </div>

        <MarkdownContent data-search="article-content">
          {releaseNotes.map((patch) => {
            return (
              <GHAEReleaseNotePatch
                key={patch.version}
                patch={patch}
                didEnterView={() => setFocusedPatch(patch.version)}
              />
            )
          })}
        </MarkdownContent>
      </article>

      <aside
        className={cx(
          'position-sticky d-none d-md-block border-left no-print color-bg-default flex-shrink-0',
          styles.aside
        )}
      >
        <nav className="height-full overflow-auto">
          <MarkdownContent data-search="article-content">
            <ul className="list-style-none pl-0 text-bold">
              {releases.map((release) => {
                return (
                  <CollapsibleReleaseSection
                    key={release.version}
                    release={release}
                    focusedPatch={focusedPatch}
                  />
                )
              })}
            </ul>
          </MarkdownContent>
        </nav>
      </aside>
    </div>
  )
}

const CollapsibleReleaseSection = ({
  release,
  focusedPatch,
}: {
  release: GHAEReleaseNotesContextT['releases'][0]
  focusedPatch: string
}) => {
  const defaultIsOpen = true
  const [isOpen, setIsOpen] = useState(defaultIsOpen)

  const onToggle = (e: SyntheticEvent) => {
    const newIsOpen = (e.target as HTMLDetailsElement).open
    setIsOpen(newIsOpen)
  }

  return (
    <li key={release.version} className="border-bottom">
      <details
        className="my-0 details-reset release-notes-version-picker"
        aria-current="page"
        open={defaultIsOpen}
        onToggle={onToggle}
      >
        <summary className="px-3 py-4 my-0 d-flex flex-items-center flex-justify-between outline-none">
          {release.version}
          <div className="d-flex">
            <span className="color-fg-muted text-small text-normal mr-1">
              {release.patches.length} {release.patches.length === 1 ? 'release' : 'releases'}
            </span>
            <ChevronDownIcon className={isOpen ? 'rotate-180' : ''} />
          </div>
        </summary>
        <ul className="color-bg-subtle border-top list-style-none py-4 px-0 my-0">
          {release.patches.map((patch) => {
            const isActive = patch.version === focusedPatch
            return (
              <li
                key={patch.version}
                className={cx('px-3 my-0 py-1', isActive && 'color-bg-accent')}
              >
                <a
                  href={`#${patch.date}`}
                  className="d-flex flex-items-center flex-justify-between"
                >
                  {patch.friendlyDate}
                </a>
              </li>
            )
          })}
        </ul>
      </details>
    </li>
  )
}

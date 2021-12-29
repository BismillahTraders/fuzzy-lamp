import { ArrowRightIcon, ArrowUpIcon, FileIcon, ListUnorderedIcon } from '@primer/octicons-react'
import { useMainContext } from 'components/context/MainContext'
import { useProductLandingContext } from 'components/context/ProductLandingContext'
import { useTranslation } from 'components/hooks/useTranslation'
import { Link } from 'components/Link'
import { useRouter } from 'next/router'

export function ProductReleases() {
  const { t } = useTranslation('product_landing')
  const router = useRouter()
  const { enterpriseServerReleases, allVersions } = useMainContext()
  const { releases } = useProductLandingContext()
  const currentPath = router.asPath.split('?')[0]
  return (
    <div>
      <div className="d-lg-flex gutter-lg flex-items-stretch">
        {releases.map((release) => {
          const releaseNumber = release.version
          if (!enterpriseServerReleases.supported.includes(releaseNumber)) {
            return null
          }
          const releaseVersion = `enterprise-server@${releaseNumber}`
          const latestPatch = release.patches[0]
          const firstPreviousVersion = `enterprise-server@${release.firstPreviousRelease}`
          const secondPreviousVersion = `enterprise-server@${release.secondPreviousRelease}`
          return (
            <div key={releaseNumber} className="col-lg-4 col-12 mb-4">
              <div className="Box color-shadow-medium height-full d-block hover-shadow-large no-underline color-fg-default p-5">
                <h2>{allVersions[releaseVersion].versionTitle}</h2>
                <p className="mt-2 mb-4 color-fg-muted">
                  <ListUnorderedIcon />{' '}
                  <Link
                    href={`/${router.locale}/${releaseVersion}/admin/release-notes#${latestPatch.version}`}
                  >
                    {t('release_notes_for')} {latestPatch.version}
                  </Link>{' '}
                  ({latestPatch.date})
                </p>
                <p className="mt-2 mb-4 color-fg-muted">
                  <ArrowUpIcon /> {t('upgrade_from')}{' '}
                  <Link
                    href={`/${router.locale}/${firstPreviousVersion}/admin/enterprise-management/upgrading-github-enterprise-server`}
                  >
                    {release.firstPreviousRelease}
                  </Link>{' '}
                  or{' '}
                  <Link
                    href={`/${router.locale}/${secondPreviousVersion}/admin/enterprise-management/upgrading-github-enterprise-server`}
                  >
                    {release.secondPreviousRelease}
                  </Link>
                </p>
                <p className="mt-2 mb-4 color-fg-muted">
                  <FileIcon />{' '}
                  <Link href={`/${router.locale}/${releaseVersion}`}>{t('browse_all_docs')}</Link>
                </p>
              </div>
            </div>
          )
        })}
      </div>

      <Link href={`${currentPath}/release-notes`} className="btn btn-outline float-right">
        {t('explore_release_notes')} <ArrowRightIcon />
      </Link>
    </div>
  )
}

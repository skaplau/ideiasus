import { buildConfig } from 'payload/config'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { webpackBundler } from '@payloadcms/bundler-webpack'
import { slateEditor } from '@payloadcms/richtext-slate'

export default buildConfig({
  admin: {
    user: 'users',
    bundler: webpackBundler(),
  },
  editor: slateEditor({}),
  collections: [
    {
      slug: 'users',
      auth: true,
      fields: []
    }
  ],
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL,
    },
  }),
})

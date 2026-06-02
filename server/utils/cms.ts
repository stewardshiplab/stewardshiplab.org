import { comarkCMS } from '@comark/cms'
import fs from '@comark/cms/source/fs'
import sqlite from '@comark/cms/database/sqlite-node'
import queryableSqlite from '@comark/cms/database/sqlite-queryable'
import highlight from 'comark/plugins/highlight'
import githubLight from '@shikijs/themes/github-light'

export const database = queryableSqlite({
  base: sqlite()
})

export const cms = comarkCMS({
  database,
  source: fs({
    base: './content',
  }),
  transform: {
    markdown: {
      plugins: [
        highlight({ themes: { light: githubLight } })
      ]
    }
  }
})

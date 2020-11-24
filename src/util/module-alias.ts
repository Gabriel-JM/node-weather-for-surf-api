import path from 'path'
import moduleAlias from 'module-alias'

const files = path.resolve()

moduleAlias.addAliases({
  '@src': path.join(files, 'src'),
  '@test': path.join(files, 'test')
})


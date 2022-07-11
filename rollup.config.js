import babel from '@rollup/plugin-babel'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import rename from 'rollup-plugin-rename'
import pkg from './package.json'

// Array of extensions to be handled by babel
const EXTENSIONS = ['.ts', '.tsx']

export default {
  input: './src/index.ts',
  output: {
    dir: 'build',
    format: 'es',
    preserveModules: true,
    exports: 'named',
    sourcemap: true
  },
  plugins: [
    nodeResolve({
      extensions: EXTENSIONS,
      moduleDirectories: ['src', 'node_modules']
    }), // Resolves node modules
    babel({
      extensions: EXTENSIONS, // Compile our TypeScript files
      babelHelpers: 'bundled', // EDIT(2021-11-18): "inline" is not recommended. Please see the details in https://github.com/kraftdorian/react-ts-rollup-starter-lib/issues/1
      include: EXTENSIONS.map((ext) => `src/**/*${ext}`),
      plugins: [
        ['@babel/plugin-transform-runtime', { helpers: false }],
        ['@babel/plugin-transform-react-jsx', { runtime: 'automatic' }]
      ],
      presets: ['@babel/env', '@babel/preset-react'],
      exclude: [
        '**/__tests__',
        '**/*.test.ts',
        '**/*.test.tsx',
        '**/*.stories.tsx',
        '**/*.stories.ts',
        '**/node_modules/**'
      ]
    }),
    rename({
      include: EXTENSIONS.map((ext) => `**/*${ext}`),
      map: (name) => name.replace('src/', '')
    })
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
    'react/jsx-runtime',
    'react/jsx-dev-runtime'
  ]
}

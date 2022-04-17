import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import pkg from './package.json'

// Array of extensions to be handled by babel
const EXTENSIONS = ['.ts', '.tsx']

export default {
  input: './index.ts',
  output: {
    dir: 'dist',
    sourcemap: true,
    format: 'cjs',
    preserveModules: true,
    exports: 'auto'
  },
  plugins: [
    // typescript(),
    nodeResolve({
      extensions: EXTENSIONS,
      moduleDirectories: ['src', 'node_modules']
    }), // Resolves node modules
    peerDepsExternal(), // https://rollupjs.org/guide/en/#peer-dependencies
    babel({
      extensions: EXTENSIONS, // Compile our TypeScript files
      babelHelpers: 'runtime', // EDIT(2021-11-18): "inline" is not recommended. Please see the details in https://github.com/kraftdorian/react-ts-rollup-starter-lib/issues/1
      include: EXTENSIONS.map((ext) => `src/**/*${ext}`),
      plugins: [
        '@babel/plugin-transform-runtime',
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
    commonjs()
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {})
  ]
}

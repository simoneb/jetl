import typescript from '@rollup/plugin-typescript'

export default {
  input: 'src/index.ts',
  output: {
    dir: 'dist/esm',
  },
  plugins: [
    typescript({
      tsconfig: 'tsconfig.esm.json',
    }),
  ],
}

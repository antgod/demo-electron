const esbuild = require('esbuild');
//  esbuild from 'esbuild';
// import babel from 'esbuild-plugin-babel';

esbuild
  .build({
      entryPoints: ['src/app.jsx'],
      bundle: true,
      outfile: 'dist/bundle.js',
      watch: {
        onRebuild(error, result) {
          if (error) console.error('watch build failed:', error)
          else console.log('watch build succeeded:', result)
        },
      },
      plugins: [],
  })
  .catch(() => process.exit(1));
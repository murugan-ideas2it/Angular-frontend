module.exports = {
  port: 3100,
  uiPort: 3101,  
  dist: 'build/',
  distcss: 'build/src/css/',
  distappjs: 'build/app/',
  distjs: 'build/js/',
  disthtml: 'build/app/',
  distindex: 'build/',
  distassets: 'build/assets/img/', 
  distfonts: 'build/src/fonts/',
  base: 'client',  
  scss: 'client/src/scss/importer.scss',
  scssall: 'client/src/scss/**/**/*',
  js: 'client/src/js/**/**/**/*.js',
  appjs: 'client/src/app/**/**/**/*.js',    
  indexpath: 'client/*.html',
  assets: 'client/assets/img/**',
  html: 'client/src/app/**/**/**/*.html',
  images: 'client/assets/images/**/*',
  fonts: 'client/src/fonts/**/*',
  banner: ['/**',
    ' * <%= pkg.name %> - <%= pkg.description %>',
    ' * @version v<%= pkg.version %>',
    ' * @link <%= pkg.homepage %>',
    ' * @license <%= pkg.license %>',
    ' */',
    ''
  ].join('\n')
};
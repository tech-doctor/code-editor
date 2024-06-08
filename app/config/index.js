const config = {
    links: {
      github: 'https://github.com/SurenAt93/monaco-react',
    },
  
    notifications: {
      props: {
        anchorOrigin: { vertical: 'top', horizontal: 'right' },
        autoHideDuration: 2500,
      },
      defaultState: {
        isActive: false,
        message: '',
        variant: 'info',
        opt: {},
      },
    },
  
    messages: {
      errorBoundary: {
        somethingWentWrong: 'Oooops... Sorry, I guess, something went wrong. You can:',
        resetApp: 'Press here to reset the application',
        openIssue: 'Press here to open issue about it on GitHub',
      },
      invalidOptions: 'Seems like options file is not a valid json, please double check it.'
    },
  
    // urls: {
    //   octocatIcon: '/icons/octocat.png',
    //   themeModeIcon: '/icons/theme-mode.png',
    //   IEditorOptions: 'https://microsoft.github.io/monaco-editor/api/interfaces/monaco.editor.IEditorOptions.html#acceptSuggestionOnCommitCharacter',
    // },
  
    defaultThemes: ['vs-dark', 'light'],
  
  //   supportedLanguages: [
  //   {id:1,name:'apex'},
  //   {id:2,name:'azcli'},
  //   {id:3,name:'bat'},
  //   {id:4,name:'c'},
  //   {id:5,name:'clojure'},
  //   {id:6,name:'coffeescript'},
  //   {id:7,name:'cpp'},
  //   {id:8,name:'csharp'},
  //   {id:9,name:'csp'},
  //   {id:10,name:'css'},
  //   {id:11,name:'dockerfile'},
  //   {id:12,name:'fsharp'},
  //   {id:13,name:'go'},
  //   {id:14,name:'graphql'},
  //   {id:15,name:'handlebars'},
  //   {id:16,name:'html'},
  //   {id:17,name:'ini'},
  //   {id:18,name:'java'},
  //   {id:19,name:'javascript'},
  //   {id:20,name:'json'},
  //   {id:21,name:'kotlin'},
  //   {id:22,name:'less'},
  //   {id:23,name:'lua'},
  //   {id:24,name:'markdown'},
  //   {id:25,name:'msdax'},
  //   {id:26,name:'mysql'},
  //   {id:27,name:'objective-c'},
  //   {id:28,name:'pascal'},
  //   {id:29,name:'perl'},
  //   {id:30,name:'pgsql'},
  //   {id:31,name:'php'},
  //   {id:32,name:'plaintext'},
  //   {id:33,name:'postiats'},
  //   {id:34,name:'powerquery'},
  //   {id:35,name:'powershell'},
  //   {id:36,name:'pug'},
  //   {id:37,name:'python'},
  //   {id:38,name:'r'},
  //   {id:39,name:'razor'}
  //   ,{id:40,name:'redis'},
  //   {id:41,name:'redshift'},
  //   {id:42,name:'ruby'},
  //   {id:43,name:'rust'},
  //   {id:44,name:'sb'},
  //   {id:45,name:'scheme'},
  //   {id:46,name:'scss'},
  //   {id:47,name:'shell'},
  //   {id:48,name:'sol'},
  //   {id:49,name:'sql'},
  //   {id:50,name:'st'},
  //   {id:51,name:'swift'},
  //   {id:52,name:'tcl'},
  //   {id:53,name:'typescript'},
  //   {id:54,name:'vb'},
  //   {id:55,name:'xml'},
  //   {id:56,name:'yaml'}
  //  ],

   supportedLanguages : [
    {id: 1, name: 'apex', path: 'index.apex'},
    {id: 2, name: 'azcli', path: 'index.azcli'},
    {id: 3, name: 'bat', path: 'index.bat'},
    {id: 4, name: 'c', path: 'index.c'},
    {id: 5, name: 'clojure', path: 'index.clj'},
    {id: 6, name: 'coffeescript', path: 'index.coffee'},
    {id: 7, name: 'cpp', path: 'index.cpp'},
    {id: 8, name: 'csharp', path: 'index.cs'},
    {id: 9, name: 'csp', path: 'index.csp'},
    {id: 10, name: 'css', path: 'index.css'},
    {id: 11, name: 'dockerfile', path: 'index.dockerfile'},
    {id: 12, name: 'fsharp', path: 'index.fs'},
    {id: 13, name: 'go', path: 'index.go'},
    {id: 14, name: 'graphql', path: 'index.graphql'},
    {id: 15, name: 'handlebars', path: 'index.hbs'},
    {id: 16, name: 'html', path: 'index.html'},
    {id: 17, name: 'ini', path: 'index.ini'},
    {id: 18, name: 'java', path: 'index.java'},
    {id: 19, name: 'javascript', path: 'index.js'},
    {id: 20, name: 'json', path: 'index.json'},
    {id: 21, name: 'kotlin', path: 'index.kt'},
    {id: 22, name: 'less', path: 'index.less'},
    {id: 23, name: 'lua', path: 'index.lua'},
    {id: 24, name: 'markdown', path: 'index.md'},
    {id: 25, name: 'msdax', path: 'index.dax'},
    {id: 26, name: 'mysql', path: 'index.sql'},
    {id: 27, name: 'objective-c', path: 'index.m'},
    {id: 28, name: 'pascal', path: 'index.pas'},
    {id: 29, name: 'perl', path: 'index.pl'},
    {id: 30, name: 'pgsql', path: 'index.sql'},
    {id: 31, name: 'php', path: 'index.php'},
    {id: 32, name: 'plaintext', path: 'index.txt'},
    {id: 33, name: 'postiats', path: 'index.dats'},
    {id: 34, name: 'powerquery', path: 'index.pq'},
    {id: 35, name: 'powershell', path: 'index.ps1'},
    {id: 36, name: 'pug', path: 'index.pug'},
    {id: 37, name: 'python', path: 'index.py'},
    {id: 38, name: 'r', path: 'index.r'},
    {id: 39, name: 'razor', path: 'index.cshtml'},
    {id: 40, name: 'redis', path: 'index.redis'},
    {id: 41, name: 'redshift', path: 'index.sql'},
    {id: 42, name: 'ruby', path: 'index.rb'},
    {id: 43, name: 'rust', path: 'index.rs'},
    {id: 44, name: 'sb', path: 'index.sb'},
    {id: 45, name: 'scheme', path: 'index.scm'},
    {id: 46, name: 'scss', path: 'index.scss'},
    {id: 47, name: 'shell', path: 'index.sh'},
    {id: 48, name: 'sol', path: 'index.sol'},
    {id: 49, name: 'sql', path: 'index.sql'},
    {id: 50, name: 'st', path: 'index.st'},
    {id: 51, name: 'swift', path: 'index.swift'},
    {id: 52, name: 'tcl', path: 'index.tcl'},
    {id: 53, name: 'typescript', path: 'index.ts'},
    {id: 54, name: 'vb', path: 'index.vb'},
    {id: 55, name: 'xml', path: 'index.xml'},
    {id: 56, name: 'yaml', path: 'index.yml'}
]

  };
  
  export default config;
  
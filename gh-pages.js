import { publish } from 'gh-pages';

publish(
 'build', // path to public directory
 {
  branch: 'gh-pages',
  repo: 'https://github.com/bhoov/bhoov-github-io-new', // Update to point to your repository
  user: {
   name: 'Benjamin Hoover', // update to use your name
   email: '24350185+bhoov@users.noreply.github.com' // Update to use your email
  },
  dotfiles: true
  },
  () => {
   console.log('Deploy Complete!');
  }
);
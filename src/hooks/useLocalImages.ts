import { useMemo } from 'react';
import ImageMe from 'assets/images/me.jpg';
import ImageBanner from 'assets/images/hero.png';
import ImageSofttek from 'assets/images/softtek.svg';
import ImageSuperProf from 'assets/images/superprof.svg';
import IconBracket from 'assets/images/common/brackets.svg';
import IconBracketWhite from 'assets/images/common/brackets-white.svg';
import ImageWebSlash from 'assets/images/web-slash.svg';
import ImageWebDesign from 'assets/images/design.svg';
import ImageMobile from 'assets/images/mobile.svg';
import ImageBook from 'assets/images/book.svg';
import IconExpress from 'assets/images/dev/express.svg';
import IconNest from 'assets/images/dev/nestjs.svg';
import IconMySQL from 'assets/images/dev/mysql.svg';
import IconPostgreSQL from 'assets/images/dev/postgresql.svg';
import IconGit from 'assets/images/dev/git.svg';
import IconGitHub from 'assets/images/dev/github.svg';
import IconNPM from 'assets/images/dev/npm.svg';
import IconTS from 'assets/images/dev/typescript.svg';
import IconNext from 'assets/images/dev/next.svg';
import IconJest from 'assets/images/dev/jest.svg';
import IconHTML from 'assets/images/dev/html.svg';
import IconCSS from 'assets/images/dev/css.svg';
import IconJS from 'assets/images/dev/javascript.svg';
import IconReact from 'assets/images/dev/react.svg';
import IconRedux from 'assets/images/dev/redux.svg';
import IconNode from 'assets/images/dev/node.svg';
import IconSASS from 'assets/images/dev/sass.svg';
import IconStorybook from 'assets/images/dev/storybook.svg';
import IconXd from 'assets/images/dev/xd.svg';
import IconFigma from 'assets/images/dev/figma.svg';
import IconMarkdown from 'assets/images/dev/markdown.svg';
import IconTailwind from 'assets/images/dev/tailwind.svg';
import IconAndroid from 'assets/images/dev/android.svg';
import IconApple from 'assets/images/dev/apple.svg';
import IconGradle from 'assets/images/dev/gradle.svg';
import IconSwift from 'assets/images/dev/swift.svg';
import IconFirebase from 'assets/images/dev/firebase.svg';
import IconVSCode from 'assets/images/dev/vscode.svg';
import IconHeroku from 'assets/images/dev/heroku.svg';
import IconAWS from 'assets/images/dev/aws.svg';
import IconDigitalOcean from 'assets/images/dev/digitalocean.svg';
import ImageContact from 'assets/images/contact.png';

export const useLocalImage = () => {
  return useMemo(
    () => ({
      banner: ImageBanner,
      superprof: ImageSuperProf,
      bracket: IconBracket,
      bracketWhite: IconBracketWhite,
      me: ImageMe,
      softtek: ImageSofttek,
      webSlash: ImageWebSlash,
      webDesign: ImageWebDesign,
      mobile: ImageMobile,
      book: ImageBook,
      express: IconExpress,
      nest: IconNest,
      mysql: IconMySQL,
      postgresql: IconPostgreSQL,
      git: IconGit,
      github: IconGitHub,
      npm: IconNPM,
      ts: IconTS,
      next: IconNext,
      jest: IconJest,
      html: IconHTML,
      css: IconCSS,
      js: IconJS,
      react: IconReact,
      redux: IconRedux,
      node: IconNode,
      sass: IconSASS,
      storybook: IconStorybook,
      xd: IconXd,
      figma: IconFigma,
      markdown: IconMarkdown,
      tailwind: IconTailwind,
      android: IconAndroid,
      apple: IconApple,
      gradle: IconGradle,
      swift: IconSwift,
      firebase: IconFirebase,
      vscode: IconVSCode,
      heroku: IconHeroku,
      aws: IconAWS,
      digitalocean: IconDigitalOcean,
      contact: ImageContact,
    }),
    []
  );
};

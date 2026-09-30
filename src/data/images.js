// Images are served from the /public/images folder.
// PUBLIC_URL keeps the paths working if the site is hosted in a sub-folder.
const p = (path) => `${process.env.PUBLIC_URL}/assets/${path}`;

export const IMG = {
  hero: p("hero.jpg"),
  about: p("cake10.jpg"),

  // category tiles on the home page (reuse any cake / chocolate photo)
  cakeTile: p("new.jpg"),
  chocoTile: p("new2.jpg"),

  cake1: p("cake1.jpg"),
  cake2: p("cake2.jpg"),
  cake3: p("cake3.jpg"),
  cake4: p("cake4.jpg"),
  cake5: p("cake5.jpg"),
  cake6: p("cake6.jpg"),
  cake7: p("cake7.jpg"),
  cake8: p("cake8.jpg"),

  choco1: p("choco1.jpg"),
  choco2: p("choco2.jpg"),
  choco3: p("choco3.jpg"),
  choco4: p("choco4.jpg"),
  choco5: p("choco5.jpg"),
  choco6: p("choco6.jpg"),
  choco7: p("choco7.jpg"),
  choco8: p("choco8.jpg"),
};
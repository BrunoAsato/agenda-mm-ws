import { getFiles, getFolders } from './readFolder';

export default root => {
  getFolders(`${root}`)
    .map(folder => {
      const file = getFiles(folder, '.js', 'model');
      return { file, folder };
    })
    .forEach(({ file, folder }) => {
      // eslint-disable-next-line global-require
      require(`${folder}/${file}`);
    });
};

export const IMAGE_FOLDER = {
  POST: 'post',
  USER: 'user',
};

export default (filename, folder = IMAGE_FOLDER.USER) => {
  const baseUrl = import.meta.env.VITE_IMAGE_BASE_URL;

  return `${baseUrl}${folder}/${filename}`;
};

// Make sure vite can find local images, use relative path, instead of '@'
export default function getImageURL(imageName) {
  return new URL(`../assets/image/tabbar/${imageName}`, import.meta.url).href;
}

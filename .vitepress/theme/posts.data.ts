import { createContentLoader } from 'vitepress'

export default createContentLoader('posts/!(index).md', /* options */)
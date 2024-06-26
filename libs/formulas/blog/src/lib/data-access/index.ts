import { useBlogState, useBlogCuState } from './store/blog.store';
import { blogController as blogControllerLocal } from './conrollers/blog-crud.conroller';
export * from './conrollers/blocknote-document-crud.conroller';
export * from './store/blog-document.store';

const blogController = blogControllerLocal();

export { blogController, useBlogState, useBlogCuState };

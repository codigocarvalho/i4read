import {postsStore} from '../posts';

describe('Testing PostsStore', () => {
  it('load posts', async () => {
    const store = postsStore;
    await store.loadPosts();
    expect(store.posts.length).toBe(20);
  });

  it('load posts filtered by new category', async () => {
    const store = postsStore;
    await store.loadFiltered('new');
    expect(store.posts.length).toBe(20);
  });

  it('load posts filtered by top category', async () => {
    const store = postsStore;
    await store.loadFiltered('top');
    expect(store.posts.length).toBe(20);
  });

  it('load posts filtered by rising category', async () => {
    const store = postsStore;
    await store.loadFiltered('rising');
    expect(store.posts.length).toBe(20);
  });

  it('load posts filtered by hot category', async () => {
    const store = postsStore;
    await store.loadFiltered('hot');
    expect(store.posts.length).toBe(20);
  });
});

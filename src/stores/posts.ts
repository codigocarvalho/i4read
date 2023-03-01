import {action, makeAutoObservable, observable, runInAction} from 'mobx';
import {createContext, useContext} from 'react';
import api from '../services/api';

class PostsStore {
  posts = [];
  filter = 'new';
  after = '';
  limit = 20;
  isLoading = true;

  constructor() {
    makeAutoObservable(this, {
      posts: observable,
      isLoading: observable,
      loadPosts: action,
    });
  }

  loadPosts = async (filter?: string, limit?: number) => {
    this.filter = filter?.toLowerCase() || this.filter;
    this.limit = limit || this.limit;
    this.isLoading = true;

    try {
      const response = await api.get(
        `pics/${this.filter}?limit=${this.limit}&after=${this.after}`,
      );

      this.after = response.data.data.after;

      runInAction(() => {
        this.posts = [...this.posts, ...response.data.data.children];
        this.isLoading = false;
      });
    } catch (error) {
      console.log(error);
    }
  };

  loadFiltered = async (filter?: string) => {
    this.after = '';
    this.posts = [];
    await this.loadPosts(filter);
  };
}

export const postsStore = new PostsStore();

export const PostsContext = createContext(postsStore);
export const usePosts = () => useContext(PostsContext);

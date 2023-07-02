import { posts } from './posts.js';

posts.forEach((post) => {
    console.log(post);
})
console.clear();

const filteredPosts = posts.filter(post => {
    return post.userId === 1;
})

const mappedPosts = filteredPosts.map(post => {
    return post.id * 10;
})
console.log(mappedPosts)

const reducedPostsValue = mappedPosts.reduce((sum, post) => {
    return sum + post
})
console.log(reducedPostsValue);
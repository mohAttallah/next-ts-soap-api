type Post = {
    id: string,
    title: string,
    desc: string,
    date: Date
};

let posts: Post[] = [];

export const getPosts = () => posts;
export const addPosts = (post: Post) => {
    posts.push(post)
};

export const deletePosts = (id: string) => {
    posts = posts.filter((post) => post.id !== id)
};

export const updatePosts = (id: string, title: string, desc: string) => {
    const post = posts.find((post) => post.id === id);
    if (post) {
        post.title = title;
        post.desc = desc;
        return post
    } else {
        throw new Error("NO POST FOUND")
    }
};


export const getById = (id: string) => {
    return posts.find((post) => post.id === id)

}
# How to write and add a new blog

## Write a blog

For basic syntax, refer to the template blog (whose code is the `blog-raw-template` object in `src/blogs/AllPosts.js`).
To write a new blog, you can go to `src/blogs/Template.js` and modify the `content`. You can run `npm start` and preview your blog locally on the `Template` page.

## Add a blog

To add the new blog, move the object in `Template.js` to `AllPosts.js` and give it a unique id. For example, the new `AllPosts.js` should look like:

```javascript
export const database = {
  ...
  "new-blog-id": {
    title: "Title of new blog",
    author: "your name",
    date: new Date("YYYY/MM/DD"),
    content: (....),
  },
};
```

Currently you need to manually update your github page by running `npm run deploy` after writing your blog.

# How to customize your styling

You can customize your own style by modifying the CSS file `src/theme.css`. The basic styles are listed at the beginning as variables in `:root`, including colors and typography.

# To do list:
1. Add a feature of latex -> html conversion with correct syntax.
2. Add a database.
3. Add an online blog editor (using markdown).

export const API_ROOT = 'https://www.reddit.com/';

export const getSubredditPosts = async (subreddit, listing) => {
    const response = await fetch(`${API_ROOT}r/${subreddit}/${listing}.json?`)
//   const response = await fetch(`${API_ROOT}/${subreddit}.json`);
  const json = await response.json();
    // return json;
  return json.data.children.map((post) => post.data);
};

export const getSubreddits = async () => {
  const response = await fetch(`${API_ROOT}/subreddits.json`);
  const json = await response.json();
  return json.data.children.map((subreddit) => subreddit.data);
};
export const getPostData = async (id) =>{
  const response = await fetch (`https://api.reddit.com/api/info/?id=t3_${id}`);
  const json = await response.json();
  return json.data.children[0].data;
}
export const getPostComments = async (permalink) => {
  const response = await fetch(`${API_ROOT}${permalink}.json`);
  const json = await response.json();

  return json[1].data.children.map((subreddit) => subreddit.data);
};

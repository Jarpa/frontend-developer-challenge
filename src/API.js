// we'll fetch all repos by the user on github
export const fetchRepos = async name => {
  try {
    const response = await fetch(`https://api.github.com/users/${name}/repos`);
    const data = await response.json();

    return data;
  } catch (e) {
    throw new Error(e);
  }
};

function extractGitHubInfo(url: string): { username: string; reponame: string } | null {
    const regex = /^https:\/\/github\.com\/([^\/]+)\/([^\/]+)\/?$/;
    const match = url.match(regex);
  
    if (match) {
      const [, username, reponame] = match;
      return { username, reponame };
    }
  
    return null;
  }

export async function countRepoStars(repoUrl: string): Promise<{ stars: number }> {
    let {username, reponame} = extractGitHubInfo(repoUrl);
    const url = `https://api.github.com/repos/${username}/${reponame}`;
    try {
        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        return {
            stars: data["stargazers_count"],
        };
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
        throw error;
      }
    }
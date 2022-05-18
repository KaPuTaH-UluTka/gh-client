export async function getInfo(user: string) {
  const userInfo = await fetch(`https://api.github.com/users/${user}`).then((res) => {
    return res.json();
  });
  const reposInfo = await fetch(`https://api.github.com/users/${user}/repos`).then((res) => {
    return res.json();
  });
  return { userInfo, reposInfo };
}

export async function getInfo(user: string) {
  const userInfo = await fetch(`https://api.github.com/users/${user}`).then((res) => {
    if (res.ok) {
      return res.json();
    } else return false;
  });
  const reposInfo = await fetch(`https://api.github.com/users/${user}/repos`).then((res) => {
    if (res.ok) {
      return res.json();
    } else return false;
  });
  const arr = [];
  if (userInfo && reposInfo) {
    return { userInfo, reposInfo };
  } else return false;
}

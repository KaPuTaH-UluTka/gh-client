export async function getInfo(user: string) {
  const userInfo = await fetch(`https://api.github.com/users/${user}`, {
    headers: {
      Authorization: 'token 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',
    },
  }).then((res) => {
    return res.json();
  });
  const reposInfo = await fetch(`https://api.github.com/users/${user}/repos`, {
    headers: {
      Authorization: 'token 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',
    },
  }).then((res) => {
    return res.json();
  });
  return { userInfo, reposInfo };
}

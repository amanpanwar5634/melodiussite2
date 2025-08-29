import fetch from 'node-fetch';

export default async function handler(req, res) {
  const url = 'https://gharwale.vercel.app' + req.url.replace('/api/proxy-mtechpg', '');
  const response = await fetch(url);
  const body = await response.text();

  res.setHeader('Content-Type', 'text/html');
  res.send(body);
}

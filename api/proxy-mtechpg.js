export default async function handler(req, res) {
  try {
    const url = 'https://gharwale.vercel.app' + req.url.replace('/api/proxy-mtechpg', '');
    const response = await fetch(url);
    let body = await response.text();

    // Rewrite all relative links to absolute
    body = body.replace(/(src|href)=["'](\/[^"']*)["']/g, (match, attr, path) => {
      return `${attr}="https://gharwale.vercel.app${path}"`;
    });

    res.status(200).setHeader('Content-Type', 'text/html');
    res.send(body);
  } catch (err) {
    res.status(500).send('Error fetching Gharwale: ' + err.message);
  }
}

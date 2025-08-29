export default async function handler(req, res) {
  try {
    const targetBase = 'https://gharwale.vercel.app';
    const url = targetBase + req.url.replace('/api/proxy-mtechpg-html', '');

    // Fetch HTML content
    const response = await fetch(url, { redirect: 'follow' });
    let body = await response.text();

    // Rewrite asset URLs (CSS, JS, images, links) to point to Gharwale domain
    body = body.replace(/(src|href)=["'](\/[^"']*)["']/g, (match, attr, path) => {
      return `${attr}="${targetBase}${path}"`;
    });

    // Rewrite API calls or fetch URLs in scripts (basic)
    body = body.replace(/fetch\(["'](\/[^"']*)["']/g, (match, path) => {
      return `fetch("${targetBase}${path}"`;
    });

    body = body.replace(/axios\(["'](\/[^"']*)["']/g, (match, path) => {
      return `axios("${targetBase}${path}"`;
    });

    res.status(200).setHeader('Content-Type', 'text/html');
    res.send(body);

  } catch (error) {
    console.error(error);
    res.status(500).send('Serverless Function Error: ' + error.message);
  }
}

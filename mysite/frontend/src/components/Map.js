export default function Map(link) {
  const iframeSource = '<iframe src=' + link + ' width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
  console.log(iframeSource)
  return <div className="App" dangerouslySetInnerHTML={{__html: iframeSource}}></div>;
}
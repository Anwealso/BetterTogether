export default function Map() {
  const iframeSource = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14163.32930707494!2d152.97944090000001!3d-27.4433358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b9156d130da8fcb%3A0x3bd766e2dfb13937!2sAshgrove%20Golf%20Course%2C%20The%20Gap%20QLD%204061!5e0!3m2!1sen!2sau!4v1665986810247!5m2!1sen!2sau" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
  return <div className="App" dangerouslySetInnerHTML={{__html: iframeSource}}></div>;
}
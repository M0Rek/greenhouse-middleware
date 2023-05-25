# greenhouse-middleware
This is an Express middleware server connecting the <a href="https://github.com/ham222/greenhouse-frontend"> <b> greenhouse frontend<b> </a> with the <a href="https://github.com/xoxkoo/greenhouse-backend"> <b> greenhouse backend </b </a>. <br>
  It is hosted on <a href="https://healthy-wares-386912.ey.r.appspot.com"> Google Cloud </a> and it simply forwards requests to the "proper" API that the Cloud team created. <br>
  It was created for several reasons, namely
  <ul>
    <li>App hosted on github pages cannot make HTTP requests because it's hosted on HTTPS and making mixed content connections is insecure.</li>
    <li>Creating an Express app and hosting it on Google Cloud as a proof of concept and for <b>PBL</b> (Problem Based Learning)</li>
    <li>It was impossible to obtain an SSL certificate and domain in time</li>
  </ul>

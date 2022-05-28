// Parses the host from the HTTP header into the hostname and the domain.
// Since this header value can include a port number, we remove it before
// parsing the FQDN. Returns an object with a hostname (the part of the
// FQDN up to the first dot) and the domain (technically, all subdomains
// and the TLD). In case of a naked domain, the hostname will be empty.
export function parseHost(host) {
  const parts = host.split(':')[0].split('.');
  const retval = {};
  if (parts.length > 2) {
    retval.hostname = parts[0];
    retval.domain = parts.slice(1).join('.');
  } else {
    retval.hostname = ''; // naked domain
    retval.domain = parts.join('.');
  }
  return retval;
}

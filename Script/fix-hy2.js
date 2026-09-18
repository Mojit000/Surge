// clean_hy2.js
function operator(proxies) {
  return proxies.map(p => {
    // 强制将原始订阅里的 obfs-password 赋值给 Surge 识别的 salamander-password
    if (p['obfs-password']) {
      p['salamander-password'] = p['obfs-password'];[span_0](start_span)[span_0](end_span)
    }
    // 补全跳过证书验证，防止策略组 TLS 校验失败
    p['skip-cert-verify'] = true;
    return p;
  });
}

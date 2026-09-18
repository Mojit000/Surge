// fix-hy2.js
// 作用：过滤伪节点，并将所有 Hy2 节点的混淆密码统一修正为正确的 SwyxR9HQIfP58zeu

function operator(proxies) {
  return proxies
    .filter(p => !p.name.includes("套餐") && !p.name.includes("剩余"))
    .map(p => {
      if (p.type === 'hysteria2') {
        // 强制修正为你在 [Proxy] 测试通过的正确密码
        p['salamander-password'] = 'SwyxR9HQIfP58zeu';
        p['block-quic'] = true;
      }
      return p;
    });
}

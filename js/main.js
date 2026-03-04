async function postForm(endpoint, formEl, noticeEl){
  noticeEl.className = "notice";
  noticeEl.textContent = "Enviando...";
  const fd = new FormData(formEl);

  try{
    const res = await fetch(endpoint, { method: "POST", body: fd });
    const data = await res.json().catch(()=> ({}));

    if(!res.ok || !data.ok){
      const msg = data.error || ("Error " + res.status);
      noticeEl.className = "notice err";
      noticeEl.textContent = "❌ " + msg;
      return;
    }

    noticeEl.className = "notice ok";
    noticeEl.textContent = "✅ Enviado correctamente.";
    formEl.reset();
  }catch(e){
    noticeEl.className = "notice err";
    noticeEl.textContent = "❌ No se pudo conectar con el servidor.";
  }
}

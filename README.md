# Otaku Fit (proyecto hasta ahora)

Static web (HTML/CSS/JS) + Firebase (Auth + Firestore).

## Páginas
- index.html (landing)
- login.html (login/registro + código de invitación)
- dashboard.html (redirige a coach.html o client.html según role)
- coach.html (panel coach: generar invites, ver clientes)
- client.html (panel cliente: ver rutina asignada, registrar peso/entreno)
- seed.html (solo coach: crea routines/RUTINA_001 automáticamente)

## Firebase
1) Authentication: Email/Password activado.
2) Firestore: necesitas Rules que permitan:
   - coach escribir invites
   - clientes leer routines asignadas
   - premium escribir registros
3) users/{tuUid} debe existir con role="coach"

## Hosting
Puedes publicar en Cloudflare Pages / GitHub Pages / Firebase Hosting (no depende de Netlify).

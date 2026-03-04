# Otaku Fit (GRATIS & PÚBLICO) — Netlify + Firebase Firestore

Este ZIP está preparado para publicarlo **gratis**:
- Hosting: **Netlify** (sitio estático)
- Email del formulario de contacto: **Netlify Forms**
- Base de datos clientes: **Firebase Firestore**

---

## 1) Publicar la web gratis (Netlify)
1) Crea cuenta en Netlify.
2) Deploy manual: arrastra la carpeta del proyecto al panel de Netlify (drag & drop).
3) Obtendrás una URL pública tipo: `https://xxxxx.netlify.app`

### Activar emails del formulario
Netlify detecta el formulario `contact` en `contacto.html`.
Activa notificaciones por correo:
Project configuration → Notifications → Emails and webhooks → Form submission notifications.

---

## 2) Configurar Firestore (Firebase)
### A) Crear proyecto y habilitar Firestore
Firebase Console → Build → Firestore Database → Create database.

### B) Reglas (IMPORTANTE)
La web pública podrá **crear** clientes, pero nadie podrá leer/listar desde la web:

```js
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /clients/{docId} {
      allow create: if true;
      allow read, update, delete: if false;
    }
  }
}
```

### C) Pegar `firebaseConfig`
Firebase Console → Project settings → Your apps → Web app  
Copia el bloque `firebaseConfig` y pégalo en `clientes.html` al final (cambia los `CHANGE_ME`).

---

## 3) Probar
- `clientes.html` → enviar → crea documento en Firestore en colección `clients`.
- Firebase Console → Firestore → Data → `clients` (ahí verás tus clientes).
- `contacto.html` → enviar → se registra en Netlify Forms y puedes recibir email.

---

## Campos que se guardan (colección `clients`)
- full_name
- email
- phone (opcional)
- goal (opcional)
- plan (GENIN/CHUNIN/JONIN)
- created_at (timestamp)

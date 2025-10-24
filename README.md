# App de Solicitudes – React Native (Expo)

Aplicación móvil desarrollada con **React Native + Expo** Navegación entre pantallas (Login → Home → Módulos), y una UI modular con componentes reutilizables (headers, cards, botones, etc.).
Incluye tipografías Roboto, iconos Ionicons y navegación con Native Stack.

## Características
- Login básico y navegación segura a Home.
- Módulos: Solicitudes, Mercado/Selector, Detalle con radio buttons, etc.
- Componentes reutilizables (Header, Footer, ActionItemCard, AppText).
- Theming centralizado (`colors`, `spacing`, `typography`).
- **Expo** para desarrollo en dispositivos reales con **Expo Go**.

## Stack
- **React Native** (Expo)
- **React Navigation**
- **@expo/vector-icons**
- **@expo-google-fonts/roboto**
- **react-native-safe-area-context**

## Requisitos previos
- **Node.js** ≥ 18
- **npm** o **yarn**
- **Expo CLI**
- App **Expo Go**

## Instalación y ejecución

```bash
git clone https://github.com/franco-04/pruebaPrac
cd pruebaPrac
npm install
npx expo start
```

## Estructura de carpetas

```
src/
  components/
  modules/
  navigation/
  screens/
  theme/
  assets/
App.js
README.md
```

## Autor
**David Franco Juárez**
IGDS – UTEQ · GitHub: franco-04

## Arquitectura del Proyecto

La aplicación está organizada por capas modulares que separan la lógica, la presentación y la navegación.  


### Capas principales

- **`AppNavigator.js` (src/navigation/)**  
  Define la **navegación** principal mediante `React Navigation`. Controla las rutas `Login`, `Home`, `Requests`, y `RequestDetailScreen`.

- **`screens/`**  
  Contiene las **pantallas principales** registradas en el navegador. Cada pantalla es de una seccion y componentes.  

- **`modules/`**  
  Bloques funcionales que encapsulan UI y lógica.  


- **`components/`**  
  Elementos UI reutilizables y atómicos.  

- **`theme/`**  
  Contiene la configuración visual global (`colors`, `spacing`, `typography`).

- **`assets/`**  
  Archivos estáticos como imágenes y logos.

---

### Flujo general de navegación

```text
LoginScreen
  └── LoginForm (modules/auth)
        ↓
HomeScreen
  └── ActionItemCard (Accesos rápidos)
        ↓
RequestsScreen
  └── RequestCard + FilterTabs
        ↓
RequestDetailScreen
  └── DetailHeader + RequestDetail (modules/DetailRequests)
```

---

### Flujo de datos y estado
- Cada módulo usa `useState` para manejar su estado interno (filtros, radios, etc.).  
- Las pantallas principales gestionan la **navegación y props** que bajan hacia los módulos.  

---
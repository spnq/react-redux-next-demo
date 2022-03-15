# Monorepo Structure

### Current Structure

```
.
├── libs
│   ├── defaults
│   │	├── app
│   │	│	└── index.tsx
│   │	├── document
│   │	│	└── index.tsx
│   │	├──
│   │	...other default components
│   └── utils
├── visual-libs
│   ├── lib-1
│   ├── lib-2
│   └── index.ts
├── apps
│   ├── app-1
│   │ 	├── next.config.js /// extends root next.config.js
│   │ 	├── tsconfig.json /// extends root tsconfig.json
│   │ 	...next.js necessary structure
│   └── app-2
│   	└── same as app-1
├── next.config.js
├── tsconfig.json
└── ... other common configs
```

In order to use this structure `externalDir` flag must be used. For more information about `externalDir` please see this [document](./externalDir.md).
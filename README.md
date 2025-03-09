# Meu Projeto React Escalável

Bem-vindo ao meu projeto React! Esta é uma aplicação escalável construída com React, React Router DOM v6 e Zustand para gerenciamento de estado. O objetivo é fornecer uma estrutura modular e organizada para facilitar a adição de novas funcionalidades e a manutenção do código.

## Tecnologias Utilizadas
- **React**: Biblioteca principal para construção da interface.
- **React Router DOM v6**: Gerenciamento de rotas dinâmicas e modulares.
- **Zustand**: Gerenciamento de estado leve e flexível.
- **TypeScript**: Tipagem estática para maior segurança e produtividade.

## Estrutura do Projeto

src/
├── main.tsx              # Ponto de entrada com BrowserRouter
├── App.tsx              # Renderiza as rotas definidas
├── routes/              # Configuração modular de rotas
│   ├── index.ts         # Centraliza todas as rotas
│   ├── paths/           # Definições de rotas específicas
│   │   ├── home.ts      # Rota "/"
│   │   └── about.ts     # Rota "/about"
├── pages/               # Páginas organizadas em pastas
│   ├── Home/            # Página inicial
│   │   ├── index.tsx    # Componente da página
│   │   └── store.tsx    # Store específica com Zustand
│   ├── About/           # Página "Sobre"
│   │   ├── index.tsx    # Componente da página
│   │   └── store.tsx    # Store específica com Zustand
├── utils/               # Funções utilitárias
│   └── zustandUtils.ts  # Função setValue genérica para Zustand
└── components/          # (Futuro) Componentes reutilizáveis

### Rotas
As rotas são definidas de forma modular na pasta `routes/`. Cada arquivo em `routes/paths/` representa uma rota específica, e elas são centralizadas em `routes/index.ts`. Rotas atuais:
- **`/`**: Página inicial (`Home`).
- **`/about`**: Página "Sobre" (`About`).

Para adicionar uma nova rota:
1. Crie uma pasta em `pages/` (ex.: `Contact/`).
2. Adicione `index.tsx` (componente) e `store.tsx` (estado).
3. Crie um arquivo em `routes/paths/` (ex.: `contact.ts`) com a definição da rota.
4. Atualize `routes/index.ts` para incluir a nova rota.

### Gerenciamento de Estado
O Zustand é usado para gerenciar o estado de forma simples e escalável. Cada página tem sua própria store localizada em `pages/[NomeDaPagina]/store.tsx`. As stores utilizam uma função genérica `setValue`, definida em `utils/zustandUtils.ts`, que permite atualizar qualquer propriedade do estado (simples ou aninhada) sem setters específicos.

Exemplo de uso na página `Home`:
```tsx
// src/pages/Home/store.tsx
interface HomeState {
  counter: number;
  title: string;
  settings: { theme: string; fontSize: number };
  setValue: <V>(path: string | string[], value: V) => void;
}

export const useHomeStore = create<HomeState>((set) => ({
  counter: 0,
  title: 'Bem-vindo à Home',
  settings: { theme: 'light', fontSize: 16 },
  setValue: createSetValue(set),
}));

const { counter, setValue } = useHomeStore();
setValue('counter', counter + 1); // Atualiza contador
setValue('settings.theme', 'dark'); // Atualiza propriedade aninhada

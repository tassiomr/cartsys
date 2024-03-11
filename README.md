# CARTSYS CHALLENGER

## Menu de Navegação

- [Propósito](#propósito)
- [Objetivo](#objetivo)
- [Minhas Considerações sobre o Projeto](#minhas-considerações-sobre-o-projeto)
- [Zod e React Hook Forms](#zod-e-react-hook-forms)
- [Arquitetura](#arquitetura)
- [Interface Responsiva com ShadowUI e Tailwind CSS](#interface-responsiva-com-shadowui-e-tailwind-css)
- [BiomeJS](#biomejs)
- [Bun](#bun)
- [Rodando o Projeto](#rodando-o-projeto)

## Propósito

O objetivo deste projeto, denominado CartSys Software - Desafio Prático para a posição de Desenvolvedor Front-End Pleno/Sênior, é criar uma aplicação web que permita aos usuários criar wizards de forma dinâmica.

## Objetivo

O objetivo principal deste desafio é desenvolver uma interface intuitiva e funcional para a criação dinâmica de wizards. Essa aplicação deve permitir que os usuários criem wizards personalizados de acordo com suas necessidades específicas, selecionando a orientação desejada (horizontal ou vertical) e adicionando componentes como formulários, cards e galerias de imagens. A aplicação também deve oferecer uma visualização em tempo real do design do wizard conforme os usuários adicionam componentes.

## Minhas Considerações sobre o Projeto

Infelizmente, não consegui implementar todos os componentes da aplicação para serem inseridos no wizard de criação. No entanto, acredito que a abordagem que desenvolvi tem potencial, especialmente por oferecer uma camada adicional de personalização para o usuário. Pensando em escalar isso para uma aplicação futura, decidi definir os componentes com suas propriedades na pasta types/, utilizando Zod e React Hook Forms. Essa abordagem visa entregar uma variedade de componentes e garantir uma aplicação robusta para o usuário final.

Geralmente, essa seria a estratégia que seguiria, considerando todos os aspectos da aplicação. Com mais tempo para desenvolvimento, optaria por otimizar ainda mais a inserção dos componentes. Uma ideia seria separar a parte de propriedades e componentes no backend, mantendo no frontend apenas as assinaturas dos componentes. No entanto, essa decisão dependeria de um estudo de arquitetura mais aprofundado, levando em consideração questões de viabilidade e custo, tanto em termos de hardware quanto financeiros.

## Zod e React Hook Forms

Utilizar o Zod em conjunto com o React Hook Form para realizar a camada de validação dos formulários de cada componente é uma escolha estratégica e significativa para a robustez e escalabilidade da aplicação. O Zod é uma biblioteca de validação de esquema altamente confiável e expressiva, que permite definir e validar estruturas de dados de forma precisa e concisa. Integrado com o React Hook Form, que é uma biblioteca leve e eficiente para gerenciar formulários em React, essa combinação oferece diversas vantagens.

O Zod garante que os dados inseridos nos formulários estejam em conformidade com as expectativas da aplicação, evitando inconsistências e erros de validação. Além disso, ele facilita a definição de esquemas de validação complexos de forma legível e intuitiva, o que torna o desenvolvimento mais ágil e menos propenso a bugs.

Por sua vez, o React Hook Form simplifica ainda mais o processo de gerenciamento de formulários, fornecendo um conjunto de hooks customizáveis que lidam com o estado e a validação dos dados de forma eficiente. Ele é otimizado para performance e escalabilidade, garantindo uma experiência de usuário fluida mesmo em aplicações com grande volume de dados e interações.

Ao utilizar o Zod e o React Hook Form em conjunto, você não só assegura a integridade dos dados da aplicação, mas também simplifica e agiliza o desenvolvimento de novos formulários e funcionalidades. Além disso, essa abordagem é altamente escalável, permitindo adicionar novas páginas e expandir o wizard de forma rápida e segura.

## Arquitetura

Na escolha da arquitetura, decidi seguir o padrão do Next.js. Acreditei que essa escolha seria a mais adequada para resolver o problema proposto. O Next.js fornece uma estrutura sólida e bem definida para construir aplicativos React. Isso facilita a organização do código e permite o desenvolvimento de funcionalidades avançadas, como roteamento dinâmico e renderização do lado do servidor.

Para quem deseja explorar diferentes abordagens arquiteturais, disponibilizei abaixo um links de uma aplicações que desenvolvi. Que utiliza Create React App, essa aplicação serve como exemplo prático de uma arquitetura que pode oferecer opções valiosas para projetos futuros.

Por favor, adicione os links para as aplicações nos espaços abaixo:

[Link para Aplicação com Create React App](https://github.com/tassiomr/search-animals)

## Interface Responsiva com ShadowUI e Tailwind CSS

Neste projeto, utilizei ShadowUI e Tailwind CSS para desenvolver uma interface de usuário (UI) eficiente e responsiva:

### ShadowUI

- Simplifica a criação e manutenção de componentes.
- Promove a reutilização e reduz o acoplamento entre eles.

### Tailwind CSS

- Agiliza o processo de estilização com classes utilitárias.
- Mantém uma interface consistente e adaptável em diferentes dispositivos.

### Benefícios da Combinação

- Desenvolvimento eficiente e modular.
- Interface coesa e fácil de manter.

### @BiomeJs

Decidi usar o Biome em vez do ESLint. Embora o Next.js permita configurar o ESLint diretamente, achei que o Biome seria uma opção mais vantajosa. É uma ferramenta nova, mas oferece configuração de padrões e execução de lints e correções de uma forma que considero mais eficiente do que o ESLint. Acredito que essa abordagem seja melhor para manter a consistência do código e garantir a qualidade do projeto.

## Bun

Optei por usar o Bun como gerenciador de pacotes neste projeto. Sou um entusiasta desta tecnologia e, em minha experiência, o Bun tem demonstrado ser mais performático em comparação com o NPM, Yarn e PNPM. Sua eficiência e rapidez tornam-no uma escolha atraente para agilizar o processo de instalação e gerenciamento de dependências, contribuindo para uma experiência de desenvolvimento mais fluída e eficaz.

### Rodando o Projeto

Para executar o projeto, siga os passos abaixo:

1. **Desenvolvimento**:

   ```
   bun run dev
   ```

   Este comando inicia o servidor de desenvolvimento do Next.js.

2. **Construção**:

   ```
   bun run build
   ```

   Este comando compila o projeto para produção.

3. **Iniciar o Servidor**:

   ```
   bun start
   ```

   Este comando inicia o servidor de produção.

4. **Corrigir Lint**:
   ```
   bun run lint:fix
   ```
   Este comando executa a verificação e correção do lint no código fonte usando o Biome.

![foto1](https://github.com/Marcosgt1111/To-Do-List-SAPUI5/blob/main/print%20task%20mde.png?raw=true)

![foto2](https://github.com/Marcosgt1111/To-Do-List-SAPUI5/blob/main/print%20task%20mde%202.png?raw=true)


📦 SAP UI5 To-Do List: Gerenciamento de Tarefas de Estoque
📝 Visão Geral do Projeto
Este projeto é uma Lista de Tarefas (To-Do List) desenvolvida integralmente em SAP UI5 (seguindo o padrão MVC) e alinhada com as diretrizes de design SAP Fiori. O aplicativo foi contextualizado para o cenário de Manutenção de Estoque, onde as tarefas representam atividades logísticas (recebimento, reabastecimento, verificação de prazo, etc.).

O objetivo principal foi demonstrar a habilidade de construir uma interface de usuário responsiva, modular e intuitiva, utilizando apenas componentes front-end. A persistência dos dados é simulada usando Modelos JSON em memória.

✨ Funcionalidades
KPIs em Tempo Real: Exibe indicadores de tarefas de estoque (Atrasadas, Para Hoje, Para Amanhã).

Adição de Tarefas: Formulário com validação de descrição, prioridade (Baixa, Média, Alta, Crítica) e data de entrega (apenas a partir de hoje).

Gerenciamento de Lista: Exibição clara das tarefas com status de conclusão e prioridade colorida (usando sap.m.ObjectStatus).

Ações: Concluir tarefa (aplica strike-through) e Excluir tarefa (com diálogo de confirmação Fiori).

Responsividade: Layout adaptável para dispositivos móveis e desktop.

🛠️ Instruções de Setup e Execução
Para configurar e executar este projeto localmente, você precisará ter o Node.js e o SAP UI5 CLI instalados.

Pré-Requisitos
Node.js: Versão 18.x ou superior.

SAP UI5 CLI: Instalado globalmente via npm.

Bash

npm install --global @ui5/cli
1. Clonar o Repositório
Abra seu terminal ou prompt de comando e clone o projeto do GitHub:

Bash

cd nome-do-repositorio
2. Instalar Dependências
Instale as dependências do Node.js, que incluem as bibliotecas OpenUI5 configuradas no ui5.yaml:

Bash

npm install
3. Executar o Aplicativo
Inicie o servidor local do UI5. O aplicativo será aberto automaticamente no seu navegador padrão (http://localhost:8080).

Bash

npm start
4. Bibliotecas UI5 Utilizadas
As seguintes bibliotecas foram configuradas no ui5.yaml para uso no projeto:

sap.m

sap.ui.core

sap.ui.layout

sap.tnt

themelib_sap_horizon (Tema Fiori moderno)

📌 Estrutura do Projeto (MVC)
O projeto segue a estrutura padrão Model-View-Controller (MVC) do SAP UI5:

├── webapp/
│   ├── controller/         # Contém a lógica (onInit, onAddTask, etc.)
│   │   └── Main.controller.js
│   ├── view/               # Contém a interface (XML)
│   │   └── Main.view.xml
│   ├── model/              # Modelos JSON para dados e persistência
│   ├── Component.js        # Ponto de entrada da aplicação
│   ├── index.html          # Arquivo de inicialização
│   └── manifest.json       # Manifesto da aplicação e declaração de modelos
├── .gitignore
├── package.json
├── README.md
└── ui5.yaml              # Configuração do SAP UI5 CLI

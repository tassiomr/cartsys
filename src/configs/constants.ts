const constants = {
  root: {
    title: "CartSys Challanger",
    nav: {
      buttons: {
        create: "Wizard Creator",
      },
    },
  },
  wizardCreator: {
    emptyOrientationTitle: "Vamos começar",
    emptyOrientationDescription:
      "Primeiramente escolha a direção do layout do seu Wizard!",
    pageName: {
      placeholder: "Nome da página",
      button: "Salvar nome",
    },
    pageBuilder: {
      buttons: {
        addComponent: "Adicionar components",
      },
    },
    actions: {
      buttons: [
        { label: "Adicionar Página", action: "add" },
        { label: "Cancelar", action: "cancel" },
        { label: "Salvar", action: "save" },
        { label: "Preview", action: "preview" },
      ],
    },
    toast: {
      title: "Wizard finalizado.",
      description: "Seu wizard foi criado com sucesso!",
    },
  },
  viewer: {
    buttons: {
      finish: "Finalizar",
      closePreview: "Close Previwer",
    },
    toast: {
      title: "Resultados coletados",
      description: "Seus dados foram coletados e estão acessiveis no ViewStore",
      button: "Go Home",
    },
  },
  wizardHome: {
    title: "Vamos começar",
    description: "Primeiramente escolha a direção do layout do seu Wizard!",
    pageNamePlaceholder: "Nome da página",
    buttons: {
      saveButton: "Salvar nome",
      createWizardButton: "Criar Wizard",
    },
    card: {
      orientationLabel: "Orientação: ",
      pagesLabel: "Páginas: ",
      createdAtLabel: "Criado em: ",
    },
    emptyPage: {
      noWizardMessage: "Não temos nenhum wizard por aqui!",
      startCreatingMessage:
        "Que tal começar a criar seu primeiro projeto agora?",
    },
  },
};
export default constants;

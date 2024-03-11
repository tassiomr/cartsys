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
  },
  viewer: {
    buttons: {
      finish: "Finalizar",
      closePreview: "Close Previwer",
    },
    toast: {
      title: "Resultados coletados",
      description: "Seus dados foram coletados e estão acessiveis no ViewStore",
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
      noWizardMessage: "Parece que você ainda não criou nenhum wizard!",
      startCreatingMessage:
        "Que tal começar a criar seu primeiro wizard agora?",
    },
  },
};
export default constants;

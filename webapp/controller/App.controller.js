sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel",
  "sap/m/MessageToast",
  "sap/m/MessageBox"
], function (Controller, JSONModel, MessageToast) {
  "use strict";

  return Controller.extend("ui5.quickstart.controller.App", {
    // modelo JSON para armazenar os dados da aplicação
    onInit: function () {
      const oData = {
        kpi: {
          overdue: 0,
          today: 5,
          tomorrow: 10
        },
        tasks: []
      };

      const oModel = new JSONModel(oData);
      this.getView().setModel(oModel);
    },
    onAddTask: function () {
      const oView = this.getView();
      const oModel = oView.getModel();

      // Pega os valores do Inputs

      const oTaskInput = oView.byId("taskInput");
      const sTaskDescription = oTaskInput.getValue();
      const oPrioritySelect = oView.byId("prioritySelect");
      const oSelectedItem = oPrioritySelect.getSelectedItem();
      const oDatePicker = oView.byId("datePicker");
      const sDate = oDatePicker.getValue();

      // Validação: verifica se a desc da tarefa não está vazia
      if (!sTaskDescription.trim()) {
        MessageToast.show("Por favor, insira a descrição da tarefa.");
        return;
      }

      // Mapeia a chave da prioridade para um estado (cor) e texto
      const sPriorityKey = oSelectedItem.getKey();
      const sPriorityText = oSelectedItem.getText();
      let sPriorityState;

      switch (sPriorityKey) {
        case "critical":
        case "high":
          sPriorityState = "Error"; // Vermelho
          break;
        case "medium":
          sPriorityState = "Warning"; // Amarelo
          break;
        default:
          sPriorityState = "Success"; // Verde para "Baixa"
      }

      const aTasks = oModel.getProperty("/tasks");
      
      aTasks.unshift({
        description: sTaskDescription,
        priority: sPriorityText,
        date: sDate,
        priorityState: sPriorityState 
      });

      oModel.setProperty("/tasks", aTasks);

      // Limpa os campos de entrada
      oTaskInput.setValue("");
      oDatePicker.setValue("");
    },

    onDeleteTask: function (oEvent) {
      const oModel = this.getView().getModel();
      const aTasks = oModel.getProperty("/tasks");
      const oItemToDelete = oEvent.getSource().getBindingContext().getObject();

      sap.m.MessageBox.confirm(
      "Tem certeza que deseja apagar esta tarefa?",
      {
        title: "Confirmar exclusão",
        actions: [sap.m.MessageBox.Action.OK, sap.m.MessageBox.Action.CANCEL],
        emphasizedAction: sap.m.MessageBox.Action.OK,
        onClose: function (sAction) {
          if (sAction === sap.m.MessageBox.Action.OK) {
            // Encontra e remove o item da lista
            const aUpdatedTasks = aTasks.filter(task => task !== oItemToDelete);
            oModel.setProperty("/tasks", aUpdatedTasks);

            sap.m.MessageToast.show("Tarefa excluída.");
          }
        }
      }
    );

      oModel.setProperty("/tasks", aUpdatedTasks);
    }
  });
});

sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel",
  "sap/m/MessageToast"
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
      const sPriority = oPrioritySelect.getSelectedItem().getText();
      const oDatePicker = oView.byId("datePicker");
      const sDate = oDatePicker.getValue();

      // Validação: verifica se a desc da tarefa não está vazia
      if (!sTaskDescription.trim()) {
        MessageToast.show("Por favor, insira a descrição da tarefa");
        return;
      }

      const aTasks = oModel.getProperty("/tasks");
      
      aTasks.unshift({
        description: sTaskDescription,
        priority: sPriority,
        date: sDate
      });

      oModel.setProperty("/tasks", aTasks);
      oTaskInput.setValue("");
      oDatePicker.setValue("");
    }
  });
});

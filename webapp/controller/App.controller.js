sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel",
  "sap/m/MessageToast"
], function (Controller, JSONModel, MessageToast) {
  "use strict";

  return Controller.extend("ui5.quickstart.controller.App", {
    onInit: function () {
      const oData = {
        kpi: {
          overdue: 0;
          today: 5,
          tomorrow: 10
        },
        tasks: []
      };

      const oModel = new JSONModel(oData);
      this.getView().setModel(oModel);
    },
    onAddTask: function () {
    }
  });
});

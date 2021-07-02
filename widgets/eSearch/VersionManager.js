define([
  'jimu/shared/BaseVersionManager'
],
function(
  BaseVersionManager
  ) {
  function VersionManager(){
    this.versions = [{
      version: '1.0',
      upgrader: function(oldConfig){
        return oldConfig;
      }
    }, {
      version: '1.1',
      upgrader: function(oldConfig){
        return oldConfig;
      }
    }, {
      version: '1.2',
      upgrader: function(oldConfig){
        var newConfig = oldConfig;
        newConfig.bufferDefaults.addtolegend = false;
        for(var l = 0; l < newConfig.layers.length; l++){
          var lay = newConfig.layers[l];
          delete lay.showattachments;
        }
        return newConfig;
      }
    },{
      version: '1.2.0.1',
      upgrader: function(oldConfig){
        return oldConfig;
      }
    },{
      version: '1.2.0.2',
      upgrader: function(oldConfig){
        var newConfig = oldConfig;
        newConfig.exportsearchurlchecked = true;
        return newConfig;
      }
    },{
      version: '1.2.0.3',
      upgrader: function(oldConfig){
        var newConfig = oldConfig;
        newConfig.enablePopupsOnResultClick = true;
        return newConfig;
      }
    },{
      version: '1.2.0.4',
      upgrader: function(oldConfig){
        var newConfig = oldConfig;
        newConfig.graphicalsearchoptions.keepgraphicalsearchenabled = oldConfig.oldConfig;
        newConfig.graphicalsearchoptions.toleranceforpointgraphicalselection = oldConfig.toleranceforpointgraphicalselection;
        newConfig.graphicalsearchoptions.addpointtolerancechecked = oldConfig.addpointtolerancechecked;
        newConfig.graphicalsearchoptions.multipartgraphicsearchchecked = oldConfig.multipartgraphicsearchchecked;
        newConfig.graphicalsearchoptions.buffercheckedbydefaultgraphicaloption = false;
        newConfig.graphicalsearchoptions.showmultigraphicsgraphicaloption = true;
        newConfig.graphicalsearchoptions.showaddtolerancegraphicaloption = true;
        newConfig.graphicalsearchoptions.showaddsqltextgraphicaloption = true;
        newConfig.graphicalsearchoptions.showbuffergraphicaloption = true;
        return newConfig;
      }
    },{
      version: '1.2.0.5',
      upgrader: function(oldConfig){
        return oldConfig;
      }
    },{
      version: '1.2.0.6',
      upgrader: function(oldConfig){
        return oldConfig;
      }
    },{
      version: '1.3',
      upgrader: function(oldConfig){
        return oldConfig;
      }
    },{
      version: '1.3.0.1',
      upgrader: function(oldConfig){
        return oldConfig;
      }
    },{
      version: '1.3.0.2',
      upgrader: function(oldConfig){
        var newConfig = oldConfig;
        newConfig.disablePopups = false;
        newConfig.disableuvcache = false;
        return newConfig;
      }
    },{
      version: '2.0.1',
      upgrader: function(oldConfig){
        return oldConfig;
      }
    },{
      version: '2.0.1.1',
      upgrader: function(oldConfig){
        return oldConfig;
      }
    },{
      version: '2.0.1.2',
      upgrader: function(oldConfig){
        return oldConfig;
      }
    },{
      version: '2.0.1.3',
      upgrader: function(oldConfig){
        return oldConfig;
      }
    },{
      version: '2.0.1.4',
      upgrader: function(oldConfig){
        return oldConfig;
      }
    },{
      version: '2.1',
      upgrader: function(oldConfig){
        return oldConfig;
      }
    },{
      version: '2.1.1',
      upgrader: function(oldConfig){
        return oldConfig;
      }
    },{
      version: '2.1.2',
      upgrader: function(oldConfig){
        return oldConfig;
      }
    },{
      version: '2.2',
      upgrader: function(oldConfig){
        return oldConfig;
      }
    },{
      version: '2.2.1',
      upgrader: function(oldConfig){
        return oldConfig;
      }
    },{
      version: '2.3',
      upgrader: function(oldConfig){
        return oldConfig;
      }
    },{
      version: '2.4',
      upgrader: function(oldConfig){
        return oldConfig;
      }
    },{
      version: '2.4.0.1',
      upgrader: function(oldConfig){
        return oldConfig;
      }
    },{
      version: '2.4.0.2',
      upgrader: function(oldConfig){
        return oldConfig;
      }
    },{
      version: '2.5',
      upgrader: function(oldConfig){
        return oldConfig;
      }
    },{
      version: '2.5.0.1',
      upgrader: function(oldConfig){
        return oldConfig;
      }
    },{
      version: '2.6',
      upgrader: function(oldConfig){
        return oldConfig;
      }
    },{
      version: '2.6.0.1',
      upgrader: function(oldConfig){
        var newConfig = oldConfig;
        newConfig.bufferDefaults.autoZoom = true;
        return newConfig;
      }
    },{
      version: '2.6.1',
      upgrader: function(oldConfig){
        var newConfig = oldConfig;
        newConfig.containsword = false;
        return newConfig;
      }
    },{
      version: '2.6.1.1',
      upgrader: function(oldConfig){
        return oldConfig;
      }
    },{
      version: '2.7',
      upgrader: function(oldConfig){
        return oldConfig;
      }
    },{
      version: '2.8',
      upgrader: function(oldConfig){
        return oldConfig;
      }
    },{
      version: '2.9',
      upgrader: function(oldConfig){
        return oldConfig;
      }
    },{
      version: '2.10',
      upgrader: function(oldConfig){
        return oldConfig;
      }
    },{
      version: '2.11',
      upgrader: function(oldConfig){
        return oldConfig;
      }
    },{
      version: '2.12',
      upgrader: function(oldConfig){
        return oldConfig;
      }
    },{
      version: '2.13',
      upgrader: function(oldConfig){
        return oldConfig;
      }
    }];
  }

  VersionManager.prototype = new BaseVersionManager();
  VersionManager.prototype.constructor = VersionManager;
  return VersionManager;
});

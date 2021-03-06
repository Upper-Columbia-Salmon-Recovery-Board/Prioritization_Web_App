///////////////////////////////////////////////////////////////////////////
// Copyright © 2014 Esri. All Rights Reserved.
//
// Licensed under the Apache License Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
///////////////////////////////////////////////////////////////////////////

define([
  'dojo/_base/declare',
  'jimu/BaseFeatureAction',
  'jimu/dijit/FieldStatistics',
  'jimu/WidgetManager'
], function(declare, BaseFeatureAction, FieldStatistics, WidgetManager){
  var clazz = declare(BaseFeatureAction, {
    iconClass: 'icon-statistics',

    isFeatureSupported: function(featureSet, layer){
      var supported = false;
      supported = featureSet.features.length > 1 && layer && this.getNumbericFields(layer).length > 0;
      var tWidget = WidgetManager.getInstance().getWidgetById(this.widgetId);
      if(tWidget && tWidget.state === 'active'){
        return supported;
      }else{
        return false;
      };
    },

    onExecute: function(featureSet, layer){
      var stat = new FieldStatistics();
      var statInfo = {
        featureSet: featureSet,
        layer: layer,
        fieldNames: this.getNumbericFields(featureSet).map(function(f){
          return f.name;
        })
      };

      stat.showContentAsPopup(statInfo);
    },

    getNumbericFields: function(layer){
      return layer.fields.filter(function(f){
        return ['esriFieldTypeSmallInteger',
              'esriFieldTypeInteger',
              'esriFieldTypeSingle',
              'esriFieldTypeDouble'].indexOf(f.type) > 0;
      });
    }

  });
  return clazz;
});

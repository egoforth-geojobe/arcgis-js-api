// COPYRIGHT © 201 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["dojo/_base/declare","../../supportClasses/templateJsonUtils/fieldInfo/FieldInfoRenderer"],function(e,l){function a(e){var l=-1/0;return e.forEach(function(e){l=Math.max(l,e)}),l}return e(null,{_sections:null,_variableTables:null,constructor:function(){this._sections=[]},_samplePercentValues:[52,30,18,90,70,100],_realValues:null,setVariableTables:function(e){this._variableTables=e,this._realValues=null},addSection:function(e){this._sections.push(e),this._realValues=null},_tryCollectRealValues:function(){if(this._realValues)return this._realValues;var e=this._sections[0].viewModel.dynamicReportInfo.fieldData;this._realValues=this._variableTables.map(function(a){var t=a.variable.fieldInfo;return l.getFieldDataValue(t,e)})},getValueInfo:function(e){var l=!e.viewModel.dynamicReportInfo,t=this._sections.indexOf(e);if(l){var n=this._samplePercentValues.slice();n.length=this._sections.length;var s=a(n),i=n.map(function(e){return e/s}),r=n[t];return{number:100*r,percent:r,normalizedValue:i[t]}}this._tryCollectRealValues();var u=a(this._realValues),o=this._realValues.map(function(e){return e/u}),c=this._realValues[t];return{number:c,percent:c,normalizedValue:o[t]}}})});
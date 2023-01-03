var ApiMunicipios = Class.create();
ApiMunicipios.prototype = Object.extendsObject(AbstractAjaxProcessor,{
    DadosGoverno: function() {
		try { 
 var r = new sn_ws.RESTMessageV2('ApiMultirow', 'Default GET');
 var response = r.execute();
 var responseBody = response.getBody();
 var httpStatus = response.getStatusCode();
var arr = JSON.parse(responseBody);	
			
}
catch(ex) {
 var message = ex.message;
}
		return JSON.stringify(arr);
    },

    type: 'ApiMunicipios'
});
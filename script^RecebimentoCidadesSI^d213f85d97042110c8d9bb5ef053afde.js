function onLoad() {
  

    var clap = new GlideAjax("ApiMunicipios");
    clap.addParam('sysparm_name', 'DadosGoverno');
    clap.getXML(democall);

    function democall(response) {
		
         var answer = response.responseXML.documentElement.getAttribute("answer");
      answer = JSON.parse(answer);
 for (var i = 0; i < answer.length; i++) {
 g_form.addOption('cidade', answer[i].municipio, answer[i].municipio_extenso);
       }
    }

    //Type appropriate comment here, and begin script below

}
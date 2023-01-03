function onChange(control, oldValue, newValue, isLoading) {
    if (isLoading || newValue == '') {
        return;
    }


   g_form.clearValue('dados_do_governo');
    var clap = new GlideAjax("ApiMultirow");
    clap.addParam('sysparm_name', 'DadosGoverno');
    clap.addParam('sysparm_muni', g_form.getValue('cidade'));
    clap.addParam('sysparm_mes', g_form.getValue('mes'));
    clap.getXML(democall);


    // var obj = (g_form.getValue('dados_do_governo').length != 0) ? JSON.parse(g_form.getValue('dados_do_governo')) : [];

    function democall(response) {
        var answer = response.responseXML.documentElement.getAttribute("answer");
        answer = JSON.parse(answer);
        //alert(answer[0]);
        var obj = (g_form.getValue('dados_do_governo').length != 0) ? JSON.parse(g_form.getValue('dados_do_governo')) : [];
        obj.push({
            orgao: answer[0].orgao,
            evento: answer[0].evento,
            nm_empenho: answer[0].nr_empenho,
            id_fornecedor: answer[0].id_fornecedor,
            nome_fornecedor: answer[0].nm_fornecedor,
            data_despesa: answer[0].dt_emissao_despesa,
            valor_da_despes: answer[0].vl_despesa

        });
        obj.push({
            orgao: answer[1].orgao,
            evento: answer[1].evento,
            nm_empenho: answer[1].nr_empenho,
            id_fornecedor: answer[1].id_fornecedor,
            nome_fornecedor: answer[1].nm_fornecedor,
            data_despesa: answer[1].dt_emissao_despesa,
            valor_da_despes: answer[1].vl_despesa

        });
        obj.push({
            orgao: answer[2].orgao,
            evento: answer[2].evento,
            nm_empenho: answer[2].nr_empenho,
            id_fornecedor: answer[2].id_fornecedor,
            nome_fornecedor: answer[2].nm_fornecedor,
            data_despesa: answer[2].dt_emissao_despesa,
            valor_da_despes: answer[2].vl_despesa

        });
        obj.push({
            orgao: answer[3].orgao,
            evento: answer[3].evento,
            nm_empenho: answer[3].nr_empenho,
            id_fornecedor: answer[3].id_fornecedor,
            nome_fornecedor: answer[3].nm_fornecedor,
            data_despesa: answer[3].dt_emissao_despesa,
            valor_da_despes: answer[3].vl_despesa

        });
        obj.push({
            orgao: answer[4].orgao,
            evento: answer[4].evento,
            nm_empenho: answer[4].nr_empenho,
            id_fornecedor: answer[4].id_fornecedor,
            nome_fornecedor: answer[4].nm_fornecedor,
            data_despesa: answer[4].dt_emissao_despesa,
            valor_da_despes: answer[4].vl_despesa

        });
        g_form.setValue('dados_do_governo', JSON.stringify(obj));
    }
    //g_form.setValue('dados_do_governo', JSON.stringify(obj));
}
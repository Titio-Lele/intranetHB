function soap() {


    var soapMessage =
        "<soapenv:Envelope xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' xmlns:xsd='http://www.w3.org/2001/XMLSchema' xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/' xmlns:soap='http://www.SoapClient.com/xml/SoapResponder.xsd'>" +
        "<soapenv:Header/>" +
        "<soapenv:Body>" +
        "<soap:Method1 soapenv:encodingStyle='http://schemas.xmlsoap.org/soap/encoding/'>" +
        "<bstrParam1 xsi:type='xsd:string'>teste</bstrParam1>" +
        "<bstrParam2 xsi:type='xsd:string'>teste2</bstrParam2>" +
        "</soap:Method1>" +
        "</soapenv:Body>" +
        "</soapenv:Envelope>"

    var urlXHR = "http://soapclient.com/xml/soapresponder.wsdl";
    var xmlhttp = new XMLHttpRequest();
    const method = "POST";

    xmlhttp.open(method, urlXHR, true);

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4) {
            if (xmlhttp.status == 200) {
                console.log(xmlhttp.responseText);
            }
        }
    }
    xmlhttp.setRequestHeader('Content-Type', 'text/xml');
    xmlhttp.send(soapMessage);
}

soap();
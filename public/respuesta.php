<?php
    $transaccion = $_GET["id"];
    $client = $_GET["clientTransactionId"];

    $file = fopen("archivoExpress.txt", "w");
    fwrite($file, "Inicio, datos: " . PHP_EOL);
    fwrite($file, $transaccion . PHP_EOL);
    fwrite($file, $client . PHP_EOL);

    $data_array = array(
        "id"=> (int)$transaccion,
        "clientTxId"=>$client
    );

    $data = json_encode($data_array);

    $curl = curl_init();
    curl_setopt($curl, CURLOPT_URL, "https://pay.payphonetodoesposible.com/api/button/V2/Confirm");
    curl_setopt($curl, CURLOPT_POST, 1);
    curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
    curl_setopt_array($curl, array(
    CURLOPT_HTTPHEADER => array(
    "Authorization: Bearer hNorVxVvpjSSF13D1XMOlbXs0rJG6Dpb7lYHlY76nlpc5NmzdwSyyDHKkg79D2bvvFS543ezrhL55bTzgAk8NSQu9cfIu235PIRdOo3kqRy5sbCQ7hoKn47cuUbq5LffPb1NAsh1t-EK-frdWcehkDl1dkG1_ulLZ6FuuXMdJA-b6b777qoJTaeaHymWcfaFQ4dCq9Taa6zhUHmLkyu0NW-tUuvN1uNJKvWocfuI_V7n1HHeUf2CkNhjW5lpaSAUILyJLGBWL2V4IcT3FGRy706wXUKTlBuFhd6ytlwrYcS4LeSqS8FABeshsVOvVydnDLSINg", "Content-Type:application/json"),
    ));
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
    $result = curl_exec($curl);
    curl_close($curl);
    echo $result;

    fwrite($file, "Fin de llamada" . PHP_EOL);
    fwrite($file, $result . PHP_EOL);

    ?>
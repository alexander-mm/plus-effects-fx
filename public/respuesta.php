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
            "Authorization: Bearer iYabwnS13BDt7TUBQckHRY3KQEPo7ozjPR0keZBNF7w-7dJFlB1Yixoc8o8OAMOKSyX7McAHQXc4LGmAVmMxXZtnq_B28gouU8XqujvIIF93CzwcV5QWm53UTnIt8pG6FiRfUWkDVCUztWYS652tfK5JKH3tXJNT0-fy6A3gPCEoEp3rnD8CjOvS4W2iixFppec4tgYYw93LF-LKoj5SUyP79tztu_AFojpu98vBZmqUXp8IiVEtFyHgf9wxTguoekdlXoacdQUnYEcaxWuQe_65Ykg6OgmZ1Bc19-5Z4xA6m7TikMpp_xtAJX4oWEuOsSuW7w",
            "Content-Type: application/json"
        ),
        CURLOPT_RETURNTRANSFER => 1
    ));
    
    $result = curl_exec($curl);
    $httpCode = curl_getinfo($curl, CURLINFO_HTTP_CODE);

    if ($httpCode == 200) {
        echo $result;
    } else {
        echo "Error en la confirmación. Código HTTP: " . $httpCode;
    }

    curl_close($curl);
    fwrite($file, "Fin de llamada" . PHP_EOL);
    fwrite($file, $result . PHP_EOL);
?>

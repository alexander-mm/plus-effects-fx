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
    "Authorization: Bearer SirZNwYUQje5mQ4E8UPHstJP9NwyPq_NJ8G-meck9t4CIm6lZXrzoJWP6I6Yu3DrUnZqY3AGwJyFe8E1L3rVqTV2v8MAwASt9IJwPUJB45OJZrpl-bENpU_Iv9FcERypNpBYcpiMhKn4YWPylxaBaNx2RWxfNLUHufkh9T0hTVy45C4WTMbWmEUJAzVyi0MllPxlYpNmSCat15yKpo5eZCWsgt3tMmxcSTgPjRh9GRa9A5_pTLVOiiEO8qm0gBJS4iHwFFSM4KBOHRG6Y7uu4pmpckgBamU_Y93XDcSJF3v-Vq-P3p_WS5GFix6chiIr1iD_lw", "Content-Type:application/json"),
    ));
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
    $result = curl_exec($curl);
    curl_close($curl);
    echo $result;

    fwrite($file, "Fin de llamada" . PHP_EOL);
    fwrite($file, $result . PHP_EOL);

    ?>
<?php
include 'dbConn.php';
$sql = "SELECT * FROM sell";
$result1 = $conn->query($sql);
if ($result1->num_rows > 0) {
    $data1 = array();
    while ($row1 = $result1->fetch_assoc()) {
        $data1[] = $row1;
    }
}

echo json_encode($data1);

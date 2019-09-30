<?php

foreach ($transaccion as $obj) {

$a = 1500;
$b = 1750;
$c = 2000;

	echo '<tr>
            <td class="tab1-td">'.$obj[0].'</td>
            <td class="tab1-td">'.$obj[4].'</td>
            <td class="tab1-td">';
                if ( $obj[4] > 0 && $obj[4]< 10 ) {
                    echo $obj[4] * $a;
                }elseif ( $obj[4] >= 10 && $obj[4]< 20 ) {
                    echo $obj[4] * $b;
                }elseif ( $obj[4] > 20 ) {
                    echo $obj[4] * $c;
                }
    echo '</td></tr>';
    //         '<td class="tab1-td">
    //             <div align="center">SAICOR Green Hope</div><hr>
    //             <div align="center">SAICOR Soft</div>
    //         </td>
    //         <td class="tab1-td">
    //             <span style="color: #E57B7B">';
    //                 if ( $obj[4] >= 10 ) {
    //                     echo 'Gratis';
    //                 }else{
    //                     '¢ 25,000.00';
    //                 }
    // echo '</span><hr>
    //             <span style="color: #E57B7B">';
    //                 if ( $obj[4] >= 10 ) {
    //                     echo 'Gratis';
    //                 }else{
    //                     '¢ 35,000.00';
    //                 }
    //             '</span>
    //         </td>
    //     </tr>';


}



?>

import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";



function calc_classificacao_group(sum_question,tscore_group){


    let classificacao_group_int = 0;
    if (sum_question !== 0) {
        classificacao_group_int = 1;
        if (tscore_group >= 60 && tscore_group <= 69) {
            classificacao_group_int = 2;
        }
        else if (tscore_group >= 70) { classificacao_group_int = 3; }
    }



    return classificacao_group_int;
}


function calc_ps(sum_question) {

    let score_group = 0;
    let tscore_group = 0;


    if (sum_question !== 0) {
        if (sum_question === 8 || sum_question === 9) {
            score_group = 16;
            tscore_group = 40;
        }
        else if (sum_question === 10) {
            score_group = 27;
            tscore_group = 44;
        }
        else if (sum_question === 11) {
            score_group = 38;
            tscore_group = 47;
        }
        else if (sum_question === 12) {
            score_group = 50;
            tscore_group = 50;
        }
        else if (sum_question === 13) {
            score_group = 58;
            tscore_group = 52;
        }
        else if (sum_question === 14) {
            score_group = 66;
            tscore_group = 54;
        }
        else if (sum_question === 15) {
            score_group = 73;
            tscore_group = 56;
        }
        else if (sum_question === 16) {
            score_group = 82;
            tscore_group = 59;
        }
        else if (sum_question === 17) {
            score_group = 90;
            tscore_group = 63;
        }
        else if (sum_question === 18) {
            score_group = 95;
            tscore_group = 66;
        }
        else if (sum_question === 19) {
            score_group = 95;
            tscore_group = 67;
        }
        else if (sum_question === 20) {
            score_group = 96;
            tscore_group = 68;
        }
        else if (sum_question === 21) {
            score_group = 97;
            tscore_group = 69;
        }
        else if (sum_question === 22) {
            score_group = 97;
            tscore_group = 70;
        }
        else if (sum_question === 23) {
            score_group = 98;
            tscore_group = 71;
        }
        else if (sum_question === 24) {
            score_group = 99;
            tscore_group = 73;
        }
        else if (sum_question === 25) {
            score_group = 99;
            tscore_group = 75;
        }
        else if (sum_question === 26) {
            score_group = 99;
            tscore_group = 76;
        }
        else if (sum_question === 27) {
            score_group = 99;
            tscore_group = 79;
        }
        else if (sum_question >= 28) {
            score_group = 99;
            tscore_group = 80;
        }

    }


    let classificacao_group_int = calc_classificacao_group(sum_question,tscore_group);

    return { score_group, tscore_group,classificacao_group_int};



}



function calc_v(sum_question) {

    let score_group = 0;
    let tscore_group = 0;


    if (sum_question !== 0) {
        if (sum_question === 11) {
            score_group = 16;
            tscore_group = 40;
        }
        else if (sum_question === 12) {
            score_group = 24;
            tscore_group = 43;
        }
        else if (sum_question === 13) {
            score_group = 38;
            tscore_group = 47;
        }
        else if (sum_question === 14) {
            score_group = 50;
            tscore_group = 50;
        }
        else if (sum_question === 15) {
            score_group = 62;
            tscore_group = 53;
        }
        else if (sum_question === 16) {
            score_group = 73;
            tscore_group = 56;
        }
        else if (sum_question === 17) {
            score_group = 79;
            tscore_group = 58;
        }
        else if (sum_question === 18) {
            score_group = 84;
            tscore_group = 60;
        }
        else if (sum_question === 19) {
            score_group = 88;
            tscore_group = 62;
        }
        else if (sum_question === 20) {
            score_group = 92;
            tscore_group = 64;
        }
        else if (sum_question === 21) {
            score_group = 95;
            tscore_group = 66;
        }
        else if (sum_question === 22) {
            score_group = 95;
            tscore_group = 67;
        }
        else if (sum_question === 23) {
            score_group = 97;
            tscore_group = 69;
        }
        else if (sum_question === 24) {
            score_group = 97;
            tscore_group = 70;
        }
        else if (sum_question === 25) {
            score_group = 98;
            tscore_group = 71;
        }
        else if (sum_question === 26) {
            score_group = 98;
            tscore_group = 72;
        }
        else if (sum_question === 27) {
            score_group = 99;
            tscore_group = 72;
        }
        else if (sum_question === 28) {
            score_group = 99;
            tscore_group = 73;
        }
        else if (sum_question === 29) {
            score_group = 99;
            tscore_group = 74;
        }
        else if (sum_question === 30) {
            score_group = 99;
            tscore_group = 75;
        }
        else if (sum_question === 31) {
            score_group = 99;
            tscore_group = 75;
        }
        else if (sum_question >= 32 && sum_question <= 34) {
            score_group = 99;
            tscore_group = 76;
        }
        else if (sum_question >= 35 && sum_question <= 36) {
            score_group = 99;
            tscore_group = 77;
        }
        else if (sum_question === 37) {
            score_group = 99;
            tscore_group = 79;
        }
        else if (sum_question >= 38) {
            score_group = 99;
            tscore_group = 80;
        }
    }


    let classificacao_group_int = calc_classificacao_group(sum_question,tscore_group);

    return { score_group, tscore_group,classificacao_group_int};




}


function calc_a(sum_question) {

    let score_group = 0;
    let tscore_group = 0;



    if (sum_question !== 0) {
        if (sum_question === 9) {
            score_group = 16;
            tscore_group = 40;
        }
        else if (sum_question === 10) {
            score_group = 38;
            tscore_group = 47;
        }
        else if (sum_question === 11) {
            score_group = 58;
            tscore_group = 52;
        }
        else if (sum_question === 12) {
            score_group = 69;
            tscore_group = 55;
        }
        else if (sum_question === 13) {
            score_group = 79;
            tscore_group = 58;
        }
        else if (sum_question === 14) {
            score_group = 84;
            tscore_group = 60;
        }
        else if (sum_question === 15) {
            score_group = 90;
            tscore_group = 63;
        }
        else if (sum_question === 16) {
            score_group = 92;
            tscore_group = 64;
        }
        else if (sum_question === 17) {
            score_group = 95;
            tscore_group = 66;
        }
        else if (sum_question === 18) {
            score_group = 95;
            tscore_group = 67;
        }
        else if (sum_question === 19) {
            score_group = 97;
            tscore_group = 69;
        }
        else if (sum_question === 20) {
            score_group = 97;
            tscore_group = 70;
        }
        else if (sum_question === 21) {
            score_group = 98;
            tscore_group = 71;
        }
        else if (sum_question === 22) {
            score_group = 99;
            tscore_group = 72;
        }
        else if (sum_question === 23) {
            score_group = 99;
            tscore_group = 72;
        }
        else if (sum_question === 24) {
            score_group = 99;
            tscore_group = 73;
        }
        else if (sum_question === 25) {
            score_group = 99;
            tscore_group = 75;
        }
        else if (sum_question === 26) {
            score_group = 99;
            tscore_group = 76;
        }
        else if (sum_question === 27) {
            score_group = 99;
            tscore_group = 77;
        }
        else if (sum_question === 28) {
            score_group = 99;
            tscore_group = 78;
        }
        else if (sum_question === 29) {
            score_group = 99;
            tscore_group = 79;
        }
        else if (sum_question >= 30) {
            score_group = 99;
            tscore_group = 80;
        }
    }


    let classificacao_group_int = calc_classificacao_group(sum_question,tscore_group);

    return { score_group, tscore_group,classificacao_group_int};




}



function calc_t(sum_question) {

    let score_group = 0;
    let tscore_group = 0;


    if (sum_question !== 0) {
        if (sum_question === 14) {
            score_group = 16;
            tscore_group = 40;
        }
        else if (sum_question === 15) {
            score_group = 24;
            tscore_group = 43;
        }
        else if (sum_question === 16) {
            score_group = 34;
            tscore_group = 46;
        }
        else if (sum_question === 17) {
            score_group = 46;
            tscore_group = 49;
        }
        else if (sum_question === 18) {
            score_group = 62;
            tscore_group = 53;
        }
        else if (sum_question === 19) {
            score_group = 69;
            tscore_group = 55;
        }
        else if (sum_question === 20) {
            score_group = 79;
            tscore_group = 58;
        }
        else if (sum_question === 21) {
            score_group = 84;
            tscore_group = 60;
        }
        else if (sum_question === 22) {
            score_group = 88;
            tscore_group = 62;
        }
        else if (sum_question === 23) {
            score_group = 90;
            tscore_group = 63;
        }
        else if (sum_question === 24) {
            score_group = 92;
            tscore_group = 64;
        }
        else if (sum_question === 25) {
            score_group = 93;
            tscore_group = 65;
        }
        else if (sum_question === 26) {
            score_group = 95;
            tscore_group = 66;
        }
        else if (sum_question === 27) {
            score_group = 95;
            tscore_group = 67;
        }
        else if (sum_question === 28) {
            score_group = 96;
            tscore_group = 68;
        }
        else if (sum_question === 29) {
            score_group = 97;
            tscore_group = 69;
        }
        else if (sum_question === 30) {
            score_group = 97;
            tscore_group = 70;
        }
        else if (sum_question === 31) {
            score_group = 98;
            tscore_group = 71;
        }
        else if (sum_question === 32) {
            score_group = 98;
            tscore_group = 72;
        }
        else if (sum_question === 33) {
            score_group = 99;
            tscore_group = 74;
        }
        else if (sum_question === 34) {
            score_group = 99;
            tscore_group = 76;
        }
        else if (sum_question === 35) {
            score_group = 99;
            tscore_group = 77;
        }
        else if (sum_question >= 36) {
            score_group = 99;
            tscore_group = 80;
        }
    }


    let classificacao_group_int = calc_classificacao_group(sum_question,tscore_group);

    return { score_group, tscore_group,classificacao_group_int};




}



function calc_go(sum_question) {

    let score_group = 0;
    let tscore_group = 0;
    let classificacao_group_int = 0



    return { score_group, tscore_group, classificacao_group_int };



}



function calc_cc(sum_question) {

    let score_group = 0;
    let tscore_group = 0;


    if (sum_question !== 0) {
        if (sum_question === 9) {
            score_group = 16;
            tscore_group = 40;
        }
        else if (sum_question === 10) {
            score_group = 34;
            tscore_group = 46;
        }
        else if (sum_question === 11) {
            score_group = 50;
            tscore_group = 50;
        }
        else if (sum_question === 12) {
            score_group = 66;
            tscore_group = 54;
        }
        else if (sum_question === 13) {
            score_group = 76;
            tscore_group = 57;
        }
        else if (sum_question === 14) {
            score_group = 84;
            tscore_group = 60;
        }
        else if (sum_question === 15) {
            score_group = 88;
            tscore_group = 62;
        }
        else if (sum_question === 16) {
            score_group = 93;
            tscore_group = 65;
        }
        else if (sum_question === 17) {
            score_group = 95;
            tscore_group = 66;
        }
        else if (sum_question === 18) {
            score_group = 96;
            tscore_group = 68;
        }
        else if (sum_question === 19) {
            score_group = 97;
            tscore_group = 69;
        }
        else if (sum_question === 20) {
            score_group = 98;
            tscore_group = 71;
        }
        else if (sum_question === 21) {
            score_group = 98;
            tscore_group = 72;
        }
        else if (sum_question === 22) {
            score_group = 99;
            tscore_group = 74;
        }
        else if (sum_question === 23) {
            score_group = 99;
            tscore_group = 76;
        }
        else if (sum_question === 24) {
            score_group = 99;
            tscore_group = 77;
        }
        else if (sum_question === 25) {
            score_group = 99;
            tscore_group = 78;
        }
        else if (sum_question === 26) {
            score_group = 99;
            tscore_group = 79;
        }
        else if (sum_question >= 27) {
            score_group = 99;
            tscore_group = 80;
        }

    }


    let classificacao_group_int = calc_classificacao_group(sum_question,tscore_group);

    return { score_group, tscore_group,classificacao_group_int};




}



function calc_me(sum_question) {

    let score_group = 0;
    let tscore_group = 0;


    if (sum_question !== 0) {
        if (sum_question === 11) {
            score_group = 21;
            tscore_group = 42;
        }
        else if (sum_question === 12) {
            score_group = 50;
            tscore_group = 50;
        }
        else if (sum_question === 13) {
            score_group = 69;
            tscore_group = 55;
        }
        else if (sum_question === 14) {
            score_group = 79;
            tscore_group = 58;
        }
        else if (sum_question === 15) {
            score_group = 88;
            tscore_group = 62;
        }
        else if (sum_question === 16) {
            score_group = 92;
            tscore_group = 64;
        }
        else if (sum_question === 17) {
            score_group = 95;
            tscore_group = 67;
        }
        else if (sum_question === 18) {
            score_group = 95;
            tscore_group = 67;
        }
        else if (sum_question === 19) {
            score_group = 96;
            tscore_group = 68;
        }
        else if (sum_question === 20) {
            score_group = 97;
            tscore_group = 70;
        }
        else if (sum_question === 21) {
            score_group = 98;
            tscore_group = 71;
        }
        else if (sum_question === 22) {
            score_group = 98;
            tscore_group = 72;
        }
        else if (sum_question === 23) {
            score_group = 99;
            tscore_group = 73;
        }
        else if (sum_question >= 24 && sum_question <= 27) {
            score_group = 99;
            tscore_group = 75;
        }
        else if (sum_question >= 28 && sum_question <= 31) {
            score_group = 99;
            tscore_group = 76;
        }
        else if (sum_question === 32) {
            score_group = 99;
            tscore_group = 77;
        }
        else if (sum_question >= 33) {
            score_group = 99;
            tscore_group = 80;
        }

    }


    let classificacao_group_int = calc_classificacao_group(sum_question,tscore_group);

    return { score_group, tscore_group,classificacao_group_int};




}




function calc_pmi(sum_question) {

    let score_group = 0;
    let tscore_group = 0;


    if (sum_question !== 0) {

        if (sum_question === 9) {
            score_group = 16;
            tscore_group = 40;
        }
        else if (sum_question === 10) {
            score_group = 42;
            tscore_group = 48;
        }
        else if (sum_question === 11) {
            score_group = 58;
            tscore_group = 52;
        }
        else if (sum_question === 12) {
            score_group = 69;
            tscore_group = 55;
        }
        else if (sum_question === 13) {
            score_group = 79;
            tscore_group = 58;
        }
        else if (sum_question === 14) {
            score_group = 86;
            tscore_group = 61;
        }
        else if (sum_question === 15) {
            score_group = 92;
            tscore_group = 64;
        }
        else if (sum_question === 16) {
            score_group = 93;
            tscore_group = 65;
        }
        else if (sum_question === 17) {
            score_group = 95;
            tscore_group = 67;
        }
        else if (sum_question === 18) {
            score_group = 97;
            tscore_group = 69;
        }
        else if (sum_question === 19) {
            score_group = 98;
            tscore_group = 71;
        }
        else if (sum_question === 20) {
            score_group = 98;
            tscore_group = 72;
        }
        else if (sum_question === 21) {
            score_group = 99;
            tscore_group = 74;
        }
        else if (sum_question === 22) {
            score_group = 99;
            tscore_group = 74;
        }
        else if (sum_question === 23) {
            score_group = 99;
            tscore_group = 75;
        }
        else if (sum_question === 24) {
            score_group = 99;
            tscore_group = 75;
        }
        else if (sum_question === 25) {
            score_group = 99;
            tscore_group = 76;
        }
        else if (sum_question === 26) {
            score_group = 99;
            tscore_group = 76;
        }
        else if (sum_question === 27) {
            score_group = 99;
            tscore_group = 77;
        }
        else if (sum_question === 28) {
            score_group = 99;
            tscore_group = 78;
        }
        else if (sum_question >= 29) {
            score_group = 99;
            tscore_group = 80;
        }

    }


    let classificacao_group_int = calc_classificacao_group(sum_question,tscore_group);

    return { score_group, tscore_group,classificacao_group_int};




}


function calc_total(tscore_total) {

    let score_group = 0;
    let tscore_group = 0;


    if (tscore_total !== 0) {
        if (tscore_total >= 58 && tscore_total <= 62) {
            tscore_group = 40;
            score_group = 16;
        }
        else if (tscore_total >= 63 && tscore_total <= 63) {
            tscore_group = 41;
            score_group = 18;
        }
        else if (tscore_total >= 64 && tscore_total <= 64) {
            tscore_group = 42;
            score_group = 21;
        }
        else if (tscore_total >= 65 && tscore_total <= 65) {
            tscore_group = 43;
            score_group = 24;
        }
        else if (tscore_total >= 66 && tscore_total <= 66) {
            tscore_group = 44;
            score_group = 27;
        }
        else if (tscore_total >= 67 && tscore_total <= 67) {
            tscore_group = 45;
            score_group = 31;
        }
        else if (tscore_total >= 68 && tscore_total <= 68) {
            tscore_group = 46;
            score_group = 34;
        }
        else if (tscore_total >= 69 && tscore_total <= 69) {
            tscore_group = 46;
            score_group = 34;
        }
        else if (tscore_total >= 70 && tscore_total <= 70) {
            tscore_group = 47;
            score_group = 38;
        }
        else if (tscore_total >= 71 && tscore_total <= 71) {
            tscore_group = 48;
            score_group = 42;
        }
        else if (tscore_total >= 72 && tscore_total <= 72) {
            tscore_group = 49;
            score_group = 46;
        }
        else if (tscore_total >= 73 && tscore_total <= 73) {
            tscore_group = 50;
            score_group = 50;
        }
        else if (tscore_total >= 74 && tscore_total <= 74) {
            tscore_group = 51;
            score_group = 54;
        }
        else if (tscore_total >= 75 && tscore_total <= 75) {
            tscore_group = 51;
            score_group = 54;
        }
        else if (tscore_total >= 76 && tscore_total <= 76) {
            tscore_group = 52;
            score_group = 58;
        }
        else if (tscore_total >= 77 && tscore_total <= 78) {
            tscore_group = 53;
            score_group = 62;
        }
        else if (tscore_total >= 79 && tscore_total <= 79) {
            tscore_group = 54;
            score_group = 66;
        }
        else if (tscore_total >= 80 && tscore_total <= 81) {
            tscore_group = 55;
            score_group = 69;
        }
        else if (tscore_total >= 82 && tscore_total <= 83) {
            tscore_group = 56;
            score_group = 73;
        }
        else if (tscore_total >= 84 && tscore_total <= 84) {
            tscore_group = 57;
            score_group = 76;
        }
        else if (tscore_total >= 85 && tscore_total <= 86) {
            tscore_group = 58;
            score_group = 79;
        }
        else if (tscore_total >= 87 && tscore_total <= 87) {
            tscore_group = 59;
            score_group = 82;
        }
        else if (tscore_total >= 88 && tscore_total <= 89) {
            tscore_group = 60;
            score_group = 84;
        }
        else if (tscore_total >= 90 && tscore_total <= 91) {
            tscore_group = 61;
            score_group = 86;
        }
        else if (tscore_total >= 92 && tscore_total <= 97) {
            tscore_group = 62;
            score_group = 88;
        }
        else if (tscore_total >= 98 && tscore_total <= 101) {
            tscore_group = 63;
            score_group = 90;
        }
        else if (tscore_total >= 102 && tscore_total <= 103) {
            tscore_group = 64;
            score_group = 92;
        }
        else if (tscore_total >= 104 && tscore_total <= 104) {
            tscore_group = 54;
            score_group = 93;
        }
        else if (tscore_total >= 105 && tscore_total <= 106) {
            tscore_group = 66;
            score_group = 95;
        }
        else if (tscore_total >= 107 && tscore_total <= 107) {
            tscore_group = 67;
            score_group = 95;
        }
        else if (tscore_total >= 108 && tscore_total <= 109) {
            tscore_group = 68;
            score_group = 96;
        }
        else if (tscore_total >= 110 && tscore_total <= 112) {
            tscore_group = 69;
            score_group = 97;
        }
        else if (tscore_total >= 113 && tscore_total <= 117) {
            tscore_group = 70;
            score_group = 97;
        }
        else if (tscore_total >= 118 && tscore_total <= 122) {
            tscore_group = 71;
            score_group = 98;
        }
        else if (tscore_total >= 123 && tscore_total <= 1123) {
            tscore_group = 72;
            score_group = 98;
        }
        else if (tscore_total >= 124 && tscore_total <= 124) {
            tscore_group = 73;
            score_group = 99;
        }
        else if (tscore_total >= 125 && tscore_total <= 130) {
            tscore_group = 75;
            score_group = 99;
        }
        else if (tscore_total >= 131 && tscore_total <= 135) {
            tscore_group = 76;
            score_group = 99;
        }
        else if (tscore_total >= 136 && tscore_total <= 140) {
            tscore_group = 77;
            score_group = 99;
        }
        else if (tscore_total >= 141 && tscore_total <= 150) {
            tscore_group = 78;
            score_group = 99;
        }
        else if (tscore_total >= 151 && tscore_total <= 160) {
            tscore_group = 79;
            score_group = 99;
        }
        else if (tscore_total >= 161 ) {
            tscore_group = 80;
            score_group = 99;
        }
    }


    let classificacao_group_int = calc_classificacao_group(tscore_total,tscore_group);

    return { score_group, tscore_group,classificacao_group_int};




}


export {
    calc_ps,
    calc_v,
    calc_a,
    calc_t,
    calc_go,
    calc_cc,
    calc_me,
    calc_pmi,
    calc_total,
}
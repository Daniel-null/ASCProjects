let array = [
    ['copper',  'copper',  'diamond'   ],
    ['gold',    'silver',  'silver'    ],
    ['gold',    'diamond', 'luckySeven']
];

function lottoCehck() {
    for(let i = 0; i < array.length; i++) {
        if (array[i][i] == array[i+1][i]) {
            if (array[i][i] == array[i+2][i]){
                win1 = i
            }
        }
        //
        if (array[i][i] == array[i][i+1]) {
            if (array[i][i] == array[i][i+2]){
                win2 = i
            }
        }
    }
}
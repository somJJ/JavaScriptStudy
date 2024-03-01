//querySelectorAll('.tab-button')[0]과 같은 뜻
//제이쿼리 $는 다 찾는다 (all과 같음)
/*$('.tab-button').eq(0).on('click', function(){
     $('.tab-button').removeClass('orange')
     $('.tab-button').eq(0).addClass('orange')
     $('.tab-content').removeClass('show');
     $('.tab-content').eq(0).addClass('show');
}

     $('.tab-button').eq(1).on('click', function(){
     $('.tab-button').removeClass('orange')
     $('.tab-button').eq(1).addClass('orange')
     $('.tab-content').removeClass('show');
     $('.tab-content').eq(1).addClass('show');
     }   

     $('.tab-button').eq(2).on('click', function(){
     $('.tab-button').removeClass('orange')
     $('.tab-button').eq(2).addClass('orange')
     $('.tab-content').removeClass('show');
     $('.tab-content').eq(2).addClass('show');
    }

});
*/
//좋은 관습 : 자주 사용하는 셀렉터 변수에 넣어서 쓰기 !

    //for문 이용해서 간결하게 바꿈
    // for(let i=0; i<$('.tab-button').length; i++){
    //     $('.tab-button').eq(i).on('click', function(){
    //     $('.tab-button').removeClass('orange')
    //     $('.tab-button').eq(i).addClass('orange')
    //     $('.tab-content').removeClass('show');
    //     $('.tab-content').eq(i).addClass('show');
    //     }
    //     );
    // }



//querySelectorAll 저장해서 사용해보려고 코드 바꿈

// $('.tab-button').eq(0).on('click', function(){
//     console.log('0button');
//     divContentfc(0);
// });

// $('.tab-button').eq(1).on('click', function(){
//     console.log('0button');
//     divContentfc(1);
// });

// $('.tab-button').eq(2).on('click', function(){
//     console.log('0button');
//     divContentfc(2);
// });

for(let i=0;i<$('.tab-button').length;i++){
    $('.tab-button').eq(i).on('click', function(){
        console.log('0button');
        divContentfc(i);
    });
}

function divContentfc(num){
    var tabBtn = document.querySelectorAll('.tab-button');
    for(i=0;i<tabBtn.length;i++){
        tabBtn[i].classList.remove('orange');
    }

    document.querySelectorAll('.tab-button')[num].classList.add('orange');

    var divContent = document.querySelectorAll('.tab-content');
    for(i=0;i<divContent.length;i++){
        divContent[i].classList.remove('show');
    }

    document.querySelectorAll('.tab-content')[num].classList.add('show');
}


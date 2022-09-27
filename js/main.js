
        const elList = document.querySelectorAll('.list li > img');  // 썸네일 이미지 (버튼역할)
        const elPop = document.querySelector('.pop');                // 팝업창
        const elClose = document.querySelector('.close');            // 팝업 닫기버튼
        const elPopImg = document.querySelector('.pop img');         // 팝업 큰이미지
        const elBtns = document.querySelector('.pop p');             // 이전,다음 버튼
        let elTotal = elList.length;       
        let num = 0;                                                 // 썸네일 갯수

        // 배열명.forEach(function (aa,bb){
        //     실행문.. 
        // });   
        
        // 썸네일 이미지 누르면 팝업
        elList.forEach(function(aa,bb){
            aa.onclick = function(){
                elPop.classList.add('active');
                elPopImg.src = this.src;
                num = bb;                         // 몇번째 아이템을 눌렀는지 알아온 뒤에 변수 num에 대입
                console.log(`${num}번째 이미지 클릭`);
            }
        });

        // 팝업 닫기
        // 첫번째 방법
        elClose.onclick = function(){
            elPop.classList.remove('active');
        };

        // 두번째 방법   : 작동안됨.. 왜 안되는지 모름
        // elClose.addEventListener('click',elPop.classList.remove('active'));
    
        // 이전,다음 버튼
        elBtns.onclick = function(e){
            if(e.target.classList.contains('prev')){  // target  : 이벤트가 발생한 대상
                console.log('prev');

                if(num == 0){
                    num = elTotal;
                }
                num = num -1;
            } else{
                if(num != (elTotal - 1))                // 7이 아닐때만 num에 1을 더한다
                    num++;
            }
            elPopImg.src = elList[num].src; 
            console.log(`현재 num? ${num}`);
        };

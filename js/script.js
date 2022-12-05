$(function(){

    // $(".menu_btn").click(function(e){
    //     if(e.target.className === ".menu_btn"){
    //         $(".menu_tab").stop().show();
    //     } else{
    //         $(".menu_tab").stop().hide();
    //     }
    // })


    $(".menu_btn").click(function(){
        $(".menu_tab").toggle();
    });
    $("figure .search_section").click(function(){
       $(this).toggleClass("on");
    });

    $(".none-active").click(function(){
        let img = ($(this).attr("src") === "img/heart.png")
            ? "img/Rheart.png"
            : "img/heart.png";
            $(this).attr("src",img)
    })


    $(".none-active2").click(function(){
        let img = ($(this).attr("src") === "img/shop.png")
        ? "img/Bshop.png"
        : "img/shop.png"
        $(this).attr("src",img);
    })

    $(".minus").click(function(){
        let num = ($(".inp").attr("value"));
        let minus_num = parseInt(num) - 1;
        if(num > 0){
            $(".inp").attr("value",minus_num);   
        }else{
            let minus_num = 0      
            $(".inp").attr("value", minus_num);
        }

        if(num == 1){
            $(".mi").attr("src","img/minus-none.png");
        }
        
    })

    $(".plus").click(function(){
        let num = ($(".inp").attr("value"));
        let plus_num = parseInt(num) + 1;
        $(".inp").attr("value", plus_num);
        if(plus_num > 0){
            $(".mi").attr("src","img/minus-active.png");
        }
    })


    $(".contents_thumbnail").mouseenter(function(){
        $(this).children(".th_inner").stop().show()
    })
    $(".contents_thumbnail").mouseleave(function(){
        $(this).children(".th_inner").stop().hide()
    })

    $("#main .slide").slick({
        slide : "div", //슬라이드가 되어야 할 태그 지정 ex) div , li , p 
        infinite : true, //무한 반복 옵션
        slidesToShow : 1, //한 화면에 보여질 콘텐츠 개수
        slidesToScroll : 1, //스크롤 한번에 움직일 콘텐츠 개수
        arrow : true, //previous , next 기능 생성 유무 
        dots : true, //paginavigation 기능 생성 유무
        speed : 1000, //스크롤시 작동되는 시간 설정
        autoplay: true, //자동 스크롤 유무
        pauseOnHover : true, //슬라이드에 마우스 호버시 autoplay 일시정지 유무
        autoplaySpeed : 2000, //자동 스크롤시 다음으로 넘어가는데 걸리는 시간 설정
        draggable : false, //드래그 기능 유무
        fade : true,

        prevArrow : $(".left_arrow"), //previous 버튼 class 지정
        nextArrow : $(".right_arrow"), //next 버튼 class 지정
        appendDots : $(".bannerbtn_section"), //지정된 class의 자식으로 dots 생성

        // responsive:[ //반응형 옵션
        //     {
        //         breakpoint: 1700, //화면 width 값 1700px
        //         settings: { //위 옵션이 default 이고 setting  property 안에 추가
        //             slidesToShow : 1,
        //             slidesToScroll : 1
        //         }
        //     },
        //     {
        //         breakpoint: 1500, //화면 width 값 1500px
        //         settings: { //위 옵션이 default 이고 setting  property 안에 추가
        //             slidesToShow : 3,
        //             slidesToScroll : 3
        //         }
        //     },
        //     {
        //         breakpoint: 1100, //화면 width 값 1100px
        //         settings: { //위 옵션이 default 이고 setting  property 안에 추가
        //             slidesToShow : 2,
        //             slidesToScroll : 2
        //         }
        //     },
        //     {
        //         breakpoint: 850, //화면 width 값 850px
        //         settings: { //위 옵션이 default 이고 setting  property 안에 추가
        //             slidesToShow : 1,
        //             slidesToScroll : 1,
        //             draggable : true,
        //         }
        //     },
            
        // ]
    }); 
    // 슬릭슬라이드




    $("#checkOut").datepicker({
        minDate:0,
        changeMonth: true, //select box 월 표시 유무 (true / false)
        changeYear: true,  //select box 년 표시 유무(true / false)
        nextText: "다음 달", //next 아이콘 툴팁
        prevText: "이전 달", //prev 아이콘 툴팁
        yearRange:"c-20:c+20", //현재 연도를 기준으로 -n년:+n년  표시
        showButtonPanel: true, //달력 하단에 버튼 표시(today , done)
        currentText: "오늘 날짜", //today 버튼 문구 변경
        closeText: "닫기", //close 버튼 문구 변경
        dateFormat: "yy-mm-dd", //텍스트 필드에 입려되는 날짜형식 변경
        showAnim: "slide",  //달력이 보여지는 애니메이션 적용
        showMonthAfterYear: true, //월 ,년의 순서를 변경
        dayNamesMin:["일","월","화","수","목","금","토"], //[요일] 텍스트 변경
        monthNamesShort:["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"]  //[월] 텍스트 변경
        
    });





    $("#checkIn").datepicker({
        minDate:0,
        changeMonth: true, //select box 월 표시 유무 (true / false)
        changeYear: true,  //select box 년 표시 유무(true / false)
        nextText: "다음 달", //next 아이콘 툴팁
        prevText: "이전 달", //prev 아이콘 툴팁
        yearRange:"c-20:c+20", //현재 연도를 기준으로 -n년:+n년  표시
        showButtonPanel: true, //달력 하단에 버튼 표시(today , done)
        currentText: "오늘 날짜", //today 버튼 문구 변경
        closeText: "닫기", //close 버튼 문구 변경
        dateFormat: "yy-mm-dd", //텍스트 필드에 입려되는 날짜형식 변경
        showAnim: "slide",  //달력이 보여지는 애니메이션 적용
        showMonthAfterYear: true, //월 ,년의 순서를 변경
        dayNamesMin:["일","월","화","수","목","금","토"], //[요일] 텍스트 변경
        monthNamesShort:["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"]  //[월] 텍스트 변경
        
    });













})
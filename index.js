window.onload = function() {

    function ascendingOrder() {
        for (var i = 0; i < items.length; i++)
            items[i].style.order = items[i].innerText;
    }
    
    function descendingOrder() {
        for (var i = 0; i < items.length; i++)
            items[i].style.order = 9 - items[i].innerText;
    }
     
    var items = document.querySelectorAll(".item");
    var MaxButton = document.getElementById("sortByMaxValue");
    var MinButton = document.getElementById("sortByMinValue");
    
    
    MaxButton.onclick = function() {
        ascendingOrder()
    }
    
    MinButton.onclick = function() {
        descendingOrder()
    }

    $(function() {
 
    $(".item").draggable({

      // ドラッグ開始時
      start : function (event , ui){
        var target = document.getElementById(this.id);
        target.style.zIndex=100;
      },

      // ドラッグ終了時
      stop : function (event , ui){
          // console.log(event , ui);

          var nowPosition = new Object();
          var newPosition = new Array();

          // 現在のポジションを取得する
          for (var i = 1; i < 9; i++) {
              var positionData = getPosition(i);
              nowPosition = {'name':'item'+i,'position':positionData};

               newPosition.push(nowPosition);
          }

          // ソート
          newPosition.sort(function(a,b){
                  if( a['position'] > b['position'] ) return -1;
                  if( a['position'] < b['position'] ) return 1;
                  return 0;
          });

          // Orderを入れる
          var number = 0;
          for (var i = newPosition.length; i--; ) {
              console.log(newPosition[i].name);

              var tmpItem = document.getElementById(newPosition[i].name);
              tmpItem.style.order = number;
              tmpItem.style.left = 0;
              tmpItem.style.top = 0;

              number ++;
          }

        // 最後にz-indexを元に戻す
        var target = document.getElementById(this.id);
        target.style.zIndex=0;
      }

    });

    // position取得の関数
    function getPosition(item){
      var tmpItem = document.getElementById('item'+item);
      // console.dir(tmpItem);
      return tmpItem.offsetLeft;
    }
    });

};
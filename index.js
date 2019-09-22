window.onload = function() {

    function sortList(flag=true) {
        var toSort = document.getElementById('sortable').children;
        toSort = Array.prototype.slice.call(toSort, 0);

        toSort.sort(function(a, b) {
            var aord = a.innerText;
            var bord = b.innerText;

            if (flag) 
                return (aord > bord) ? 1 : -1;
            else
                return (aord < bord) ? 1 : -1;
        });

        var parent = document.getElementById('sortable');
        parent.innerHTML = "";

        for (var i = 0, l = toSort.length; i < l; i++) {
            parent.appendChild(toSort[i]);
        }
    }

    
    var MaxButton = document.getElementById("sortByMaxValue");
    var MinButton = document.getElementById("sortByMinValue");
    MaxButton.onclick = function() {
        sortList()
    }
    
    MinButton.onclick = function() {
        sortList(flag=false)
    }
    
    var delButton = document.getElementById("delbutt");
    delButton.onclick = function() {
        var delElements = document.querySelectorAll(".flag");
        for (var i=0; i < delElements.length; i++) {
            delElements[i].remove()
        }
        
        document.getElementById("delbutt").setAttribute("disabled", "disabled")     
    }
    
    var maximizeButton = document.getElementsByClassName("few")[0];
    maximizeButton.onclick = function() {
        var elements = document.querySelectorAll(".item");
        for (var i=0; i < elements.length; i++) {
            elements[i].style = "width: 420px; height:420px; line-height: 420px; font-size: 200px"
        }
    }
    
    var minimizeButton = document.getElementsByClassName("much")[0];
    minimizeButton.onclick = function() {
        var elements = document.querySelectorAll(".item");
        for (var i=0; i < elements.length; i++) {
            elements[i].style = "width: 200px; height:200px; line-height: 200px; font-size: 100px"
        }
    }
    
    // DON'T TOUCH
    $( function() {
        $("#sortable").sortable({
          revert: true,
          containment: "parent",
          cursor: "pointer"
        });
        
    $("#draggable").draggable({
      connectToSortable: "#sortable",
      helper: "clone",
      revert: true,
      });
        
    
    $("div").disableSelection();
    });

};
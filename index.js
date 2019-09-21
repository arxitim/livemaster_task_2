window.onload = function(){
    
    function maxSort() {
        for (var i = 0; i < items.length; i++)
            sorted_arr[i] = (Number(items[i].innerText));
        sorted_arr.sort()
        return sorted_arr
    }
    
    function ascendingOrder() {
        for (var i = 0; i < items.length; i++)
            items[i].style.order = items[i].innerText;
    }
     
    var items = document.querySelectorAll(".item");
    var MaxButton = document.getElementById("sortByMaxValue");
    var MinButton = document.getElementById("sortByMinValue");
    
    
    MaxButton.onclick = function() {
        ascendingOrder()
    }
    
    MinButton.onclick = function() {
        alert(maxSort(items).reverse())
    }
};
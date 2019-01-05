window.onload = function(){

    var createTable = document.getElementById('createTable');
    createTable.addEventListener('click',function(){

        var row = document.getElementById('row').value,
            col = document.getElementById('col').value,
            tableWidth = document.getElementById('tableWidth').value,
            tableHeight = document.getElementById('tableHeight').value,
            addTable = document.getElementById('addTable'),

            table = document.createElement('table');

        table.setAttribute('border','1');

        if(isNaN(row) || isNaN(col) || isNaN(tableWidth) || isNaN(tableHeight)){


            alert('Заполните формы');

        } else{

            for(i=0;i<row;i++){
                var tr = document.createElement('tr');

                for(j=0;j<col;j++){
                    var td = document.createElement('td');
                    td.style.width = tableWidth+'px';
                    td.style.height = tableHeight+'px';

                    td.addEventListener('mouseover',function(){

                        this.style.backgroundColor = randomColor();
                    })
                    if(i==j || (row-1)-i==j){
                        td.style.backgroundColor = 'yellow';
                    }

                    tr.appendChild(td);

                }
                table.appendChild(tr);

            }
            addTable.innerHTML = ' ';
            addTable.appendChild(table);

        }



    });

    function randomColor(){

        var R  = Math.round(Math.random()*255);
        var G  = Math.round(Math.random()*255);
        var B  = Math.round(Math.random()*255);

        return 'rgb('+R+','+G+','+B+')';

    }
    console.log(randomColor());




};


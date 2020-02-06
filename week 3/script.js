function newElement()
{
    var li = document.createElement("li");
    var input = document.getElementById("newtask").value;
    var t = document.createTextNode(input);
    li.append(t);
    
    if (input =='')
    {
        alert("Line is empty!");
    } else{
        document.getElementById("ul").appendChild(li);
    }
    document.getElementById("newtask").value = "";

    var span = document.createElement("span");
    var cross = document.createElement('IMG');
    cross.src = "Full_Trash.png";
    cross.style.width="22px";
    cross.style.width="30px";
    span.className = "close";
    span.append(cross);
    li.append(span);

    var check = document.createElement("input");
    check.type = "checkbox";
    check.className = "checked";
    list[i].prepend(check);
    
    for(i=0; i < close.length; ++i)
    {
        close[i].onclick = function()
        {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }

    var checked = document.getElementsByClassName("checked");
    for (i = 0; i < checked.length; ++i)
    {
        checked[i].onchange = function()
        {
            if (this.checked)
            {
                this.parentElement.classList.add("lined");
            }
            else
            {
                this.parentElement.classList.remove("lined");
            }
        }
    }
}

var list = document.getElementsByTagName("li");
var i;
for (i = 0; i <list.length; i++)
{
    var span = document.createElement("span");
    span.className = "close";
    span.append(cross);
    list[i].append(span);
    
    var check = document.createElement("input");
    check.type = "checkbox";
    check.className = "checked";
    list[i].prepend(check);
}

var close = document.getElementsByClassName("close");
var i;
for(i = 0; i < close.length; ++i)
{
    close[i].onclick = function()
    {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

var checked = document.getElementsByClassName("checked");
for (i = 0; i < checked.length; ++i)
{
    checked[i].onchange = function()
    {
        if (this.checked)
        {
            this.parentElement.classList.add("lined");
        }else
        {
            this.parentElement.classList.remove("lined");
        }
    }
}
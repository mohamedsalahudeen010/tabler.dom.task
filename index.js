//This table is in HTML, create the sasme table With Below Mentioned Information
//Using DOM 
function four(tagname,attrname,attrvalue,content){
    var table=document.createElement(tagname);
    table.setAttribute(attrname,attrvalue,)
    table.innerHTML=content;
    return table;
    }
    function three(tagname,attrname,attrvalue,){
      var table=document.createElement(tagname);
      table.setAttribute(attrname,attrvalue,)
      return table;
      }
  
    function two(tagname,content){
      var table=document.createElement(tagname);
      table.innerHTML=content;
      return table;
      }
  
      function one(tagname){
        var table=document.createElement(tagname);
        return table;
      }
  
  var table=three("table","class","table");
  var thead=three("thead","class","thead-dark")
  var tr1=one("tr");
  var th1=four("th","scope","col","First");
  var th2=four("th","scope","col","Middle");
  var th3=four("th","scope","col","Last");
  
  var tbody=one("tbody");
  var tr2=one("tr");
  var td1=two("td","Mark");
  var td2=two("td","Otto");
  var td3=two("td","@mdo");
  
  tr1.append(th1,th2,th3);
  thead.append(tr1);
  
  
  tr2.append(td1,td2,td3);
  tbody.append(tr2)
  
  table.append(thead,tbody);
  
  document.body.append(table);
  
  
  
  
  
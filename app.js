let sumaTotal = 0;
                let ingresosTotal = 0;
                let gastosTotal = 0;

                function sumar(var1,var2){
                    sum = parseInt(var1) + parseInt(var2);
                    return (sum);
                }
                function actualizarTotal(){
                    var signo = document.getElementById("signo").value;
                    if (signo == "ingreso"){
                        var valorAgregar = Math.abs(document.getElementById("agregar").value);
                        ingresosTotal = sumar(ingresosTotal, valorAgregar);
                    } else {
                        var valorAgregar = -Math.abs(document.getElementById("agregar").value);  
                        gastosTotal = sumar(gastosTotal, valorAgregar);  
                    }
                    sumaTotal = sumar(sumaTotal,valorAgregar);
                    document.getElementById("total").innerText = sumaTotal;
                    document.getElementById("ingresos").innerText = "+"+ingresosTotal;
                    document.getElementById("gastos").innerText = gastosTotal;
                }
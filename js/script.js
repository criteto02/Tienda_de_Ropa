//function compra() {
//var productos = new Array(60000, 50000, 45000, 30000, 38000, 34000, 90000, 83000, 70000);
//}
var compratotal = 0;

function agregar() {
	var prod = document.frmcompra.optProd;
	var pr = document.frmcompra.txtprecio;
	var c = document.frmcompra.txtcantidad;
	var p;
	var precio;

	if (pr.value.length < 1) {
		alert("Seleccione un Producto de la Lista");
		prod.focus();
	} else {
		if (c.value.length < 1) {
			alert("Digite la Cantidad de Productos que Comprará");
			c.focus();
		} else {
			if (isNaN(c.value)) {
				alert("Esto no es un número");
				c.focus();
			} else {
				switch (prod.value) {
					case "t":
						p = "Televisor LG 32''";
						precio = 899000;
						break;
					case "d":
						p = "DVD Samgung";
						precio = 80000;
						break;
					case "m":
						p = "Minicomponente Aiwa";
						precio = 640000;
						break;
					case "c":
						p = "Cámara SONY 12 Mpx";
						precio = 320000;
						break;
					case "i":
						p = "IPad 15''";
						precio = 1430000;
						break;
				}
				var cantidad = parseInt(c.value);
				var compra = cantidad * precio;
				compratotal = compratotal + compra;
				alert("Agregó $" + compra + " a su cuenta total.");
				alert("Su cuenta total está ahora en $" + compratotal + ".");
			}
		}
	}
}

function imagenP() {
	var producto = document.frmcompra.optProd;
	var p = document.frmcompra.txtprecio;
	switch (producto.value) {
		case "x":
			p.value = "";

			break;
		case "pro1":
			p.value = "60000";

			break;
		case 'pro2':
			p.value = "50000";
			break;
		case 'pro3':
			p.value = "45000";
			break;
		case 'pro4':
			p.value = "30000";

			break;
		case 'pro5':
			p.value = "38000";
			break;
	}
}

function comprar() {
	var producto = document.frmcompra.optProd;
	var i = document.frmcompra.txtid;
	var n = document.frmcompra.txtnombre;
	var nt = document.frmcompra.txtnumt;
	var prod = document.frmcompra.optProd;
	var p = document.frmcompra.txtprecio;
	var c = document.frmcompra.txtcantidad;
	var t = document.frmcompra.txttotal;
	if (i.value.length < 1) {
		alert("Digite el número de Identificación del Cliente");
		i.focus();
	} else {
		if (n.value.length < 1) {
			alert("Digite el nombre del Cliente");
			n.focus();
		} else {
			if (nt.value.length < 1) {
				alert("Digite el Número de la Tarjeta");
				nt.focus();
			} else {
				if (nt.value.length != 16) {
					alert("El número de la Tarjeta debe tener 16 dígitos");
					nt.focus();
				} else {
					switch (producto.value) {
						case "x":
							p.value = "";

							break;
						case "pro1":
							p.value = "60000";

							break;
						case 'pro2':
							p.value = "50000";
							break;
						case 'pro3':
							p.value = "45000";
							break;
						case 'pro4':
							p.value = "30000";

							break;
						case 'pro5':
							p.value = "38000";
							break;
					}
					alert("todo va bien");
					var cantidad = parseInt(c.value);
					alert("todo va bien");
					t = cantidad * p;

				}
				//Codigo tarjeta credito

			}
		}
	}
}

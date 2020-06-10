import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import swal from 'sweetalert2'; 

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	public numero;
	public number;
	public reverseArray;
	public found; 

	constructor() {
		this.numero = 0;
		this.number = 0;
		this.reverseArray = [];
		this.found = 0;
	}

	ngOnInit() {}

	onSubmit(f: NgForm) {
		var patron = /^\d*$/; //Expresión regular para aceptar solo números enteros
		this.number = f.value.numero
		if (patron.test(this.number)) {
			if (this.number>=0 && this.number<=927372692193079200000) {
				this.reverseArray = this.fibonacci(102).reverse();
				this.found = this.reverseArray.find(element => element <= this.number);
				if(this.found==0){
					this.found='0';
				}
				swal.fire({
					icon: 'success',
					title: 'El número inmediato de la serie de Fibonacci menor o igual es:',
					text: this.found
				})
			}	
			else {
				swal.fire({
					icon: 'error',
					title: 'Error!!!',
					text: 'El número debe ser estar en el rango de 0 - 927372692193079200000'
				})
			}	
		} else {
			swal.fire({
				icon: 'error',
				title: 'Error!!!',
				text: 'El número que ingresaste no es un entero positivo, por favor intenta de nuevo con un número válido'
			})
		}
	}

	fibonacci(n) {
		if (n===1) {
			return [0, 1];
		} 
		else {
			// Uso de recursividad
			var array = this.fibonacci(n - 1);
			array.push(array[array.length - 1] + array[array.length - 2]);
			return array;
		}
	}
	
}

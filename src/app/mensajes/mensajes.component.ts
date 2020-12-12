import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MensajesService } from 'src/app/servicios/mensajes.service';
import { ComplementosService } from 'src/app/servicios/complementos.service';

@Component({
	selector: 'app-mensajes',
	templateUrl: './mensajes.component.html',
	styleUrls: ['./mensajes.component.scss'],
})
export class MensajesComponent implements OnInit, OnDestroy {
	public usuario: string = null;
	public salaChat: string = null;
	public splash: boolean = false;
	public sub: any;
	public form: FormGroup = new FormGroup({
		mensaje: new FormControl(null, [Validators.required, Validators.maxLength(21)])
	})
	public mensajeError = [{ type: 'required', message: 'El mensaje debe tener al menos 1 caracter.' },
	{ type: 'maxlength', message: 'El mensaje debe tener como maximo 21 caracteres.' }]
	public listaMensajes: Array<any> = [];
	constructor(private mensj: MensajesService, private comp: ComplementosService) { }

	ngOnInit() {
		this.splash = true;
		let x: any = JSON.parse(localStorage.getItem('identif'));
		this.usuario = x.usuario;
		this.salaChat = x.sala;
		this.sub = this.mensj.traerTodos().subscribe(refs => {
			this.listaMensajes = refs.map(snap => {
				const x: any = snap.payload.doc.data() as any;
				x['id'] = snap.payload.doc.id;
				return { ...x };
			}).filter(x => x.sala === this.salaChat);
			this.splash = false;
		});
	}

	enviarMensj() {
		console.log(this.form.controls.mensaje.errors);
		if (this.form.controls.mensaje.valid) {
			this.mensj.crear(this.form.controls.mensaje.value, this.salaChat, this.usuario);
		} else {
			for (let y of this.mensajeError) {
				let index = this.mensajeError.findIndex(x => this.form.controls.mensaje.getError(x.type));
				if (index !== -1) {
					let mensaje = this.mensajeError[index].message;
					this.comp.presentToastConMensajeYColor(mensaje, 'danger');
					break;
				}
			}
		}
	}

	public ngOnDestroy(): void {
		if (this.sub !== null) {
			this.sub.unsubscribe();
		}
	}

}

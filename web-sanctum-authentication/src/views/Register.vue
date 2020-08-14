<template>
	<v-container>
		<v-row class="justify-center">
			<v-col cols="12" sm="7" md="6" lg="5" xl="4">
				<v-card class="pa-10">
					<v-card-title class="pa-0 mb-10 text-h4">Registro</v-card-title>
					<form @submit.prevent="register()">
						<v-text-field
							label="Nombre"
							outlined
							clearable
							v-model="$v.name.$model"
						></v-text-field>
						<v-text-field
							label="Correo electrónico"
							outlined
							clearable
							v-model="$v.email.$model"
						></v-text-field>
						<v-text-field
							label="Contraseña"
							outlined
							clearable
							hint="Al menos 8 caracteres."
							type="password"
							v-model="$v.password.$model"
						></v-text-field>
						<v-text-field
							label="Repetir contraseña"
							outlined
							clearable
							type="password"
							v-model="$v.repeatPassword.$model"
						></v-text-field>
						<v-btn
							block
							color="blue darken-2 white--text"
							large
							:disabled="$v.$invalid"
							type="submit"
							class="mb-7"
						>Registrarse</v-btn>
					</form>
					<v-divider class="mb-8"></v-divider>
					<div class="text-center text-h6">
						<span class="mr-1">Ya estás registrado?</span>
						<router-link :to="{name: 'Login'}" class="text-decoration-none ml-1 blue-darken-2--text">Inicia sesión</router-link>
					</div>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>

import { validationMixin } from 'vuelidate'
import { required, minLength, email, sameAs } from 'vuelidate/lib/validators'

export default {
	name: 'Login',
	data() {
		return {
			name: '',
			email: '',
			password: '',
			repeatPassword: ''
		}
	},
	methods: {
		register() {
			console.log('Register');
		}
	},
	mixins: [validationMixin],
	validations: {
		name: {
			required,
			minLength: minLength(4)
		},
		email: {
			required,
			email
		},
		password: {
			required,
			minLength: minLength(8)
		},
		repeatPassword: {
			sameAsPassword: sameAs('password')
		}
	},
}
</script>
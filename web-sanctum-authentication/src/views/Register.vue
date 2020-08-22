<template>
	<v-container>
		<v-row class="justify-center">
			<v-col cols="12" sm="7" md="6" lg="5" xl="4">
				<v-card class="pa-10">
					<v-card-title class="pa-0 mb-10 text-h4">Registro</v-card-title>
					<form @submit.prevent="register(form)">
						<v-text-field
							label="Nombre"
							outlined
							clearable
							v-model="$v.form.name.$model"
						></v-text-field>
						<v-text-field
							label="Correo electrónico"
							outlined
							clearable
							v-model="$v.form.email.$model"
						></v-text-field>
						<v-text-field
							label="Contraseña"
							outlined
							clearable
							hint="Al menos 8 caracteres."
							type="password"
							v-model="$v.form.password.$model"
						></v-text-field>
						<v-text-field
							label="Repetir contraseña"
							outlined
							clearable
							type="password"
							v-model="$v.form.password_confirmation.$model"
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
import { mapActions, mapState } from 'vuex'

export default {
	name: 'Register',
	data() {
		return {
			form: {
				name: 'Daniel Cruz',
				email: 'danielcruz@iitech.mx',
				password: 'password',
				password_confirmation: 'password'
			}
		}
	},
	methods: {
		...mapActions(['register']),
	},
	computed: {
		...mapState(['user', 'loading', 'user'])
	},
	mixins: [validationMixin],
	validations: {
		form: {
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
			password_confirmation: {
				sameAsPassword: sameAs('password')
			}
		}
	},
}
</script>
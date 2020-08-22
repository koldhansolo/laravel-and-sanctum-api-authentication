<template>
	<v-container>
		<v-row class="justify-center">
			<v-col cols="12" sm="7" md="6" lg="5" xl="4">
				<v-card class="pa-10">
					<v-card-title class="pa-0 mb-10 text-h4">Iniciar sesión</v-card-title>
					<form @submit.prevent="login(form)">
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
						<v-btn
							block
							color="blue darken-2 white--text"
							large
							:disabled="$v.$invalid"
							type="submit"
							class="mb-7"
							:loading="loading"
						>Iniciar sesión</v-btn>
					</form>
					<v-divider class="mb-8"></v-divider>
					<div class="text-center text-h6">
						<span class="mr-1">¿Eres nuevo?</span>
						<router-link :to="{name: 'Register'}" class="text-decoration-none ml-1 blue-darken-2--text">Registrate</router-link>
					</div>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>

import { validationMixin } from 'vuelidate'
import { required, minLength, email } from 'vuelidate/lib/validators'
import { mapActions, mapState } from 'vuex'


export default {
	name: 'Login',
	data() {
		return {
			form: {
				email: 'emai@example.com',
				password: 'itsasecret',
			},
		}
	},
	methods: {
		...mapActions(['login']),
	},
	computed: {
		...mapState(['user', 'loading', 'user'])
	},
	mixins: [validationMixin],
	validations: {
		form: {
			email: {
				required,
				email
			},
			password: {
				required,
				minLength: minLength(8)
			}
		}
		
	},
}
</script>
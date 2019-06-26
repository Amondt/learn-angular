import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { AuthService } from '../../services/auth.service'
import { Router } from '@angular/router'

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {

    signupForm: FormGroup
    errorMsg: string

    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService,
        private router: Router
    ) { }

    ngOnInit() {
        this.initForm()
    }

    initForm = () => {
        this.signupForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            pwd: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
        })
    }

    onSubmit = () => {
        const email = this.signupForm.get('email').value
        const pwd = this.signupForm.get('pwd').value

        this.authService.createNewUser(email, pwd).then(
            () => this.router.navigate(['/books']),
            err => this.errorMsg = err
        )
    }

}

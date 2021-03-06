import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { AuthService } from '../../services/auth.service'
import { Router } from '@angular/router'

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.scss']
})

export class SigninComponent implements OnInit {

    signinForm: FormGroup
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
        this.signinForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            pwd: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
        })
    }

    onSubmit = () => {
        const email = this.signinForm.get('email').value
        const pwd = this.signinForm.get('pwd').value

        this.authService.signInUser(email, pwd).then(
            () => this.router.navigate(['/books']),
            err => this.errorMsg = err
        )
    }
}

import { Component } from "@angular/core";
import { AbstractControl, FormControl, FormGroup, Validators } from "@angular/forms";

class Taytotita {
  id: string;
  description: string;


  constructor(id: string, description: string) {
    this.id = id;
    this.description = description;
  }

}

class Provider {
  id: string;
  description: string;


  constructor(id: string, description: string) {
    this.id = id;
    this.description = description;
  }
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
    myFormModel: FormGroup;
    identityTypes = [
      new Taytotita('1', 'ΑΤ ΑΣΤΥΝΟΜΙΚΗ ΤΑΥΤΟΤΗΤΑ'),
      new Taytotita('2', 'ΕΣ ΕΛΛΗΝΙΚΟΣ ΣΤΡΑΤΟΣ'),
      new Taytotita('3', 'ΠΑ ΠΟΛΕΜΙΚΗ ΑΕΡΟΠΟΡΙΑ'),
      new Taytotita('4', 'ΛΣ ΛΙΜΕΝΙΚΟ ΣΩΜΑ')
   ]
    
   mobilePhoneProviders = [
     new Provider('1', 'COSMOTE'),
     new Provider('2', 'VODAFONE'),
     new Provider('3', 'WIND')
   ]


  constructor() {
    this.myFormModel = new FormGroup({
      klidarithmosChoice: new FormControl("doy"),
      passwordsGroup: new FormGroup({
        username: new FormControl('',[Validators.required, Validators.minLength(3)]),
        password: new FormControl('', Validators.required),
        pconfirm: new FormControl('', Validators.required)
      }),
      personDetails: new FormGroup({
        afm: new FormControl(null, Validators.required),
        lastname: new FormControl(null, Validators.required),
        firstname: new FormControl(null, Validators.required),
        fathername: new FormControl(null, Validators.required),
        idKind: new FormControl(null, Validators.required),
        identityNum: new FormControl(null),
        ibanNum: new FormControl(null)
      }),
      comDetails: new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        phoneNumber: new FormControl('', Validators.required),
        mobilePhoneNumber: new FormControl(null),
        mobileProvider: new FormControl(null, [Validators.required])
      }),
      acceptTerms: new FormControl('', Validators.required)
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.myFormModel.controls; }

  get person() {
    return this.myFormModel.controls.personDetails as FormGroup;
  }

  get comdetails () {
    return this.myFormModel.controls.comDetails as FormGroup;
  }

  get passwordsarea () {
    return this.myFormModel.controls.passwordsGroup as FormGroup;
  }

  onSubmit() {
    console.log(this.myFormModel.value);
  }

  changeKlType(event) {
    console.log(event.target.value);
  }
}

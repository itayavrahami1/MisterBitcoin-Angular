import { AbstractControl } from '@angular/forms';
import { FormControl } from '@angular/forms';

interface ValidationResult {
    [key: string]: boolean;
}


export class ContactFormValidator {

    static startsWithNumber(control: FormControl): ValidationResult {
        if (control.value != "" && !isNaN(control.value.charAt(0))) {
            return { "startsWithNumber": true };
        }
        return null;
    }

    static vaildPhoneNumber(control: FormControl): ValidationResult {
        // const phoneRegEx = new RegExp(`^[+]*\\d{1,3}\\s{0,1}[(]{0,1}[0-9]{1,4}[)]{0,1}\\s{0,1}[-\\s\\.0-9]*$`);
        // TODO -maybe add minlength to the phonr number test
        const phoneRegEx = new RegExp(`(\\d){1,13}`);
        if (control.value != "" && phoneRegEx.test(control.value)) {
            return { "vaildPhoneNumber": true }
        }
        return null
        // return { "vaildPhoneNumber": false }
    }

    static vaildEmail(control: FormControl): ValidationResult {
        const emailRegExp = new RegExp(`^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$`);
        if (control.value != "" && emailRegExp.test(control.value)) {return { "vaildEmail": true }};
        return { "vaildEmail": false }
    }

    // static usernameTaken(control: AbstractControl): Promise<ValidationResult> {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             if (control.value === "puki") {
    //                 resolve({"usernameTaken": true})
    //             } else {
    //                 resolve(null);
    //             };

    //         }, 1000);
    //     });
    // }
}
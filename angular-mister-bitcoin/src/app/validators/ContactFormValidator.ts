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
        // const phoneRegEx = new RegExp(`([+]?\\b\\d{1,2}[.-\\s]?)?[(\\s]?(\\d{1,3}){1}[)\s]?([-\\s]?\\d{1,4}){1,3}`);
        const phoneRegEx = new RegExp(`(\\d){1,13}`);
        
        if (control.value != "" && phoneRegEx.test(control.value)) {return { "vaildPhoneNumber": true }};
        return { "vaildPhoneNumber": false }
    }

    static vaildemail(control: FormControl): ValidationResult {
        const emailRegEx = new RegExp(`[a-z]{1,15}[@][a-z]{1,8}[.][a-z]{2,4}`);
        console.log(emailRegEx,emailRegEx.test(control.value));
        if (control.value != "" && emailRegEx.test(control.value)) {return { "vaildEmail": true }};
        return null
        // return { "vaildEmail": false }
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
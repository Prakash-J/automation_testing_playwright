export interface UserData {
    salutation: string;            // User's salutation (either 'Mr' or 'Ms')
    userFirstName: string;
    userLastName: string;
    userFullName: string;
    email: string;
    password: string;                   // User's password
    day: string;                        // Day of birth (from the day dropdown)
    month: string;                      // Month of birth (from the month dropdown)
    year: string;                       // Year of birth (from the year dropdown)
    newsLetterSignUp: boolean;          // Whether the user wants to sign up for newsletters
    receiveSpecialOffer: boolean;       // Whether the user wants to receive special offers
    company: string;                    // Company name
    addressOne: string;                 // Address line 1
    addressTwo: string;                 // Address line 2
    country: string;                    // Country (from the country dropdown)
    state: string;                      // State or region
    city: string;                       // City
    zipcode: string;                    // Zip/postal code
    mobileNumber: string;               // User's mobile phone number   
}
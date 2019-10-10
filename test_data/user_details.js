import { randomText } from "../utils/general";

const countries = ['Brazil', 'Germany', 'Finland', 'Zambia', 'Angola', 'India'];

const edit_user_details = [
    {
        salutation: 'Mr.'
    },
    {
        salutation: 'Mrs.',
        birthPlace: 'Mitte ' + randomText()
    },
    {
        addressStreet: 'Alexanderstr. ' + randomText()
    },
    {
        addressCountryIsoCode: countries[Math.floor(Math.random() * countries.length)]
    },
    {
        birthPlace: 'Wedding ' + randomText(),
        salutation: 'Mr.',
        addressCountryIsoCode: countries[Math.floor(Math.random() * countries.length)]
    }
];

const invalid_user_cred = {
    username: randomText() +'@gmail.com',
    password: 'Pass' + randomText()
};

export {
    edit_user_details,
    invalid_user_cred
}

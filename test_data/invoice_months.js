let d = new Date();
const months = ['Jan ','Feb ', 'Mar ','Apr ','May ','Jun ','Jul ','Aug ','Sep ','Oct ','Nov ','Dec '];
const years = ['2019', '2018'];
let data = [];
years.forEach((year) => {
    let total = 11;
    if(year == d.getFullYear())
        total = d.getMonth();
    for (let i = 0; i <= total; i++) {
        data.push(months[i] + year);
    }
});

export const invoice_months = data;
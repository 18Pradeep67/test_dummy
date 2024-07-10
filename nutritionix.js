import axios from "axios";

const url = 'https://trackapi.nutritionix.com/v2/natural/nutrients';

async function nutrition() {
    try {
        const response = await axios.post(url,{query:'avocado'} ,{
            headers: {
                'x-app-id': '6565d806',
                'x-app-key': '4c30b33b137c9b4a0282354e8ea7ff32',
            }
        });
        console.log(response.data);
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
}

nutrition();

import axios from "axios";
import axiosConfig from "../../services/axios";
import URLS_EXTERNAL from "./urls_external";

class BibliaDigitalRepository{
 
    async getRandomVerse() {
        try {

            // axios({
            //     method:"POST",
            //     url : `${URLS_EXTERNAL.BIBLIA_DIGIAL_URL}/api/verses/:version/random`,
            //     headers: {
            //         "content-type":"application/x-www-form-urlencoded",
            //         "x-rapidapi-host":"astrology-horoscope.p.rapidapi.com",
            //         "x-rapidapi-key": "yourapikey"
            //     },
            //     params: {
            //         mystic_dob: yourBirthday,
            //         mystic_dob2: theirBirthday,
            //         mystic_name: yourName,
            //         mystic_name2: theirName
            //     }
            // })
            const url = `${URLS_EXTERNAL.BIBLIA_DIGIAL_URL}/verses/nvi/random`;
            const res = await axiosConfig.get(url);
          return res;
        } catch (error) {
            // console.log({error})
            throw new Error('Erro api')
            // console.log({error})

        //   return error;
        }
      }

}

export { BibliaDigitalRepository };
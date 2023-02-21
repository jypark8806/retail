import axios from 'axios';

export default class requestAjax {
    public static getKopisRueqestData = async(url: string, param: any) => {
        let result: any = null;
        await axios.post(url, {...param, service: '1aa6d730877f40fbaea2d9c81929fb45'}, null).then((res : any) => {
            result = res;
        }).catch((error) => {
            console.log(error);
            throw new Error('에러 발생');
        });

        return result;
    }
}

import {ApiRequest, AxiosPromise} from './../modules/api-communication/';
import Base from './base'
export default  {

    constructor() { },
    add(param: any) : Promise<any>
    {
        return Base.post('dealItem', '', param);
    },
    getDealItemsOfDeal(dealId: number) : Promise<any>
    {
        return Base.get('dealItem', 'Deal/' + dealId);
    },
    get(id: number) : Promise<any>
    {
        return Base.get('dealItem', '' + id);
    },
    edit(id: number, param: any) : Promise<any>
    {
        return Base.put('dealItem', '' + id , param);
    }
}
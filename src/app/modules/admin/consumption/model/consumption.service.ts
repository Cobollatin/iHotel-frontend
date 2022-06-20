import {Customers} from '../../components.model';
import {Services} from '../../service/pages/service.component';

export interface Consumptions{
    id: number;
    customer: Customers;
    service: Array<Services>;
}

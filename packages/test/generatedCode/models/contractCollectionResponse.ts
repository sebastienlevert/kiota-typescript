import {BaseCollectionPaginationCountResponse, Contract} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ContractCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: Contract[];
}

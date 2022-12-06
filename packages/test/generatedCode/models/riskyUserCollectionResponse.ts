import {BaseCollectionPaginationCountResponse, RiskyUser} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface RiskyUserCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: RiskyUser[];
}

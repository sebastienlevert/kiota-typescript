import {BaseCollectionPaginationCountResponse, ServiceHealth} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ServiceHealthCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: ServiceHealth[];
}

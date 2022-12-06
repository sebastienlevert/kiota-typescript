import {BaseCollectionPaginationCountResponse, Domain} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DomainCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: Domain[];
}

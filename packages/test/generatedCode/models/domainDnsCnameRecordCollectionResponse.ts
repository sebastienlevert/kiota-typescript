import {BaseCollectionPaginationCountResponse, DomainDnsCnameRecord} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DomainDnsCnameRecordCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: DomainDnsCnameRecord[];
}

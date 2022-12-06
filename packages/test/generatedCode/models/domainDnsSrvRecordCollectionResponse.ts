import {BaseCollectionPaginationCountResponse, DomainDnsSrvRecord} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DomainDnsSrvRecordCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: DomainDnsSrvRecord[];
}

import {BaseCollectionPaginationCountResponse, DomainDnsUnavailableRecord} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DomainDnsUnavailableRecordCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: DomainDnsUnavailableRecord[];
}

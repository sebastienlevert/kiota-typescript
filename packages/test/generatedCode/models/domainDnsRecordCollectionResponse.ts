import {BaseCollectionPaginationCountResponse, DomainDnsRecord} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DomainDnsRecordCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: DomainDnsRecord[];
}

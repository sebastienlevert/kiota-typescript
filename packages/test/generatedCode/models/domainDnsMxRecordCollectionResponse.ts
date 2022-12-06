import {BaseCollectionPaginationCountResponse, DomainDnsMxRecord} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DomainDnsMxRecordCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: DomainDnsMxRecord[];
}

import {BaseCollectionPaginationCountResponse, DomainDnsTxtRecord} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DomainDnsTxtRecordCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: DomainDnsTxtRecord[];
}

import {BaseCollectionPaginationCountResponse, ExternalDomainName} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ExternalDomainNameCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: ExternalDomainName[];
}

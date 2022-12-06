import {BaseCollectionPaginationCountResponse, ProxiedDomain} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ProxiedDomainCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: ProxiedDomain[];
}

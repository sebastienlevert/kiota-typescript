import {BaseCollectionPaginationCountResponse, VerifiedDomain} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface VerifiedDomainCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: VerifiedDomain[];
}

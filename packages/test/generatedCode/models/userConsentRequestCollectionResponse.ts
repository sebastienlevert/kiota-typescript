import {BaseCollectionPaginationCountResponse, UserConsentRequest} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UserConsentRequestCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: UserConsentRequest[];
}

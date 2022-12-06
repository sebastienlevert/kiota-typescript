import {BaseCollectionPaginationCountResponse, TermsAndConditionsAcceptanceStatus} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TermsAndConditionsAcceptanceStatusCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: TermsAndConditionsAcceptanceStatus[];
}

import {BaseCollectionPaginationCountResponse, TermsAndConditions} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TermsAndConditionsCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: TermsAndConditions[];
}

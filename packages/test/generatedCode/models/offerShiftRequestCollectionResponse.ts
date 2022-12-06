import {BaseCollectionPaginationCountResponse, OfferShiftRequest} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface OfferShiftRequestCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: OfferShiftRequest[];
}

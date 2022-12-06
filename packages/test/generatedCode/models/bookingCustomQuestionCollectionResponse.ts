import {BaseCollectionPaginationCountResponse, BookingCustomQuestion} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface BookingCustomQuestionCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: BookingCustomQuestion[];
}

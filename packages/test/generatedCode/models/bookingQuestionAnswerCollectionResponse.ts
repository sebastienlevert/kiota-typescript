import {BaseCollectionPaginationCountResponse, BookingQuestionAnswer} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface BookingQuestionAnswerCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: BookingQuestionAnswer[];
}

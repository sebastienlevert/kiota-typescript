import {BaseCollectionPaginationCountResponse, BookingQuestionAssignment} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface BookingQuestionAssignmentCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: BookingQuestionAssignment[];
}

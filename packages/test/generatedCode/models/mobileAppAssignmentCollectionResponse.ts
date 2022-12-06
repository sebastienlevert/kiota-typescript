import {BaseCollectionPaginationCountResponse, MobileAppAssignment} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface MobileAppAssignmentCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: MobileAppAssignment[];
}

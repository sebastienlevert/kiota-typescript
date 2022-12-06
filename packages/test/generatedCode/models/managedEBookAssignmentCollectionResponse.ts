import {BaseCollectionPaginationCountResponse, ManagedEBookAssignment} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ManagedEBookAssignmentCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: ManagedEBookAssignment[];
}

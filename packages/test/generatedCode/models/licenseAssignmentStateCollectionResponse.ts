import {BaseCollectionPaginationCountResponse, LicenseAssignmentState} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface LicenseAssignmentStateCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: LicenseAssignmentState[];
}

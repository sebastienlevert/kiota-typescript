import {BaseCollectionPaginationCountResponse, EnrollmentTroubleshootingEvent} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EnrollmentTroubleshootingEventCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: EnrollmentTroubleshootingEvent[];
}

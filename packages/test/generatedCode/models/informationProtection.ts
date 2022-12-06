import {Bitlocker, Entity, ThreatAssessmentRequest} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface InformationProtection extends Entity, Partial<Parsable> {
    /** The bitlocker property */
    bitlocker?: Bitlocker;
    /** The threatAssessmentRequests property */
    threatAssessmentRequests?: ThreatAssessmentRequest[];
}

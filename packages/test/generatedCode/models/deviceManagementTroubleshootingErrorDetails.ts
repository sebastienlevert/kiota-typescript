import {DeviceManagementTroubleshootingErrorResource} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceManagementTroubleshootingErrorDetails extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Not yet documented */
    context?: string;
    /** Not yet documented */
    failure?: string;
    /** The detailed description of what went wrong. */
    failureDetails?: string;
    /** The detailed description of how to remediate this issue. */
    remediation?: string;
    /** Links to helpful documentation about this failure. */
    resources?: DeviceManagementTroubleshootingErrorResource[];
}

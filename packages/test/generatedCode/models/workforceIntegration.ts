import {ChangeTrackedEntity, WorkforceIntegrationEncryption} from './index';
import {WorkforceIntegrationSupportedEntities} from './workforceIntegrationSupportedEntities';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkforceIntegration extends ChangeTrackedEntity, Partial<Parsable> {
    /** API version for the call back URL. Start with 1. */
    apiVersion?: number;
    /** Name of the workforce integration. */
    displayName?: string;
    /** The workforce integration encryption resource. */
    encryption?: WorkforceIntegrationEncryption;
    /** Indicates whether this workforce integration is currently active and available. */
    isActive?: boolean;
    /** The Shifts entities supported for synchronous change notifications. Shifts will make a call back to the url provided on client changes on those entities added here. By default, no entities are supported for change notifications. Possible values are: none, shift, swapRequest, userShiftPreferences, openshift, openShiftRequest, offerShiftRequest, unknownFutureValue. */
    supportedEntities?: WorkforceIntegrationSupportedEntities;
    /** Workforce Integration URL for callbacks from the Shifts service. */
    url?: string;
}

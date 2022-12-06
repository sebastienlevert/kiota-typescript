import {AdditionalDataHolder, Duration, Parsable} from '@microsoft/kiota-abstractions';

export interface AccessPackageAutomaticRequestSettings extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The gracePeriodBeforeAccessRemoval property */
    gracePeriodBeforeAccessRemoval?: Duration;
    /** The OdataType property */
    odataType?: string;
    /** The removeAccessWhenTargetLeavesAllowedTargets property */
    removeAccessWhenTargetLeavesAllowedTargets?: boolean;
    /** If set to true, automatic assignments will be created for targets in the allowed target scope. */
    requestAccessForAllowedTargets?: boolean;
}

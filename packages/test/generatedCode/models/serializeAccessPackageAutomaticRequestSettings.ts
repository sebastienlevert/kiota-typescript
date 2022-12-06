import {AccessPackageAutomaticRequestSettings} from './index';
import {AdditionalDataHolder, Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessPackageAutomaticRequestSettings(writer: SerializationWriter, accessPackageAutomaticRequestSettings: AccessPackageAutomaticRequestSettings | undefined = {}) : void {
            writer.writeDurationValue("gracePeriodBeforeAccessRemoval", accessPackageAutomaticRequestSettings.gracePeriodBeforeAccessRemoval);
            writer.writeStringValue("@odata.type", accessPackageAutomaticRequestSettings.odataType);
            writer.writeBooleanValue("removeAccessWhenTargetLeavesAllowedTargets", accessPackageAutomaticRequestSettings.removeAccessWhenTargetLeavesAllowedTargets);
            writer.writeBooleanValue("requestAccessForAllowedTargets", accessPackageAutomaticRequestSettings.requestAccessForAllowedTargets);
}

import {AccessPackageAutomaticRequestSettings} from './index';
import {AdditionalDataHolder, Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessPackageAutomaticRequestSettings(accessPackageAutomaticRequestSettings: AccessPackageAutomaticRequestSettings | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "gracePeriodBeforeAccessRemoval": n => { accessPackageAutomaticRequestSettings.gracePeriodBeforeAccessRemoval = n.getDurationValue() as any ; },
        "@odata.type": n => { accessPackageAutomaticRequestSettings.odataType = n.getStringValue() as any ; },
        "removeAccessWhenTargetLeavesAllowedTargets": n => { accessPackageAutomaticRequestSettings.removeAccessWhenTargetLeavesAllowedTargets = n.getBooleanValue() as any ; },
        "requestAccessForAllowedTargets": n => { accessPackageAutomaticRequestSettings.requestAccessForAllowedTargets = n.getBooleanValue() as any ; },
    }
}

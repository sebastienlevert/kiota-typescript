import {AccessPackageExternalUserLifecycleAction} from './accessPackageExternalUserLifecycleAction';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {EntitlementManagementSettings} from './index';
import {Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEntitlementManagementSettings(entitlementManagementSettings: EntitlementManagementSettings | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(entitlementManagementSettings),
        "durationUntilExternalUserDeletedAfterBlocked": n => { entitlementManagementSettings.durationUntilExternalUserDeletedAfterBlocked = n.getDurationValue() as any ; },
        "externalUserLifecycleAction": n => { entitlementManagementSettings.externalUserLifecycleAction = n.getEnumValue<AccessPackageExternalUserLifecycleAction>(AccessPackageExternalUserLifecycleAction) as any ; },
    }
}

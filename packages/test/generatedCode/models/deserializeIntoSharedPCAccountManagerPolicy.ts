import {SharedPCAccountManagerPolicy} from './index';
import {SharedPCAccountDeletionPolicyType} from './sharedPCAccountDeletionPolicyType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSharedPCAccountManagerPolicy(sharedPCAccountManagerPolicy: SharedPCAccountManagerPolicy | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "accountDeletionPolicy": n => { sharedPCAccountManagerPolicy.accountDeletionPolicy = n.getEnumValue<SharedPCAccountDeletionPolicyType>(SharedPCAccountDeletionPolicyType) as any ; },
        "cacheAccountsAboveDiskFreePercentage": n => { sharedPCAccountManagerPolicy.cacheAccountsAboveDiskFreePercentage = n.getNumberValue() as any ; },
        "inactiveThresholdDays": n => { sharedPCAccountManagerPolicy.inactiveThresholdDays = n.getNumberValue() as any ; },
        "@odata.type": n => { sharedPCAccountManagerPolicy.odataType = n.getStringValue() as any ; },
        "removeAccountsBelowDiskFreePercentage": n => { sharedPCAccountManagerPolicy.removeAccountsBelowDiskFreePercentage = n.getNumberValue() as any ; },
    }
}

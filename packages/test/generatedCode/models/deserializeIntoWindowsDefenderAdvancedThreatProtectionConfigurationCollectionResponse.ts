import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoWindowsDefenderAdvancedThreatProtectionConfiguration} from './deserializeIntoWindowsDefenderAdvancedThreatProtectionConfiguration';
import {WindowsDefenderAdvancedThreatProtectionConfigurationCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindowsDefenderAdvancedThreatProtectionConfigurationCollectionResponse(windowsDefenderAdvancedThreatProtectionConfigurationCollectionResponse: WindowsDefenderAdvancedThreatProtectionConfigurationCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(windowsDefenderAdvancedThreatProtectionConfigurationCollectionResponse),
        "value": n => { windowsDefenderAdvancedThreatProtectionConfigurationCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoWindowsDefenderAdvancedThreatProtectionConfiguration) as any ; },
    }
}

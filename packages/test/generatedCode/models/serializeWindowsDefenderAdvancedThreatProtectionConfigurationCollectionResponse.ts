import {WindowsDefenderAdvancedThreatProtectionConfigurationCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeWindowsDefenderAdvancedThreatProtectionConfiguration} from './serializeWindowsDefenderAdvancedThreatProtectionConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWindowsDefenderAdvancedThreatProtectionConfigurationCollectionResponse(writer: SerializationWriter, windowsDefenderAdvancedThreatProtectionConfigurationCollectionResponse: WindowsDefenderAdvancedThreatProtectionConfigurationCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, windowsDefenderAdvancedThreatProtectionConfigurationCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", windowsDefenderAdvancedThreatProtectionConfigurationCollectionResponse.value as any, serializeWindowsDefenderAdvancedThreatProtectionConfiguration);
}

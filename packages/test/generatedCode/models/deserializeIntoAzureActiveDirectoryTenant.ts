import {deserializeIntoIdentitySource} from './deserializeIntoIdentitySource';
import {AzureActiveDirectoryTenant} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAzureActiveDirectoryTenant(azureActiveDirectoryTenant: AzureActiveDirectoryTenant | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoIdentitySource(azureActiveDirectoryTenant),
        "displayName": n => { azureActiveDirectoryTenant.displayName = n.getStringValue() as any ; },
        "tenantId": n => { azureActiveDirectoryTenant.tenantId = n.getStringValue() as any ; },
    }
}

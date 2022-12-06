import {AzureActiveDirectoryTenant} from './index';
import {serializeIdentitySource} from './serializeIdentitySource';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAzureActiveDirectoryTenant(writer: SerializationWriter, azureActiveDirectoryTenant: AzureActiveDirectoryTenant | undefined = {}) : void {
        serializeIdentitySource(writer, azureActiveDirectoryTenant)
            writer.writeStringValue("displayName", azureActiveDirectoryTenant.displayName);
            writer.writeStringValue("tenantId", azureActiveDirectoryTenant.tenantId);
}

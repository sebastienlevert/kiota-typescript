import {ConnectedOrganizationState} from './connectedOrganizationState';
import {ConnectedOrganization} from './index';
import {serializeDirectoryObject} from './serializeDirectoryObject';
import {serializeEntity} from './serializeEntity';
import {serializeIdentitySource} from './serializeIdentitySource';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeConnectedOrganization(writer: SerializationWriter, connectedOrganization: ConnectedOrganization | undefined = {}) : void {
        serializeEntity(writer, connectedOrganization)
            writer.writeDateValue("createdDateTime", connectedOrganization.createdDateTime);
            writer.writeStringValue("description", connectedOrganization.description);
            writer.writeStringValue("displayName", connectedOrganization.displayName);
            writer.writeCollectionOfObjectValuesFromMethod("externalSponsors", connectedOrganization.externalSponsors as any, serializeDirectoryObject);
            writer.writeCollectionOfObjectValuesFromMethod("identitySources", connectedOrganization.identitySources as any, serializeIdentitySource);
            writer.writeCollectionOfObjectValuesFromMethod("internalSponsors", connectedOrganization.internalSponsors as any, serializeDirectoryObject);
            writer.writeDateValue("modifiedDateTime", connectedOrganization.modifiedDateTime);
            writer.writeEnumValue<ConnectedOrganizationState>("state", connectedOrganization.state);
}

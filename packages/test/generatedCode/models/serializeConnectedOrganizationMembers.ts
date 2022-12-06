import {ConnectedOrganizationMembers} from './index';
import {serializeSubjectSet} from './serializeSubjectSet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeConnectedOrganizationMembers(writer: SerializationWriter, connectedOrganizationMembers: ConnectedOrganizationMembers | undefined = {}) : void {
        serializeSubjectSet(writer, connectedOrganizationMembers)
            writer.writeStringValue("connectedOrganizationId", connectedOrganizationMembers.connectedOrganizationId);
            writer.writeStringValue("description", connectedOrganizationMembers.description);
}

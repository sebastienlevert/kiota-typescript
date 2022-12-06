import {deserializeIntoSubjectSet} from './deserializeIntoSubjectSet';
import {ConnectedOrganizationMembers} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoConnectedOrganizationMembers(connectedOrganizationMembers: ConnectedOrganizationMembers | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoSubjectSet(connectedOrganizationMembers),
        "connectedOrganizationId": n => { connectedOrganizationMembers.connectedOrganizationId = n.getStringValue() as any ; },
        "description": n => { connectedOrganizationMembers.description = n.getStringValue() as any ; },
    }
}

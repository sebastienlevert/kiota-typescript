import {ConnectedOrganizationState} from './connectedOrganizationState';
import {deserializeIntoDirectoryObject} from './deserializeIntoDirectoryObject';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoIdentitySource} from './deserializeIntoIdentitySource';
import {ConnectedOrganization} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoConnectedOrganization(connectedOrganization: ConnectedOrganization | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(connectedOrganization),
        "createdDateTime": n => { connectedOrganization.createdDateTime = n.getDateValue() as any ; },
        "description": n => { connectedOrganization.description = n.getStringValue() as any ; },
        "displayName": n => { connectedOrganization.displayName = n.getStringValue() as any ; },
        "externalSponsors": n => { connectedOrganization.externalSponsors = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDirectoryObject) as any ; },
        "identitySources": n => { connectedOrganization.identitySources = n.getCollectionOfObjectValuesFromMethod(deserializeIntoIdentitySource) as any ; },
        "internalSponsors": n => { connectedOrganization.internalSponsors = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDirectoryObject) as any ; },
        "modifiedDateTime": n => { connectedOrganization.modifiedDateTime = n.getDateValue() as any ; },
        "state": n => { connectedOrganization.state = n.getEnumValue<ConnectedOrganizationState>(ConnectedOrganizationState) as any ; },
    }
}

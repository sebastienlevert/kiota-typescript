import {ContactRelationship} from './contactRelationship';
import {RelatedContact} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRelatedContact(relatedContact: RelatedContact | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "accessConsent": n => { relatedContact.accessConsent = n.getBooleanValue() as any ; },
        "displayName": n => { relatedContact.displayName = n.getStringValue() as any ; },
        "emailAddress": n => { relatedContact.emailAddress = n.getStringValue() as any ; },
        "mobilePhone": n => { relatedContact.mobilePhone = n.getStringValue() as any ; },
        "@odata.type": n => { relatedContact.odataType = n.getStringValue() as any ; },
        "relationship": n => { relatedContact.relationship = n.getEnumValue<ContactRelationship>(ContactRelationship) as any ; },
    }
}

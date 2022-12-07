import {RelatedPerson} from './index';
import {PersonRelationship} from './personRelationship';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRelatedPerson(relatedPerson: RelatedPerson | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "displayName": n => { relatedPerson.displayName = n.getStringValue() as any ; },
        "relationship": n => { relatedPerson.relationship = n.getEnumValue<PersonRelationship>(PersonRelationship) as any ; },
        "userPrincipalName": n => { relatedPerson.userPrincipalName = n.getStringValue() as any ; },
    }
}

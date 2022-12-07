import {RelatedPerson} from './index';
import {PersonRelationship} from './personRelationship';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRelatedPerson(writer: SerializationWriter, relatedPerson: RelatedPerson | undefined = {}) : void {
            writer.writeStringValue("displayName", relatedPerson.displayName);
            writer.writeEnumValue<PersonRelationship>("relationship", relatedPerson.relationship);
            writer.writeStringValue("userPrincipalName", relatedPerson.userPrincipalName);
}

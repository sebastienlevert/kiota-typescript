import {EmailType} from './emailType';
import {ItemEmail} from './index';
import {serializeItemFacet} from './serializeItemFacet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeItemEmail(writer: SerializationWriter, itemEmail: ItemEmail | undefined = {}) : void {
        serializeItemFacet(writer, itemEmail)
            writer.writeStringValue("address", itemEmail.address);
            writer.writeStringValue("displayName", itemEmail.displayName);
            writer.writeEnumValue<EmailType>("type", itemEmail.type);
}

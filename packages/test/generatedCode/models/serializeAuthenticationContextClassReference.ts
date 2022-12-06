import {AuthenticationContextClassReference} from './index';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAuthenticationContextClassReference(writer: SerializationWriter, authenticationContextClassReference: AuthenticationContextClassReference | undefined = {}) : void {
        serializeEntity(writer, authenticationContextClassReference)
            writer.writeStringValue("description", authenticationContextClassReference.description);
            writer.writeStringValue("displayName", authenticationContextClassReference.displayName);
            writer.writeBooleanValue("isAvailable", authenticationContextClassReference.isAvailable);
}

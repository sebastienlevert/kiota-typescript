import {deserializeIntoEntity} from './deserializeIntoEntity';
import {AuthenticationContextClassReference} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAuthenticationContextClassReference(authenticationContextClassReference: AuthenticationContextClassReference | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(authenticationContextClassReference),
        "description": n => { authenticationContextClassReference.description = n.getStringValue() as any ; },
        "displayName": n => { authenticationContextClassReference.displayName = n.getStringValue() as any ; },
        "isAvailable": n => { authenticationContextClassReference.isAvailable = n.getBooleanValue() as any ; },
    }
}

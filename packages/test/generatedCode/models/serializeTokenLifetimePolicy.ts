import {TokenLifetimePolicy} from './index';
import {serializeStsPolicy} from './serializeStsPolicy';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTokenLifetimePolicy(writer: SerializationWriter, tokenLifetimePolicy: TokenLifetimePolicy | undefined = {}) : void {
        serializeStsPolicy(writer, tokenLifetimePolicy)
}

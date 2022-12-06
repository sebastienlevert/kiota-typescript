import {TokenIssuancePolicy} from './index';
import {serializeStsPolicy} from './serializeStsPolicy';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTokenIssuancePolicy(writer: SerializationWriter, tokenIssuancePolicy: TokenIssuancePolicy | undefined = {}) : void {
        serializeStsPolicy(writer, tokenIssuancePolicy)
}

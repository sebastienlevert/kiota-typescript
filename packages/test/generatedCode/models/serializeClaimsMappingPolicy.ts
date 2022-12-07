import {ClaimsMappingPolicy} from './index';
import {serializeStsPolicy} from './serializeStsPolicy';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeClaimsMappingPolicy(writer: SerializationWriter, claimsMappingPolicy: ClaimsMappingPolicy | undefined = {}) : void {
        serializeStsPolicy(writer, claimsMappingPolicy)
}

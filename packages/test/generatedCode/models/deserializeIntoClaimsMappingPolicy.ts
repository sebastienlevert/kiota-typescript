import {deserializeIntoStsPolicy} from './deserializeIntoStsPolicy';
import {ClaimsMappingPolicy} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoClaimsMappingPolicy(claimsMappingPolicy: ClaimsMappingPolicy | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoStsPolicy(claimsMappingPolicy),
    }
}

import {deserializeIntoStsPolicy} from './deserializeIntoStsPolicy';
import {TokenIssuancePolicy} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTokenIssuancePolicy(tokenIssuancePolicy: TokenIssuancePolicy | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoStsPolicy(tokenIssuancePolicy),
    }
}

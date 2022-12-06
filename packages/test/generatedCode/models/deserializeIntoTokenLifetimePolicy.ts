import {deserializeIntoStsPolicy} from './deserializeIntoStsPolicy';
import {TokenLifetimePolicy} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTokenLifetimePolicy(tokenLifetimePolicy: TokenLifetimePolicy | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoStsPolicy(tokenLifetimePolicy),
    }
}

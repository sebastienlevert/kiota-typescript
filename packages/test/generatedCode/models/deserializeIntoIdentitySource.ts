import {IdentitySource} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIdentitySource(identitySource: IdentitySource | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { identitySource.odataType = n.getStringValue() as any ; },
    }
}

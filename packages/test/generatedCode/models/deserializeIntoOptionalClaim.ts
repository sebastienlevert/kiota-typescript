import {OptionalClaim} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOptionalClaim(optionalClaim: OptionalClaim | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "additionalProperties": n => { optionalClaim.additionalProperties = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "essential": n => { optionalClaim.essential = n.getBooleanValue() as any ; },
        "name": n => { optionalClaim.name = n.getStringValue() as any ; },
        "@odata.type": n => { optionalClaim.odataType = n.getStringValue() as any ; },
        "source": n => { optionalClaim.source = n.getStringValue() as any ; },
    }
}

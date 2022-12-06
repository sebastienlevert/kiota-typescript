import {ConditionalAccessLocations} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoConditionalAccessLocations(conditionalAccessLocations: ConditionalAccessLocations | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "excludeLocations": n => { conditionalAccessLocations.excludeLocations = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "includeLocations": n => { conditionalAccessLocations.includeLocations = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "@odata.type": n => { conditionalAccessLocations.odataType = n.getStringValue() as any ; },
    }
}

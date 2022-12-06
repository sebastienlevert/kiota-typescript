import {Configuration} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoConfiguration(configuration: Configuration | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "authorizedAppIds": n => { configuration.authorizedAppIds = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "@odata.type": n => { configuration.odataType = n.getStringValue() as any ; },
    }
}

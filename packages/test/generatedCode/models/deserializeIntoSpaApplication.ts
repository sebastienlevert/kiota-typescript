import {SpaApplication} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSpaApplication(spaApplication: SpaApplication | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { spaApplication.odataType = n.getStringValue() as any ; },
        "redirectUris": n => { spaApplication.redirectUris = n.getCollectionOfPrimitiveValues<string>() as any ; },
    }
}

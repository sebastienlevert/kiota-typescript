import {PublicClientApplication} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPublicClientApplication(publicClientApplication: PublicClientApplication | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { publicClientApplication.odataType = n.getStringValue() as any ; },
        "redirectUris": n => { publicClientApplication.redirectUris = n.getCollectionOfPrimitiveValues<string>() as any ; },
    }
}

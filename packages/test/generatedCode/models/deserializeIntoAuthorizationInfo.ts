import {AuthorizationInfo} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAuthorizationInfo(authorizationInfo: AuthorizationInfo | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "certificateUserIds": n => { authorizationInfo.certificateUserIds = n.getCollectionOfPrimitiveValues<string>() as any ; },
    }
}

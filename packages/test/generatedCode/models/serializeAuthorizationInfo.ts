import {AuthorizationInfo} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAuthorizationInfo(writer: SerializationWriter, authorizationInfo: AuthorizationInfo | undefined = {}) : void {
            writer.writeCollectionOfPrimitiveValues<string>("certificateUserIds", authorizationInfo.certificateUserIds);
}

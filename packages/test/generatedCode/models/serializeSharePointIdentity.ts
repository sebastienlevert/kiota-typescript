import {SharePointIdentity} from './index';
import {serializeIdentity} from './serializeIdentity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSharePointIdentity(writer: SerializationWriter, sharePointIdentity: SharePointIdentity | undefined = {}) : void {
        serializeIdentity(writer, sharePointIdentity)
            writer.writeStringValue("loginName", sharePointIdentity.loginName);
}

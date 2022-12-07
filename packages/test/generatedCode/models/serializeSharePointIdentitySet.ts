import {SharePointIdentitySet} from './index';
import {serializeIdentity} from './serializeIdentity';
import {serializeIdentitySet} from './serializeIdentitySet';
import {serializeSharePointIdentity} from './serializeSharePointIdentity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSharePointIdentitySet(writer: SerializationWriter, sharePointIdentitySet: SharePointIdentitySet | undefined = {}) : void {
        serializeIdentitySet(writer, sharePointIdentitySet)
            writer.writeObjectValueFromMethod("group", sharePointIdentitySet.group as any, serializeIdentity);
            writer.writeObjectValueFromMethod("siteGroup", sharePointIdentitySet.siteGroup as any, serializeSharePointIdentity);
            writer.writeObjectValueFromMethod("siteUser", sharePointIdentitySet.siteUser as any, serializeSharePointIdentity);
}

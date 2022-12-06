import {SingleServicePrincipal} from './index';
import {serializeSubjectSet} from './serializeSubjectSet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSingleServicePrincipal(writer: SerializationWriter, singleServicePrincipal: SingleServicePrincipal | undefined = {}) : void {
        serializeSubjectSet(writer, singleServicePrincipal)
            writer.writeStringValue("description", singleServicePrincipal.description);
            writer.writeStringValue("servicePrincipalId", singleServicePrincipal.servicePrincipalId);
}

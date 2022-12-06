import {SingleUser} from './index';
import {serializeSubjectSet} from './serializeSubjectSet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSingleUser(writer: SerializationWriter, singleUser: SingleUser | undefined = {}) : void {
        serializeSubjectSet(writer, singleUser)
            writer.writeStringValue("description", singleUser.description);
            writer.writeStringValue("userId", singleUser.userId);
}

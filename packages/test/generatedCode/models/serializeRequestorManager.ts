import {RequestorManager} from './index';
import {serializeSubjectSet} from './serializeSubjectSet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRequestorManager(writer: SerializationWriter, requestorManager: RequestorManager | undefined = {}) : void {
        serializeSubjectSet(writer, requestorManager)
            writer.writeNumberValue("managerLevel", requestorManager.managerLevel);
}

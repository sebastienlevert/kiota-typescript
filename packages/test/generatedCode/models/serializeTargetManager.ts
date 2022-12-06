import {TargetManager} from './index';
import {serializeSubjectSet} from './serializeSubjectSet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTargetManager(writer: SerializationWriter, targetManager: TargetManager | undefined = {}) : void {
        serializeSubjectSet(writer, targetManager)
            writer.writeNumberValue("managerLevel", targetManager.managerLevel);
}

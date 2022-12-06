import {TargetApplicationOwners} from './index';
import {serializeSubjectSet} from './serializeSubjectSet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTargetApplicationOwners(writer: SerializationWriter, targetApplicationOwners: TargetApplicationOwners | undefined = {}) : void {
        serializeSubjectSet(writer, targetApplicationOwners)
}

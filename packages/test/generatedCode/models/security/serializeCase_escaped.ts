import {serializeEntity} from '../serializeEntity';
import {serializeIdentitySet} from '../serializeIdentitySet';
import {CaseStatus} from './caseStatus';
import {Case_escaped} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCase_escaped(writer: SerializationWriter, case_escaped: Case_escaped | undefined = {}) : void {
        serializeEntity(writer, case_escaped)
            writer.writeDateValue("createdDateTime", case_escaped.createdDateTime);
            writer.writeStringValue("description", case_escaped.description);
            writer.writeStringValue("displayName", case_escaped.displayName);
            writer.writeObjectValueFromMethod("lastModifiedBy", case_escaped.lastModifiedBy as any, serializeIdentitySet);
            writer.writeDateValue("lastModifiedDateTime", case_escaped.lastModifiedDateTime);
            writer.writeEnumValue<CaseStatus>("status", case_escaped.status);
}

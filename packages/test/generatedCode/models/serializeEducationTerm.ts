import {EducationTerm} from './index';
import {AdditionalDataHolder, DateOnly, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationTerm(writer: SerializationWriter, educationTerm: EducationTerm | undefined = {}) : void {
            writer.writeStringValue("displayName", educationTerm.displayName);
            writer.writeDateOnlyValue("endDate", educationTerm.endDate);
            writer.writeStringValue("externalId", educationTerm.externalId);
            writer.writeStringValue("@odata.type", educationTerm.odataType);
            writer.writeDateOnlyValue("startDate", educationTerm.startDate);
}

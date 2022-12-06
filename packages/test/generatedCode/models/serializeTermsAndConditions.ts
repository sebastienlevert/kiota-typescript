import {TermsAndConditions} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeTermsAndConditionsAcceptanceStatus} from './serializeTermsAndConditionsAcceptanceStatus';
import {serializeTermsAndConditionsAssignment} from './serializeTermsAndConditionsAssignment';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTermsAndConditions(writer: SerializationWriter, termsAndConditions: TermsAndConditions | undefined = {}) : void {
        serializeEntity(writer, termsAndConditions)
            writer.writeStringValue("acceptanceStatement", termsAndConditions.acceptanceStatement);
            writer.writeCollectionOfObjectValuesFromMethod("acceptanceStatuses", termsAndConditions.acceptanceStatuses as any, serializeTermsAndConditionsAcceptanceStatus);
            writer.writeCollectionOfObjectValuesFromMethod("assignments", termsAndConditions.assignments as any, serializeTermsAndConditionsAssignment);
            writer.writeStringValue("bodyText", termsAndConditions.bodyText);
            writer.writeDateValue("createdDateTime", termsAndConditions.createdDateTime);
            writer.writeStringValue("description", termsAndConditions.description);
            writer.writeStringValue("displayName", termsAndConditions.displayName);
            writer.writeDateValue("lastModifiedDateTime", termsAndConditions.lastModifiedDateTime);
            writer.writeStringValue("title", termsAndConditions.title);
            writer.writeNumberValue("version", termsAndConditions.version);
}

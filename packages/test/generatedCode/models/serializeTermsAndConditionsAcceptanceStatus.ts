import {TermsAndConditionsAcceptanceStatus} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeTermsAndConditions} from './serializeTermsAndConditions';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTermsAndConditionsAcceptanceStatus(writer: SerializationWriter, termsAndConditionsAcceptanceStatus: TermsAndConditionsAcceptanceStatus | undefined = {}) : void {
        serializeEntity(writer, termsAndConditionsAcceptanceStatus)
            writer.writeDateValue("acceptedDateTime", termsAndConditionsAcceptanceStatus.acceptedDateTime);
            writer.writeNumberValue("acceptedVersion", termsAndConditionsAcceptanceStatus.acceptedVersion);
            writer.writeObjectValueFromMethod("termsAndConditions", termsAndConditionsAcceptanceStatus.termsAndConditions as any, serializeTermsAndConditions);
            writer.writeStringValue("userDisplayName", termsAndConditionsAcceptanceStatus.userDisplayName);
            writer.writeStringValue("userPrincipalName", termsAndConditionsAcceptanceStatus.userPrincipalName);
}
